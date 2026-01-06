// src/auth.ts
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";

// 🔴 สำคัญมาก สำหรับ Production (Vercel / Server)
export const runtime = "nodejs";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    // ===== Google OAuth =====
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    // ===== GitHub OAuth =====
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),

    // ===== Credentials Login =====
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (
          credentials?.username === "admin" &&
          credentials?.password === "admin123"
        ) {
          return {
            id: "1",
            name: "Admin",
            email: "admin@example.com",
          };
        }
        return null;
      },
    }),
  ],

  // ===== Session =====
  session: {
    strategy: "jwt",
  },

  // 🔴 ต้องใช้ NEXTAUTH_SECRET เท่านั้น
  secret: process.env.NEXTAUTH_SECRET,

  // ===== Custom pages =====
  pages: {
    signIn: "/",
    error: "/auth/error",
  },

  // ===== Callbacks =====
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },

  // เปิด debug ช่วยดู error
  debug: false,
});
