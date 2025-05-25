-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('admin', 'partner', 'client');

-- CreateTable
CREATE TABLE "UserMetadata" (
    "uid" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'client',
    "data" JSONB NOT NULL,

    CONSTRAINT "UserMetadata_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "Testimonial" (
    "id" SERIAL NOT NULL,
    "uid" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,

    CONSTRAINT "Testimonial_pkey" PRIMARY KEY ("id")
);
