import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    console.log("🔹 In Middleware");
    console.log("🔹 All Cookies:", req.cookies.getAll());

    const jwtToken = req.cookies.get("accessToken")?.value; // Ensure we get the token value
    const isAuthenticated = !!jwtToken;

    console.log("🔹 In Middleware");
    console.log("🔹 JWT Token:", jwtToken);

    const protectedRoutes = ["/bookings", "/addresses", "/checkout"];
    const publicRoutes = ["/signin", "/signup"]; // Fix typo: "sigin" → "signin"

    const url = req.nextUrl.clone();

    // 🔒 Redirect unauthenticated users trying to access protected pages
    if (
        !isAuthenticated &&
        protectedRoutes.some(route => url.pathname.startsWith(route))
    ) {
        url.pathname = "/signin";
        return NextResponse.redirect(url);
    }

    // 🔓 Redirect authenticated users away from public routes
    if (isAuthenticated && publicRoutes.includes(url.pathname)) {
        url.pathname = "/home";
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

// 🛠 Apply middleware to both direct and nested routes
export const config = {
    matcher: [
        "/bookings",
        "/bookings/:path*",
        "/addresses",
        "/addresses/:path*",
        "/checkout",
        "/checkout/:path*",
    ],
};
