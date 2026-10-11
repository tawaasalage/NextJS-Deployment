import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
  ],
  pages: { signIn: "/login", error: "/login" },
  session: { strategy: "jwt", maxAge: 3600 },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.provider = account.provider; // "google" or "github"
      }

      if (token?.provider === "google") {
        token.role = "admin";
      }
      if (account?.provider === "github") {
        token.role = "user";
      }

      return token;
    },

    async session({ session, token }) {
      session.user.role = token.role === "admin" ? "admin" : "user";
      return session;
    },
  },
});
