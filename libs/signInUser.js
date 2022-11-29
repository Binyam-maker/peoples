import { PrismaClient } from "@prisma/client";
import { verify } from "argon2";
export default async function signInUser(companyName, password) {
  const prisma = new PrismaClient();
  try {
    const user = await prisma.user.findFirst({ where: { companyName } });

    // handle 'no user found'
    if (!user) {
      return { error: "Email or password does not match our records" };
    }

    // check if password is correct

    // const isPasswordCorrect = await user.comparePassword(password);
    const isValidPassword = await verify(user.password, password);

    // handle 'password is incorrect'
    if (!isValidPassword) {
      return { error: "Email or password does not match our records" };
    }

    return { user };
  } catch (error) {
    return { error: "Something went wrong, please try again" };
  }
}
