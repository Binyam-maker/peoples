import { PrismaClient } from "../../../prisma/src/generated/client";
import { StatusCodes } from "http-status-codes";

export default async function (req, res) {
  const { updateData } = req.body;
  console.log({ updateData });
  const prisma = new PrismaClient();

  const { id } = updateData;

  if (req.method !== "PATCH") {
    res
      .status(StatusCodes.METHOD_NOT_ALLOWED)
      .json({ message: "Only PATCH requests are allowed" });
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

    const updatedEmployee = await prisma.employee.update({
      where: { id },
      data: updateData,
    });
    console.log({ updatedEmployee });

    res
      .status(StatusCodes.CREATED)
      .json({ success: true, data: updatedEmployee });
    return;
  } catch (error) {
    console.log({ error });
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: error.error });
  }
}
