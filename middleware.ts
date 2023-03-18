import { NextFetchEvent, NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { post } from './lib/request'

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest, event: NextFetchEvent) {
  post('/api/saveLog', ['middleware', 'route', req.nextUrl.pathname])
  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
}