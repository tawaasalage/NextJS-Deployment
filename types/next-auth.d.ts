import type { DefaultSession } from "next-auth";

type UserRole = "admin" | "user";

declare module "next-auth" {
  interface User {
    role?: UserRole;
  }

  interface Session {
    user: {
      role: UserRole;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: UserRole;
  }
}
