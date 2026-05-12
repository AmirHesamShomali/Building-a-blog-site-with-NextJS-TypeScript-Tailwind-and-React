import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // بررسی توکن از cookie
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  // اگر کاربر لاگین است و می‌خواهد به صفحات احراز هویت برود
  if (token && (pathname.startsWith('/auth/login') || pathname.startsWith('/auth/register'))) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/auth/:path*','/blog/:path*']
}; 