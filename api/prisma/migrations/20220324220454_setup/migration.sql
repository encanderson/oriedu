-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "app" TEXT NOT NULL,
    "code" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "job" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "consents" JSONB,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profiles" (
    "id" TEXT NOT NULL,
    "city" TEXT,
    "contacts" TEXT,
    "name" TEXT NOT NULL,
    "usersId" TEXT,
    "picture" TEXT,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_userId_key" ON "users"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "profiles_usersId_unique" ON "profiles"("usersId");

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
