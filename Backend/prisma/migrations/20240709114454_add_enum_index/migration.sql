/*
  Warnings:

  - You are about to alter the column `role` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `Users` MODIFY `role` ENUM('student', 'instructor', 'admin') NOT NULL;

-- RenameIndex
ALTER TABLE `Assignments` RENAME INDEX `Assignments_courseId_fkey` TO `Assignments_courseId_idx`;

-- RenameIndex
ALTER TABLE `Assignments` RENAME INDEX `Assignments_userId_fkey` TO `Assignments_userId_idx`;
