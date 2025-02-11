/*
  Warnings:

  - You are about to drop the column `subDomain` on the `AttemptedTask` table. All the data in the column will be lost.
  - You are about to drop the column `task` on the `AttemptedTask` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AttemptedTask" DROP COLUMN "subDomain",
DROP COLUMN "task",
ADD COLUMN     "taskSubmission" TEXT[];

-- AddForeignKey
ALTER TABLE "AttemptedTask" ADD CONSTRAINT "AttemptedTask_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE CASCADE ON UPDATE CASCADE;
