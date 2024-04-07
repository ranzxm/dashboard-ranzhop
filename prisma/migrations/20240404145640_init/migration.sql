/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Categories` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `imageUrl` on the `SubCategories` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Categories" DROP COLUMN "imageUrl",
ADD COLUMN     "imagePath" TEXT;

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "imageUrl",
ADD COLUMN     "imagePath" TEXT;

-- AlterTable
ALTER TABLE "SubCategories" DROP COLUMN "imageUrl",
ADD COLUMN     "imagePath" TEXT;
