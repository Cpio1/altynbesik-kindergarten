import type { ReactNode } from "react";

/** Авторские иллюстрации сайта. Все декоративные: смысл передаётся текстом рядом. */

const INK = "#26352C";
const GOLD = "#E9B949";
const BUTTER = "#FFF0BD";
const SAGE = "#86A77B";
const MINT = "#EAF3DF";
const MILK = "#FFF9ED";
const SKIN = "#F7D5AE";
const SKIN_DEEP = "#EDBE8E";
const HAIR = "#4B3A2C";

function Art({
  viewBox,
  className,
  children,
  slice = false,
}: {
  viewBox: string;
  className?: string;
  children: ReactNode;
  slice?: boolean;
}) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox={viewBox}
      preserveAspectRatio={slice ? "xMidYMid slice" : "xMidYMid meet"}
      className={className}
    >
      {children}
    </svg>
  );
}

function Smile({ x, y, r = 1 }: { x: number; y: number; r?: number }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${r})`}>
      <circle cx="-7" cy="-2" r="2.2" fill={INK} />
      <circle cx="7" cy="-2" r="2.2" fill={INK} />
      <path d="M-5 4q5 5 10 0" fill="none" stroke={INK} strokeWidth="2" strokeLinecap="round" />
      <circle cx="-12" cy="3" r="2.6" fill="#F2A68B" opacity="0.55" />
      <circle cx="12" cy="3" r="2.6" fill="#F2A68B" opacity="0.55" />
    </g>
  );
}

/** Фирменный знак: золотая колыбель-бесік со звездой. */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <Art viewBox="0 0 48 48" className={className}>
      <path d="M33 4l1.500 3.600L38 9l-3.500 1.400L33 14l-1.500-3.600L28 9l3.500-1.400z" fill={GOLD} />
      <circle cx="17" cy="16" r="7" fill={SKIN} stroke={INK} strokeWidth="1.800" />
      <path d="M4 20h40c0 11-8.500 18-20 18S4 31 4 20Z" fill={GOLD} />
      <path d="M12 26c5 3 19 3 24 0" fill="none" stroke={BUTTER} strokeWidth="2.200" strokeLinecap="round" />
      <path d="M9 41q15 7 30 0" fill="none" stroke={SAGE} strokeWidth="4" strokeLinecap="round" />
    </Art>
  );
}

type KidProps = {
  x: number;
  y: number;
  scale?: number;
  shirt: string;
  pants?: string;
  skin?: string;
  hair?: "short" | "pigtails" | "bob";
  arms?: "up" | "wave" | "down";
  flip?: boolean;
};

/** Ребёнок из округлых форм: опорная точка у ступней. */
function Kid({
  x,
  y,
  scale = 1,
  shirt,
  pants = INK,
  skin = SKIN,
  hair = "short",
  arms = "up",
  flip = false,
}: KidProps) {
  const armPaths = {
    up: ["M-12 -58 L-26 -82", "M12 -58 L26 -82"],
    wave: ["M-12 -58 L-24 -40", "M12 -58 L27 -80"],
    down: ["M-12 -58 L-22 -36", "M12 -58 L22 -36"],
  }[arms];
  return (
    <g transform={`translate(${x} ${y}) scale(${flip ? -scale : scale} ${scale})`}>
      <path
        d="M-7 -30V-3M7 -30V-3"
        stroke={pants}
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
      />
      {armPaths.map((d) => (
        <path key={d} d={d} stroke={skin} strokeWidth="7.500" strokeLinecap="round" fill="none" />
      ))}
      <path d="M-15 -60q15 -8 30 0l3 34h-36Z" fill={shirt} strokeLinejoin="round" stroke={shirt} strokeWidth="3" />
      <circle cx="0" cy="-82" r="17" fill={skin} />
      {hair === "short" && <path d="M-17 -84c-1-23 35-24 34 0-7-7-25-8-34 0Z" fill={HAIR} />}
      {hair === "bob" && (
        <path d="M-19 -74c-6-31 44-31 38 0l-6-2c0-9-5-13-13-14-9 0-13 5-13 14Z" fill={HAIR} />
      )}
      {hair === "pigtails" && (
        <>
          <circle cx="-22" cy="-88" r="7" fill={HAIR} />
          <circle cx="22" cy="-88" r="7" fill={HAIR} />
          <path d="M-17 -84c-1-23 35-24 34 0-7-7-25-8-34 0Z" fill={HAIR} />
        </>
      )}
      <circle cx="-6" cy="-81" r="2" fill={INK} />
      <circle cx="6" cy="-81" r="2" fill={INK} />
      <path d="M-5 -75q5 5 10 0" fill="none" stroke={INK} strokeWidth="1.800" strokeLinecap="round" />
    </g>
  );
}

function SceneCloud({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <path
      transform={`translate(${x} ${y}) scale(${s})`}
      fill="#fff"
      d="M22 48C10 48 2 40 2 31s7-15 16-15C21 7 29 2 38 2c10 0 18 6 20 14 3-1 5-1 8-1 11 0 22 8 22 17 0 10-9 16-20 16H22Z"
    />
  );
}

/** Сцена первого экрана: показывается, пока нет фотографии main-page.*. */
export function HeroScene({
  className = "",
  viewBox = "0 0 640 600",
}: {
  className?: string;
  viewBox?: string;
}) {
  return (
    <Art viewBox={viewBox} className={className} slice>
      <defs>
        <linearGradient id="hero-sky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#FFE9A4" />
          <stop offset="0.65" stopColor={BUTTER} />
          <stop offset="1" stopColor={MINT} />
        </linearGradient>
      </defs>
      <rect width="640" height="600" fill="url(#hero-sky)" />

      <g stroke={GOLD} strokeWidth="9" strokeLinecap="round">
        <path d="M478 26v22M478 188v22M386 118h22M548 118h22M413 53l15 15M528 168l15 15M543 53l-15 15M428 168l-15 15" />
      </g>
      <circle cx="478" cy="118" r="54" fill={GOLD} />
      <Smile x={478} y={118} r={1.5} />

      <SceneCloud x={84} y={72} s={1.350} />
      <SceneCloud x={296} y={168} s={0.8} />
      <SceneCloud x={540} y={236} s={0.85} />

      <path d="M-10 410c120-70 250-80 360-40s210 30 300-20v260H-10Z" fill="#BFD4B2" />

      {/* Дерево слева */}
      <rect x="82" y="320" width="16" height="86" rx="8" fill="#9A7B55" />
      <circle cx="90" cy="290" r="50" fill={SAGE} />
      <circle cx="58" cy="318" r="30" fill={SAGE} />
      <circle cx="122" cy="316" r="32" fill="#9CBB91" />

      {/* Здание */}
      <rect x="176" y="288" width="310" height="164" rx="20" fill="#fff" />
      <path d="M154 300c0-8 5-13 12-16l150-72c9-4 21-4 30 0l150 72c7 3 12 8 12 16 0 9-7 14-15 14H169c-8 0-15-5-15-14Z" fill={GOLD} />
      <circle cx="331" cy="264" r="24" fill={MILK} />
      <path d="M319 262h24c0 8-5 13-12 13s-12-5-12-13Z" fill={GOLD} />
      <circle cx="326" cy="257" r="5" fill={SKIN} />
      <path d="M322 279q9 4 18 0" stroke={SAGE} strokeWidth="2.500" fill="none" strokeLinecap="round" />

      {[
        [204, 336],
        [414, 336],
      ].map(([x, y]) => (
        <g key={x}>
          <rect x={x} y={y} width="46" height="54" rx="23" fill={BUTTER} stroke={SAGE} strokeWidth="5" />
          <path d={`M${x + 23} ${y + 2}v50M${x + 2} ${y + 30}h42`} stroke={SAGE} strokeWidth="3.500" />
        </g>
      ))}
      <path d="M296 452v-76a35 35 0 0 1 70 0v76Z" fill={SAGE} />
      <circle cx="353" cy="414" r="4" fill={BUTTER} />

      {/* Флажки */}
      <path d="M176 322q155 42 310 0" fill="none" stroke={INK} strokeOpacity="0.4" strokeWidth="2" />
      {[
        [206, 330, GOLD],
        [256, 339, SAGE],
        [406, 339, SAGE],
        [456, 330, GOLD],
      ].map(([x, y, fill]) => (
        <path key={x as number} d={`M${x} ${y}l16 2-6 16Z`} fill={fill as string} />
      ))}

      <path d="M-10 470c110-40 230-38 340-14s220 26 320-12v170H-10Z" fill={SAGE} />
      <path d="M-10 530c130-34 270-30 370-12s190 14 290-14v110H-10Z" fill="#9CBB91" />

      {/* Цветы */}
      {[
        [58, 520],
        [598, 512],
        [240, 560],
        [430, 572],
      ].map(([x, y]) => (
        <g key={x} transform={`translate(${x} ${y})`}>
          {[0, 72, 144, 216, 288].map((a) => (
            <circle key={a} cx="0" cy="-8" r="5.500" fill="#fff" transform={`rotate(${a})`} />
          ))}
          <circle r="4.500" fill={GOLD} />
        </g>
      ))}

      <Kid x={150} y={558} scale={1.15} shirt={GOLD} hair="pigtails" arms="up" pants="#fff" />
      <Kid x={300} y={562} scale={1} shirt="#fff" hair="short" arms="wave" skin={SKIN_DEEP} />
      <Kid x={515} y={556} scale={1.2} shirt={BUTTER} hair="bob" arms="up" />
    </Art>
  );
}

/** Сцена раздела «Балабақша туралы»: золотая колыбель среди звёзд. */
export function CradleScene({ className = "" }: { className?: string }) {
  return (
    <Art viewBox="0 0 560 640" className={className} slice>
      <defs>
        <linearGradient id="cradle-sky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#CFE0C3" />
          <stop offset="1" stopColor={MINT} />
        </linearGradient>
      </defs>
      <rect width="560" height="640" fill="url(#cradle-sky)" />
      <SceneCloud x={40} y={150} s={1.100} />
      <SceneCloud x={400} y={230} s={0.950} />
      <path fill={GOLD} d="M286 90c-30 6-50 32-46 62 4 31 34 52 64 46-16-5-34-22-36-47-3-25 7-46 18-61Z" />
      {[
        [130, 110, 1],
        [370, 110, 0.8],
        [448, 170, 1.100],
        [90, 280, 0.8],
        [476, 340, 0.8],
      ].map(([x, y, s]) => (
        <path
          key={x}
          transform={`translate(${x} ${y}) scale(${s})`}
          fill={GOLD}
          d="M0-16c2 9 7 14 16 16-9 2-14 7-16 16-2-9-7-14-16-16 9-2 14-7 16-16Z"
        />
      ))}
      <path d="M-10 500c120-50 240-50 340-26s170 20 240-14v190H-10Z" fill={SAGE} />
      <path d="M-10 570c130-30 280-26 380-8s140 10 200-10v100H-10Z" fill="#9CBB91" />

      <path d="M136 498c60 44 228 44 288 0" fill="none" stroke="#B9882A" strokeWidth="15" strokeLinecap="round" />
      <path d="M190 490 L176 524M370 490 L384 524" stroke="#B9882A" strokeWidth="11" strokeLinecap="round" />
      <path d="M158 300c0-60 244-60 244 0" fill="none" stroke="#B9882A" strokeWidth="11" strokeLinecap="round" />
      <path d="M158 298v44M402 298v44" stroke="#B9882A" strokeWidth="11" strokeLinecap="round" />
      <path d="M134 348h292c8 0 14 7 13 15-8 74-62 132-159 132S129 437 121 363c-1-8 5-15 13-15Z" fill={GOLD} />
      <circle cx="244" cy="326" r="42" fill={SKIN} />
      <path d="M204 326c-6-48 86-58 82-4-14-14-54-18-82 4Z" fill={HAIR} />
      <path d="M226 330q7-6 14 0M256 330q7-6 14 0" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      <path d="M239 346q6 6 12 0" fill="none" stroke={INK} strokeWidth="3" strokeLinecap="round" />
      <path d="M124 352h312c6 0 10 6 7 12-11 24-46 38-82 34-30-3-48-18-81-18-33 0-52 16-84 18-30 2-62-12-79-34-4-5 1-12 7-12Z" fill={BUTTER} />
      {[210, 280, 350].map((x) => (
        <path
          key={x}
          transform={`translate(${x} 438)`}
          fill={BUTTER}
          d="m0-16 4.500 10 10.800 1-8.200 7.300 2.500 10.700L0 7.500-9.600 13l2.500-10.700-8.200-7.300 10.800-1z"
        />
      ))}
    </Art>
  );
}

const groupFaces: ((className: string) => ReactNode)[] = [
  // Солнышко
  (className) => (
    <Art viewBox="0 0 80 80" className={className}>
      <g stroke={INK} strokeWidth="4" strokeLinecap="round">
        <path d="M40 6v8M40 66v8M6 40h8M66 40h8M16 16l6 6M58 58l6 6M64 16l-6 6M22 58l-6 6" />
      </g>
      <circle cx="40" cy="40" r="22" fill={GOLD} stroke={INK} strokeWidth="2.500" />
      <Smile x={40} y={40} />
    </Art>
  ),
  // Облачко
  (className) => (
    <Art viewBox="0 0 80 80" className={className}>
      <path d="M22 58c-9 0-16-7-16-15s6-14 14-15c2-9 10-14 19-14 10 0 18 6 20 15 8 0 15 6 15 14s-7 15-16 15H22Z" fill="#fff" stroke={INK} strokeWidth="2.500" />
      <Smile x={40} y={40} />
      <path d="M26 66v6M40 66v8M54 66v6" stroke={SAGE} strokeWidth="4" strokeLinecap="round" />
    </Art>
  ),
  // Звёздочка
  (className) => (
    <Art viewBox="0 0 80 80" className={className}>
      <path d="m40 6 10 21 23 3-17 16 4 23-20-11-20 11 4-23L7 30l23-3 10-21Z" fill={BUTTER} stroke={INK} strokeWidth="2.500" strokeLinejoin="round" />
      <Smile x={40} y={41} r={0.9} />
    </Art>
  ),
  // Цветок
  (className) => (
    <Art viewBox="0 0 80 80" className={className}>
      <g fill="#fff" stroke={INK} strokeWidth="2.500">
        {[0, 60, 120, 180, 240, 300].map((a) => (
          <circle key={a} cx="40" cy="17" r="13" transform={`rotate(${a} 40 40)`} />
        ))}
      </g>
      <circle cx="40" cy="40" r="17" fill={GOLD} stroke={INK} strokeWidth="2.500" />
      <Smile x={40} y={40} r={0.8} />
    </Art>
  ),
  // Птичка
  (className) => (
    <Art viewBox="0 0 80 80" className={className}>
      <path d="M12 38c0-16 13-27 29-27 15 0 27 11 27 26 0 18-14 30-30 30-15 0-26-12-26-29Z" fill={SAGE} stroke={INK} strokeWidth="2.500" />
      <path d="M20 44c10-6 22 0 21 11-10 6-21 1-21-11Z" fill={MINT} stroke={INK} strokeWidth="2.500" />
      <path d="m66 30 10 5-10 5Z" fill={GOLD} stroke={INK} strokeWidth="2.500" strokeLinejoin="round" />
      <circle cx="53" cy="28" r="3.200" fill={INK} />
      <path d="M32 12c0-5 3-8 8-8 0 3 3 6 0 9" fill={GOLD} stroke={INK} strokeWidth="2.500" strokeLinejoin="round" />
    </Art>
  ),
  // Бабочка
  (className) => (
    <Art viewBox="0 0 80 80" className={className}>
      <path d="M38 36C30 16 14 9 7 16c-6 8 1 25 13 27-8 3-11 14-5 20 8 6 18-3 22-17Z" fill={GOLD} stroke={INK} strokeWidth="2.500" strokeLinejoin="round" />
      <path d="M42 36C50 16 66 9 73 16c6 8-1 25-13 27 8 3 11 14 5 20-8 6-18-3-22-17Z" fill={BUTTER} stroke={INK} strokeWidth="2.500" strokeLinejoin="round" />
      <rect x="36" y="24" width="8" height="38" rx="4" fill={INK} />
      <path d="M38 24c-1-6-4-10-8-12M42 24c1-6 4-10 8-12" fill="none" stroke={INK} strokeWidth="2.500" strokeLinecap="round" />
    </Art>
  ),
];

export function GroupArt({ index, className = "" }: { index: number; className?: string }) {
  return groupFaces[index % groupFaces.length](className);
}

/** Хореография: ребёнок в движении и лента. */
export function DanceArt({ className = "" }: { className?: string }) {
  return (
    <Art viewBox="0 0 240 240" className={className}>
      <circle cx="120" cy="120" r="104" fill="#FFF9ED" opacity="0.75" />
      <path d="M26 158c30-58 50 22 82-34 26-46 62-70 106-48" fill="none" stroke={GOLD} strokeWidth="10" strokeLinecap="round" />
      <path d="M36 196c34-34 54 10 84-20 24-24 54-30 84-18" fill="none" stroke={SAGE} strokeWidth="7" strokeLinecap="round" />
      <g transform="translate(122 214) rotate(-5)">
        <path d="M-8 -48 -18 -2M9 -48 24 -8" stroke={SKIN} strokeWidth="9" strokeLinecap="round" />
        <path d="M-14 -102 L-46 -128M13 -102 L42 -142" stroke={SKIN} strokeWidth="8" strokeLinecap="round" />
        <path d="M-14 -104q14 -7 28 0l5 28-5 8h-28l-5-8Z" fill={INK} />
        <path d="M-17 -72c12 7 24 7 34 0l24 32c-22 14-60 14-82 0Z" fill="#fff" stroke={INK} strokeWidth="2.500" strokeLinejoin="round" />
        <circle cx="0" cy="-125" r="18" fill={SKIN} />
        <path d="M-18 -128c-1-25 37-26 36 0-8-8-27-9-36 0Z" fill={HAIR} />
        <circle cx="0" cy="-149" r="8" fill={HAIR} />
        <circle cx="-6" cy="-124" r="2" fill={INK} />
        <circle cx="6" cy="-124" r="2" fill={INK} />
        <path d="M-5 -118q5 5 10 0" fill="none" stroke={INK} strokeWidth="1.800" strokeLinecap="round" />
      </g>
      <path transform="translate(40 66)" fill={GOLD} d="M0-14c2 8 6 12 14 14-8 2-12 6-14 14-2-8-6-12-14-14 8-2 12-6 14-14Z" />
      <path fill={INK} d="M186 34v30a8 7 0 1 1-4-6V40l-16 4v26a8 7 0 1 1-4-6V38Z" />
    </Art>
  );
}

/** Тхэквондо: ребёнок в добоке выполняет удар ногой. */
export function TaekwondoArt({ className = "" }: { className?: string }) {
  return (
    <Art viewBox="0 0 240 240" className={className}>
      <circle cx="120" cy="120" r="104" fill="#FFFFFF" opacity="0.8" />
      <path d="M38 94h30M28 122h26M42 150h22" stroke={SAGE} strokeWidth="7" strokeLinecap="round" />
      <path d="M58 218h130" stroke={SAGE} strokeWidth="8" strokeLinecap="round" />
      <g transform="translate(96 214)">
        <path d="M0 -62 L4 -6" stroke="#fff" strokeWidth="19" strokeLinecap="round" />
        <path d="M0 -62 L4 -6" stroke={INK} strokeWidth="23" strokeLinecap="round" strokeOpacity="0.14" />
        <path d="M0 -62 L4 -6" stroke="#fff" strokeWidth="18" strokeLinecap="round" />
        <path d="M6 -70 L92 -100" stroke="#fff" strokeWidth="19" strokeLinecap="round" />
        <path d="M6 -70 L92 -100" stroke={INK} strokeWidth="23" strokeLinecap="round" strokeOpacity="0.14" />
        <path d="M6 -70 L92 -100" stroke="#fff" strokeWidth="18" strokeLinecap="round" />
        <circle cx="104" cy="-104" r="9.500" fill={SKIN} />
        <path d="M-18 -112q18 -10 36 0l2 44h-40Z" fill="#fff" stroke={INK} strokeOpacity="0.2" strokeWidth="2.500" />
        <path d="M-1 -116 2 -88" stroke={INK} strokeOpacity="0.35" strokeWidth="2.500" />
        <path d="M-19 -80h40" stroke={INK} strokeWidth="9" />
        <path d="M0 -80 -10 -60M2 -80 12 -60" stroke={INK} strokeWidth="5" strokeLinecap="round" />
        <path d="M-15 -106 L-44 -84" stroke="#fff" strokeWidth="13" strokeLinecap="round" />
        <path d="M15 -106 L38 -122" stroke="#fff" strokeWidth="13" strokeLinecap="round" />
        <circle cx="-48" cy="-81" r="7.500" fill={SKIN} />
        <circle cx="44" cy="-126" r="7.500" fill={SKIN} />
        <circle cx="-2" cy="-134" r="18" fill={SKIN} />
        <path d="M-20 -137c-1-25 37-26 36 0-8-8-27-9-36 0Z" fill={HAIR} />
        <circle cx="3" cy="-133" r="2" fill={INK} />
        <circle cx="13" cy="-133" r="2" fill={INK} />
        <path d="M3 -127q5 4 9 0" fill="none" stroke={INK} strokeWidth="1.800" strokeLinecap="round" />
      </g>
    </Art>
  );
}

const mealFaces: ((className: string) => ReactNode)[] = [
  // Кружка и яблоко
  (className) => (
    <Art viewBox="0 0 96 96" className={className}>
      <path d="M32 14c-4 5 4 8 0 14M46 12c-4 5 4 8 0 14" fill="none" stroke={SAGE} strokeWidth="4" strokeLinecap="round" />
      <path d="M58 46h7c7 0 11 5 11 11s-4 11-11 11h-8" fill="none" stroke={INK} strokeWidth="4" />
      <path d="M16 34h44v30c0 11-8 18-18 18h-8c-10 0-18-7-18-18Z" fill={BUTTER} stroke={INK} strokeWidth="3" />
      <Smile x={38} y={54} r={0.9} />
    </Art>
  ),
  // Кастрюля
  (className) => (
    <Art viewBox="0 0 96 96" className={className}>
      <path d="M36 16c-4 5 4 7 0 12M50 12c-4 5 4 8 0 14M64 16c-4 5 4 7 0 12" fill="none" stroke={SAGE} strokeWidth="4" strokeLinecap="round" />
      <path d="M6 48h10M80 48h10" stroke={INK} strokeWidth="6" strokeLinecap="round" />
      <path d="M16 42h64v24c0 10-7 17-17 17H33c-10 0-17-7-17-17Z" fill={GOLD} stroke={INK} strokeWidth="3" />
      <path d="M12 38h72" stroke={INK} strokeWidth="6" strokeLinecap="round" />
      <Smile x={48} y={60} r={0.9} />
    </Art>
  ),
  // Яблоко
  (className) => (
    <Art viewBox="0 0 96 96" className={className}>
      <path d="M49 24c0-7 4-13 10-15" fill="none" stroke={INK} strokeWidth="4" strokeLinecap="round" />
      <path d="M53 19c7-7 18-6 22-1-6 7-16 7-22 1Z" fill={SAGE} stroke={INK} strokeWidth="2.500" />
      <path d="M48 28c-8-6-33-5-33 21 0 19 14 37 25 37 4 0 5-2 8-2s4 2 8 2c11 0 25-18 25-37 0-26-25-27-33-21Z" fill="#F1C75E" stroke={INK} strokeWidth="3" />
      <Smile x={48} y={54} />
    </Art>
  ),
  // Тарелка с приборами
  (className) => (
    <Art viewBox="0 0 96 96" className={className}>
      <path d="M12 14v18c0 6 3 8 6 9v41M18 14v14M24 14v18c0 6-3 8-6 9" fill="none" stroke={INK} strokeWidth="3.500" strokeLinecap="round" />
      <path d="M82 82V14c-7 3-10 14-10 24 0 7 4 10 10 10" fill={MINT} stroke={INK} strokeWidth="3.500" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx="47" cy="50" r="22" fill="#fff" stroke={INK} strokeWidth="3" />
      <circle cx="47" cy="50" r="14" fill={BUTTER} />
      <Smile x={47} y={50} r={0.75} />
    </Art>
  ),
];

export function MealArt({ index, className = "" }: { index: number; className?: string }) {
  return mealFaces[index % mealFaces.length](className);
}

/** Папка с документами. */
export function DocumentsArt({ className = "" }: { className?: string }) {
  return (
    <Art viewBox="0 0 160 130" className={className}>
      <path d="M14 34c0-8 6-14 14-14h34c5 0 8 2 11 6l5 6h54c8 0 14 6 14 14v62c0 8-6 14-14 14H28c-8 0-14-6-14-14Z" fill={SAGE} stroke={INK} strokeWidth="3" />
      <g transform="rotate(-5 72 54)">
        <rect x="42" y="14" width="66" height="86" rx="9" fill="#fff" stroke={INK} strokeWidth="3" />
        <path d="M54 34h42M54 48h42M54 62h26" stroke={SAGE} strokeWidth="5" strokeLinecap="round" />
      </g>
      <g transform="rotate(6 98 54)">
        <rect x="74" y="20" width="62" height="80" rx="9" fill={BUTTER} stroke={INK} strokeWidth="3" />
        <path d="M86 38h38M86 52h38" stroke={GOLD} strokeWidth="5" strokeLinecap="round" />
      </g>
      <path d="M8 62c0-7 5-12 12-12h120c7 0 12 5 12 12l-6 52c-1 7-6 12-13 12H27c-7 0-12-5-13-12Z" fill={GOLD} stroke={INK} strokeWidth="3" />
      <Smile x={80} y={88} r={1.200} />
    </Art>
  );
}
