import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked async if using await inside
export function middleware(request: NextRequest) {
  // Assume a "Cookie:nextjs=fast" header to be present on the incoming request
  // Getting cookies from the request using the RequestCookies API
  
  let accessToken = request.cookies.get("access-token")?.value

  if (request.nextUrl.pathname === "/" && accessToken) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  } else if (request.nextUrl.pathname !== "/" && !accessToken) {
    return NextResponse.redirect(new URL("/", request.url))
  }
  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|images|favicon.ico).*)',
  ],
}