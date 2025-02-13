/*
  Warnings:

  - A unique constraint covering the columns `[userId,questionId]` on the table `AttempedQuestion` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,taskId]` on the table `AttemptedTask` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `taskId` to the `AttemptedTask` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AttemptedTask" ADD COLUMN     "taskId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "AttempedQuestion_userId_questionId_key" ON "AttempedQuestion"("userId", "questionId");

-- CreateIndex
CREATE UNIQUE INDEX "AttemptedTask_userId_taskId_key" ON "AttemptedTask"("userId", "taskId");
