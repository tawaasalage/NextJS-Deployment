import { auth } from "@/auth";
import { NextResponse } from "next/server";

export const proxy = auth((request) => {
  const pathname = request.nextUrl.pathname;

  const requiredRole = pathname.startsWith("/admin") ? "admin" : "user";

  if (request.auth?.user?.role !== requiredRole) {
    if (request.auth?.user?.role != "admin") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
});

export const config = {
  matcher: ["/admin/:path*", "/user/:path*"],
};
