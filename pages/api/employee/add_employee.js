import prisma from "../../../libs/prismaClient";
import { StatusCodes } from "http-status-codes";

export default async function (req, res) {
  const { employee } = req.body;
  console.log(employee);
  const prisma = new PrismaClient();

  const { email } = employee;

  if (req.method !== "POST") {
    res
      .status(StatusCodes.METHOD_NOT_ALLOWED)
      .json({ message: "Only POST requests are allowed" });
    return;
  }
  try {
    // check if employee already exists
    const exists = await prisma.employee.findFirst({
      where: { email },
    });

    // // if already registered
    if (exists) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "This employee is already registered" });
      return;
    }

    const newEmployee = await prisma.employee.create({ data: employee });
    console.log({ newEmployee });

    res.status(StatusCodes.CREATED).json({ success: true, data: newEmployee });
    return;
  } catch (error) {
    console.log({ error });
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: error.error });
  }
}
