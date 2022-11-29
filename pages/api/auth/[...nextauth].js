import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../libs/prismadb";
import signInUser from "../../../libs/signInUser";
export const authOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      name: "Company",
      credentials: {
        companyName: {
          label: "Company Name",
          type: "text",
          placeholder: "company name",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          console.log({ credentials });
          const { companyName, password } = credentials;

          const { user, error } = await signInUser(companyName, password);
          // send user object wto password and a default image link

          if (error) throw new Error(error);

          const sessionUser = {
            companyName: user.companyName,
            email: user.email,
            image: "/vercel.svg",
          };

          return sessionUser;
        } catch (error) {
          return null;
        }
      },
    }),

    // ...add more providers here
  ],
  theme: {
    colorScheme: "light",
    brandColor: "#00A1f2",
    logo: "/vercel.svg",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
  // pages: {
  //   signIn: "/auth/signin",
  //   signOut: "/auth/signout",
  //   error: "/auth/error", // Error code passed in query string as ?error=
  //   verifyRequest: "/auth/verify-request", // (used for check email message)
  //   newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  // },
};

export default NextAuth(authOptions);
