/*
  Warnings:

  - You are about to drop the column `lang` on the `trafo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Trafo` DROP COLUMN `lang`,
    ADD COLUMN `lng` DOUBLE NULL;
