/*
  Warnings:

  - You are about to drop the column `value` on the `employee` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `employee` DROP COLUMN `value`,
    MODIFY `employeeNumber` VARCHAR(191) NOT NULL,
    MODIFY `probationPeriod` VARCHAR(191) NOT NULL,
    MODIFY `employeeTIN` VARCHAR(191) NOT NULL,
    MODIFY `basicSalary` VARCHAR(191) NOT NULL,
    MODIFY `employeeAccountNumber` VARCHAR(191) NOT NULL;
