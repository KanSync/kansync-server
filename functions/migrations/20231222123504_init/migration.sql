-- CreateTable
CREATE TABLE "KanSyncUsers" (
    "login" TEXT NOT NULL,

    CONSTRAINT "KanSyncUsers_pkey" PRIMARY KEY ("login")
);

-- CreateTable
CREATE TABLE "Projects" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Issues" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "assignees" JSONB,
    "author" JSONB,
    "body" TEXT,
    "category" TEXT NOT NULL,
    "statusChangeTime" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL,
    "comments" TEXT[],
    "lastEditedAt" TIMESTAMP(3),
    "dueDate" TIMESTAMP(3),
    "labels" TEXT[],
    "projectID" INTEGER NOT NULL,

    CONSTRAINT "Issues_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Projects_user_name_name_key" ON "Projects"("user_name", "name");

-- AddForeignKey
ALTER TABLE "Projects" ADD CONSTRAINT "Projects_user_name_fkey" FOREIGN KEY ("user_name") REFERENCES "KanSyncUsers"("login") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Issues" ADD CONSTRAINT "Issues_projectID_fkey" FOREIGN KEY ("projectID") REFERENCES "Projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;
