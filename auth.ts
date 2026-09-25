import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { authConfig } from "./auth.config";

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,

  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string().min(1),
          })
          .safeParse(credentials);

        if (!parsedCredentials.success) {
          return null;
        }

        const { email, password } = parsedCredentials.data;

        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;

        if (!adminEmail || !adminPasswordHash) {
          throw new Error("Admin authentication is not configured.");
        }

        if (email !== adminEmail) {
          return null;
        }

        const passwordMatches = await bcrypt.compare(
          password,
          adminPasswordHash
        );

        if (!passwordMatches) {
          return null;
        }

        return {
          id: "admin",
          name: "Admin",
          email: adminEmail,
          role: "admin",
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },
});