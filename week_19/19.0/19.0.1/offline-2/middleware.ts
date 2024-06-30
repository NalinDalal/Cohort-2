import { NextRequest, NextResponse } from "next/server";

let requestCount = 0;

export function middleware(requestCount: NextRequest) {
  //1
  requestCount++;
  const res = NextResponse.next();
  console.log("requestCount", requestCount);
  return res;
}

//2
export function middleware2(request: NextRequest) {
  console.log(request.nextUrl.pathname);
  if (request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.next();
  }
}

export const config = {
  matcher: "/about/:path*",
};
