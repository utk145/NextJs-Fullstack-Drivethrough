// https://nextjs.org/docs/app/building-your-application/routing/middleware
// Note that this isnt a client-component


import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    // If anybody has a token, the user shouldn't be able to access those public paths
    // First we need to find out what are the paths
    const path = request.nextUrl.pathname;
    const isPublicPath = path === "/login" || path === '/signup';
    // Now access the cookie
    const token = request.cookies.get('token')?.value || "";

    if (isPublicPath && token) {
        // return NextResponse.redirect('/'); // You can use this directly also
        return NextResponse.redirect(new URL('/', request.nextUrl));
    }

    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl));
    }

}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/',
        // '/profile',
        '/profile/:path*',
        '/login',
        '/signup',
    ]
}