import prisma from "./prismaClient";

export default async function () {
  const employees = await prisma.employee.findMany();
  console.log({ employees });
}
