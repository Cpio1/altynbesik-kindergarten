import "server-only";
import fs from "node:fs";
import path from "node:path";

/**
 * Находит материалы в public/images при сборке.
 * Новый файл подхватывается автоматически: достаточно положить его в папку и задеплоить.
 * Пустые и повреждённые файлы пропускаются, поэтому битых картинок на сайте не будет.
 */

const IMAGE_EXT = /\.(png|jpe?g|webp)$/i;
const VIDEO_TYPES: Record<string, string> = {
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".mov": "video/quicktime",
};

export type AboutMedia =
  | { kind: "image"; src: string }
  | { kind: "video"; src: string; type: string; poster: string | null };

export type SiteMedia = {
  hero: string | null;
  about: AboutMedia | null;
  gallery: string[];
};

function hasImageSignature(filePath: string): boolean {
  const header = Buffer.alloc(12);
  const fd = fs.openSync(filePath, "r");
  try {
    fs.readSync(fd, header, 0, 12, 0);
  } finally {
    fs.closeSync(fd);
  }
  const isJpeg = header[0] === 0xff && header[1] === 0xd8;
  const isPng = header.subarray(0, 4).toString("hex") === "89504e47";
  const isWebp =
    header.subarray(0, 4).toString("latin1") === "RIFF" &&
    header.subarray(8, 12).toString("latin1") === "WEBP";
  return isJpeg || isPng || isWebp;
}

export function getSiteMedia(): SiteMedia {
  const dir = path.join(process.cwd(), "public", "images");
  const entries = fs.existsSync(dir) ? fs.readdirSync(dir).sort() : [];

  const files = entries.filter((file) => {
    const stat = fs.statSync(path.join(dir, file));
    return stat.isFile() && stat.size > 0;
  });
  const images = files.filter(
    (file) => IMAGE_EXT.test(file) && hasImageSignature(path.join(dir, file)),
  );

  const url = (file: string) => `/images/${encodeURIComponent(file)}`;
  const baseName = (file: string) => path.parse(file).name.toLowerCase();
  const findImage = (name: string) => images.find((file) => baseName(file) === name);

  const hero = findImage("main-page");
  const aboutImage = findImage("main-page2");
  const aboutVideo = files.find(
    (file) =>
      baseName(file) === "main-page2" &&
      path.extname(file).toLowerCase() in VIDEO_TYPES,
  );
  const poster = findImage("main-page2-poster") ?? aboutImage ?? hero;

  let about: AboutMedia | null = null;
  if (aboutVideo) {
    about = {
      kind: "video",
      src: url(aboutVideo),
      type: VIDEO_TYPES[path.extname(aboutVideo).toLowerCase()],
      poster: poster ? url(poster) : null,
    };
  } else if (aboutImage) {
    about = { kind: "image", src: url(aboutImage) };
  }

  const byNumber = new Map<number, string>();
  for (const file of images) {
    const match = /^image(\d+)$/.exec(baseName(file));
    if (match && !byNumber.has(Number(match[1]))) {
      byNumber.set(Number(match[1]), url(file));
    }
  }
  const gallery = [...byNumber.entries()]
    .sort(([a], [b]) => a - b)
    .map(([, src]) => src);

  return { hero: hero ? url(hero) : null, about, gallery };
}
