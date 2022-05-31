/*
  Warnings:

  - You are about to drop the column `classes` on the `schools` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "schools" DROP COLUMN "classes",
ADD COLUMN     "new" BOOLEAN;
