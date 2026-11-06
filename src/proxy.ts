import { NextResponse, type NextRequest } from "next/server";

const MOBILE_UA = /Mobi|Android|iPhone|iPod|Opera Mini|IEMobile/i;

/**
 * Телефону сразу отдаётся мобильная сборка, а компьютеру десктопная,
 * поэтому в HTML попадает только одна версия страницы. Это лишь оптимизация:
 * нужную версию всё равно выберет SiteExperience по ширине экрана.
 */
export function proxy(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") ?? "";
  const response = MOBILE_UA.test(userAgent)
    ? NextResponse.rewrite(new URL("/mobile-website", request.url))
    : NextResponse.next();
  response.headers.set("Vary", "User-Agent");
  return response;
}

export const config = { matcher: "/" };
