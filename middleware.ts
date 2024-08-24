import {withAuth, NextRequestWithAuth} from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(

    function middleware(request: NextRequestWithAuth) {
        console.log(request.nextauth.token);

        if(request.nextUrl.pathname.startsWith("/admin") && request.nextauth.token?.role !== "admin") {
            return NextResponse.rewrite(new URL("/", request.url))
        }
        else {
            return NextResponse.next()
        }
    },
   
)









export const config = {
    matcher: ["/admin:path*"]
}