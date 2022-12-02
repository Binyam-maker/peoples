/*
  Warnings:

  - A unique constraint covering the columns `[phone_number]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tin]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[enterprise_number]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[account_number]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Made the column `email` on table `user` required. This step will fail if there are existing NULL values in that column.
  - Made the column `company_name` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `email` VARCHAR(191) NOT NULL,
    MODIFY `company_name` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `Employee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `employeeNumber` INTEGER NOT NULL,
    `dateOfBirth` VARCHAR(191) NOT NULL,
    `gender` VARCHAR(191) NOT NULL,
    `dateOfJoining` VARCHAR(191) NOT NULL,
    `probationPeriod` INTEGER NOT NULL,
    `confirmationDate` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `mobileNumber` VARCHAR(191) NOT NULL,
    `emergencyContactName` VARCHAR(191) NOT NULL,
    `emergencyContactNumber` VARCHAR(191) NOT NULL,
    `designation` VARCHAR(191) NOT NULL,
    `department` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NOT NULL,
    `employeeTIN` INTEGER NOT NULL,
    `basicSalary` INTEGER NOT NULL,
    `paymentType` VARCHAR(191) NOT NULL,
    `employeeBankName` VARCHAR(191) NOT NULL,
    `employeeAccountNumber` INTEGER NOT NULL,
    `employmentType` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `User_phone_number_key` ON `User`(`phone_number`);

-- CreateIndex
CREATE UNIQUE INDEX `User_tin_key` ON `User`(`tin`);

-- CreateIndex
CREATE UNIQUE INDEX `User_enterprise_number_key` ON `User`(`enterprise_number`);

-- CreateIndex
CREATE UNIQUE INDEX `User_account_number_key` ON `User`(`account_number`);
