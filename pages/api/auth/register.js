import { PrismaClient } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { hash } from "argon2";

export default async function (req, res) {
  const { user } = req.body;
  console.log({ user });
  const {
    email,
    account_number,
    address,
    company_name,
    enterprise_number,
    password,
    phone_number,
    sector,
    tin,
    website,
  } = user;

  const prisma = new PrismaClient();

  if (req.method !== "POST") {
    res
      .status(StatusCodes.METHOD_NOT_ALLOWED)
      .json({ message: "Only POST requests are allowed" });
    return;
  }
  try {
    // check if user already exists
    const exists = await prisma.user.findFirst({
      where: { email },
    });

    // if already registered
    if (exists) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "This user is already registered" });
      return;
    }

    // If user is not registered hash password
    const hashedPassword = await hash(password);
    const data = {
      email,
      accountNumber: account_number,
      address,
      companyName: company_name,
      enterpriseNumber: enterprise_number,
      password: hashedPassword,
      phoneNumber: phone_number,
      sector,
      tin,
      website,
    };
    console.log({ data });
    const newUser = await prisma.user.create({ data });
    console.log({ newUser });
    res.status(StatusCodes.CREATED).json({ success: true, data: newUser });
    return;
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: error });
  }
}
