/*
  Warnings:

  - You are about to drop the column `base_price` on the `Products` table. All the data in the column will be lost.
  - Added the required column `basePrice` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Products" DROP COLUMN "base_price",
ADD COLUMN     "basePrice" INTEGER NOT NULL;
