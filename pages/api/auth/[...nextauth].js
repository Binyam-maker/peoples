import NextAuth from "next-auth";
import { CredentialsProvider } from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers

  providers: [   
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        try {
          const { email, password } = credentials;
          const { user, error } = await loginUser(email, password);

          if (error) throw new Error(error);
          const sessionUser = {
            name: user.name,
            email: user.email,
          };
          return sessionUser;
        } catch (error) {
          return null;
        }
      },
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
