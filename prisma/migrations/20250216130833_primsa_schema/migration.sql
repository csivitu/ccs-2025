/*
  Warnings:

  - A unique constraint covering the columns `[userId,questionId]` on the table `AttempedQuestion` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "AttempedQuestion_questionId_userId_key";

-- CreateIndex
CREATE UNIQUE INDEX "AttempedQuestion_userId_questionId_key" ON "AttempedQuestion"("userId", "questionId");
