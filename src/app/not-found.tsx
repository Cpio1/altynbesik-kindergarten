import Link from "next/link";
import { LogoMark } from "@/components/shared/Illustrations";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 p-6 text-center">
      <LogoMark className="size-16" />
      <h1 className="font-display text-[26px] font-bold">Бет табылмады</h1>
      <p lang="ru" className="text-[15px] text-ink/75">
        Страница не найдена
      </p>
      <Link href="/" className="btn btn-gold">
        Басты бетке оралу
      </Link>
    </main>
  );
}
