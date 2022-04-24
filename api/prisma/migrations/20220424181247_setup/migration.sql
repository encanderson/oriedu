-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "app" TEXT NOT NULL,
    "code" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "consents" JSONB,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "schools" (
    "id" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "fantasia" TEXT NOT NULL,
    "logo" TEXT,
    "contacts" JSONB,
    "address" JSONB,
    "modalities" TEXT[],
    "classes" TEXT[],

    CONSTRAINT "schools_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "employees" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birthday" TIMESTAMP(3),
    "gender" TEXT,
    "ethnic" TEXT,
    "docs" TEXT,
    "job" TEXT,
    "contacts" TEXT,
    "address" TEXT,
    "contract" JSONB,
    "qualifications" JSONB,
    "salary" DOUBLE PRECISION,
    "bank" TEXT,
    "picture" TEXT,
    "school_id" TEXT NOT NULL,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_user_id_key" ON "users"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "schools_cnpj_key" ON "schools"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "employees_user_id_key" ON "employees"("user_id");

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_school_id_fkey" FOREIGN KEY ("school_id") REFERENCES "schools"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
