/*
  Warnings:

  - You are about to drop the `Region` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Website` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `WebsiteTick` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "websiteStatus" AS ENUM ('Up', 'Down', 'Unknown');

-- DropForeignKey
ALTER TABLE "Website" DROP CONSTRAINT "Website_user_id_fkey";

-- DropForeignKey
ALTER TABLE "WebsiteTick" DROP CONSTRAINT "WebsiteTick_region_id_fkey";

-- DropForeignKey
ALTER TABLE "WebsiteTick" DROP CONSTRAINT "WebsiteTick_website_id_fkey";

-- DropTable
DROP TABLE "Region";

-- DropTable
DROP TABLE "User";

-- DropTable
DROP TABLE "Website";

-- DropTable
DROP TABLE "WebsiteTick";

-- DropEnum
DROP TYPE "WebsiteStatus";

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "website" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "timeAdded" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "website_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "region" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "websiteTick" (
    "id" TEXT NOT NULL,
    "response_time_ms" INTEGER NOT NULL,
    "status" "websiteStatus" NOT NULL,
    "region_id" TEXT NOT NULL,
    "website_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "websiteTick_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- AddForeignKey
ALTER TABLE "website" ADD CONSTRAINT "website_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "websiteTick" ADD CONSTRAINT "websiteTick_region_id_fkey" FOREIGN KEY ("region_id") REFERENCES "region"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "websiteTick" ADD CONSTRAINT "websiteTick_website_id_fkey" FOREIGN KEY ("website_id") REFERENCES "website"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
