/*
  Warnings:

  - Added the required column `email` to the `Courses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Courses` ADD COLUMN `email` VARCHAR(191) NOT NULL;
