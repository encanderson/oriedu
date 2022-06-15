-- CreateTable
CREATE TABLE "schools" (
    "id" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "register" INTEGER NOT NULL,
    "fantasia" TEXT NOT NULL,
    "logo" TEXT,
    "contacts" JSONB,
    "address" JSONB,
    "modalities" TEXT[],
    "new" BOOLEAN,

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
    "school_id" TEXT NOT NULL,

    CONSTRAINT "employees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "classes" (
    "id" TEXT NOT NULL,
    "modality" TEXT NOT NULL,
    "class" TEXT NOT NULL,
    "shift" TEXT NOT NULL,
    "subjects" TEXT[],
    "school_id" TEXT NOT NULL,

    CONSTRAINT "classes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "teachers" (
    "id" TEXT NOT NULL,
    "employee_id" TEXT NOT NULL,
    "classes" TEXT[],

    CONSTRAINT "teachers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "students" (
    "id" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "birthday" TIMESTAMP(3) NOT NULL,
    "gender" TEXT NOT NULL,
    "ethnic" TEXT NOT NULL,
    "birthplace" JSONB NOT NULL,
    "docs" TEXT NOT NULL,
    "emergency" TEXT NOT NULL,
    "go_home_alone" TEXT NOT NULL,
    "parents" TEXT NOT NULL,
    "social_program" BOOLEAN NOT NULL,
    "fee" DOUBLE PRECISION NOT NULL,
    "defaulting" BOOLEAN,
    "history" JSONB[],
    "school_id" TEXT NOT NULL,
    "class_id" TEXT NOT NULL,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "admin" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "questions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "school_id" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "questions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "schools_cnpj_key" ON "schools"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "schools_register_key" ON "schools"("register");

-- CreateIndex
CREATE UNIQUE INDEX "employees_user_id_key" ON "employees"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "teachers_employee_id_key" ON "teachers"("employee_id");

-- CreateIndex
CREATE UNIQUE INDEX "admin_user_id_key" ON "admin"("user_id");

-- AddForeignKey
ALTER TABLE "employees" ADD CONSTRAINT "employees_school_id_fkey" FOREIGN KEY ("school_id") REFERENCES "schools"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "classes" ADD CONSTRAINT "classes_school_id_fkey" FOREIGN KEY ("school_id") REFERENCES "schools"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teachers" ADD CONSTRAINT "teachers_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_school_id_fkey" FOREIGN KEY ("school_id") REFERENCES "schools"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "classes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
