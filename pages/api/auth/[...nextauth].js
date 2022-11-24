import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers

  providers: [
    Credentials({
      name: "Email",
      credentials: {
        email: {
          label: "Company Name",
          type: "text",
          placeholder: "company name",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const { email, password } = credentials;

          const { user, error } = await loginUser(email, password);
          // send user object wto password and a default image link

          if (error) throw new Error(error);

          const sessionUser = {
            name: user.name,
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
  // pages: {
  //   signIn: "/auth/signin",
  //   signOut: "/auth/signout",
  //   error: "/auth/error", // Error code passed in query string as ?error=
  //   verifyRequest: "/auth/verify-request", // (used for check email message)
  //   newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  // },
};

export default NextAuth(authOptions);
