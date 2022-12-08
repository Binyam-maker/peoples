import { PrismaClient } from "../../../prisma/src/generated/client";
import { StatusCodes } from "http-status-codes";

export default async function (req, res) {
  const { id } = req.body;
  console.log(req.body);

  const prisma = new PrismaClient();

  if (req.method !== "POST") {
    res
      .status(StatusCodes.METHOD_NOT_ALLOWED)
      .json({ message: "Only DELETE requests are allowed" });
    return;
  }
  try {
    // check if employee already exists
    const exists = await prisma.employee.findFirst({
      where: { id },
    });

    // // if employee is not already registered
    if (!exists) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "This employee is not registered" });
      return;
    }

    const deletedEmployee = await prisma.employee.delete({
      where: { id },
    });
    console.log({ deletedEmployee });

    res
      .status(StatusCodes.CREATED)
      .json({ success: true, data: deletedEmployee });
    return;
  } catch (error) {
    console.log({ error });
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: error.error });
  }
}
