/*
  Warnings:

  - You are about to alter the column `name` on the `beach` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(191)`.
  - A unique constraint covering the columns `[name]` on the table `Beach` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `beach` MODIFY `name` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Beach_name_key` ON `Beach`(`name`);
