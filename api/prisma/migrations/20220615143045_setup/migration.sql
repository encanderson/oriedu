/*
  Warnings:

  - You are about to drop the `admin` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `classes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `employees` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `questions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `schools` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `students` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `teachers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "classes" DROP CONSTRAINT "classes_school_id_fkey";

-- DropForeignKey
ALTER TABLE "employees" DROP CONSTRAINT "employees_school_id_fkey";

-- DropForeignKey
ALTER TABLE "students" DROP CONSTRAINT "students_class_id_fkey";

-- DropForeignKey
ALTER TABLE "students" DROP CONSTRAINT "students_school_id_fkey";

-- DropForeignKey
ALTER TABLE "teachers" DROP CONSTRAINT "teachers_employee_id_fkey";

-- DropTable
DROP TABLE "admin";

-- DropTable
DROP TABLE "classes";

-- DropTable
DROP TABLE "employees";

-- DropTable
DROP TABLE "questions";

-- DropTable
DROP TABLE "schools";

-- DropTable
DROP TABLE "students";

-- DropTable
DROP TABLE "teachers";

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "app" TEXT NOT NULL,
    "code" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "picture" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "consents" JSONB,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_user_id_key" ON "users"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
