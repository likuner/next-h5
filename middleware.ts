import { NextFetchEvent, NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest, event: NextFetchEvent) {
  fetch('http://localhost:3000/api/saveLog', {
    method: 'post',
    body: JSON.stringify(['middleware', 'route', req.nextUrl.pathname])
  })
  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)'
  ]
}