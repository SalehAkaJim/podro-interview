import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  if (request.nextUrl.pathname.endsWith('/') && !token) {
    return NextResponse.redirect(new URL('/auth', request.url))
  }
}
