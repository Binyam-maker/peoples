import { StatusCodes } from "http-status-codes";
import prisma from "../../../libs/prismaClient";
export default async function (req, res) {
  if (req.method !== "GET") {
    res
      .status(StatusCodes.METHOD_NOT_ALLOWED)
      .json({ message: "Only GET requests are allowed" });
    return;
  }
  try {
    const allEmployees = await prisma.employee.findMany();
    console.log({ allEmployees });

    res.status(StatusCodes.OK).json({ success: true, data: allEmployees });
    return;
  } catch (error) {
    console.log({ error });
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: error.error });
  }
}
