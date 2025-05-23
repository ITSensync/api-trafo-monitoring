/*
  Warnings:

  - You are about to drop the column `suhu` on the `monitoring` table. All the data in the column will be lost.
  - Added the required column `suhu_cpu` to the `Monitoring` table without a default value. This is not possible if the table is not empty.
  - Added the required column `suhu_trafo` to the `Monitoring` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Monitoring` DROP COLUMN `suhu`,
    ADD COLUMN `suhu_cpu` DECIMAL(10, 1) NOT NULL,
    ADD COLUMN `suhu_trafo` DECIMAL(10, 1) NOT NULL;
