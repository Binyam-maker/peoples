import { PrismaClient } from "../../../prisma/src/generated/client";
import { StatusCodes } from "http-status-codes";

export default async function (req, res) {
  const { searchTerm } = req.body;
  const prisma = new PrismaClient();

  if (req.method !== "POST") {
    res
      .status(StatusCodes.METHOD_NOT_ALLOWED)
      .json({ message: "Only POST requests are allowed" });
    return;
  }

  try {
    const searchResult = await prisma.employee.findMany({
      where: { name: searchTerm },
      take: 10,
    });

    res.status(StatusCodes.OK).json({ success: true, data: searchResult });
  } catch (error) {
    console.log({ error });
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: error.error });
  }
}
