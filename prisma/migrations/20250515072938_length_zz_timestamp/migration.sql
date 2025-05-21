/*
  Warnings:

  - You are about to alter the column `createdAt` on the `monitoring` table. The data in that column could be lost. The data in that column will be cast from `Timestamp(6)` to `Timestamp(3)`.

*/
-- AlterTable
ALTER TABLE `Monitoring` MODIFY `createdAt` TIMESTAMP(3) NOT NULL;
