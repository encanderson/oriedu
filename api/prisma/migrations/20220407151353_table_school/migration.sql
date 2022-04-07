-- CreateTable
CREATE TABLE "school" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "fantasia" TEXT NOT NULL,
    "logo" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "contacts" JSONB,
    "address" JSONB,

    CONSTRAINT "school_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "school_userId_key" ON "school"("userId");

-- AddForeignKey
ALTER TABLE "school" ADD CONSTRAINT "school_userId_fkey" FOREIGN KEY ("userId") REFERENCES "profiles"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
