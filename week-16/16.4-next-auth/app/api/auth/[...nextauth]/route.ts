/* 
 * import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest, arg: any) {
  console.log(arg.params.authRoutes);
  return NextResponse.json({
    message: "Handler",
  });
}

export function POST(req: NextRequest) {
  return NextResponse.json({
    message: "asd",
  });
}
*/

/* 2
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "email", type: "text", placeholder: "Email" },
        password: {
          label: "password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials: any) {
        return {
          id: "user1",
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
*/

import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET() {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  console.log(session);
  return NextResponse.json({
    name: session?.user?.name,
  });
}
