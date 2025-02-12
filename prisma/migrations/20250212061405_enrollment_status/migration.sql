-- CreateEnum
CREATE TYPE "EnrollmentStatus" AS ENUM ('QUESTION_ROUND', 'QUALIFIED_FOR_TASKS', 'ELIMINATED', 'COMPLETED');

-- AlterTable
ALTER TABLE "AttemptedDomain" ADD COLUMN     "status" "EnrollmentStatus" NOT NULL DEFAULT 'QUESTION_ROUND';
