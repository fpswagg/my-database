/*
  Warnings:

  - Added the required column `updatedAt` to the `Testimonial` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Testimonial" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Service" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "hasDemo" BOOLEAN NOT NULL DEFAULT true,
    "price" INTEGER NOT NULL,
    "other_prices" INTEGER[] DEFAULT ARRAY[]::INTEGER[],
    "metadata" JSONB NOT NULL DEFAULT '{}',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);
