/*
  Warnings:

  - Added the required column `base_price` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Products" ADD COLUMN     "base_price" INTEGER NOT NULL;
