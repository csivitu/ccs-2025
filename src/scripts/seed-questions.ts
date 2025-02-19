import { PrismaClient } from "@prisma/client";
import * as fs from "fs";
import * as path from "path";

const prisma = new PrismaClient();

const questionsFilePath = path.join(__dirname, "ccs-questions.json");

async function seedQuestions() {
  try {
    console.log("Reading questions from JSON file...");
    const questions = JSON.parse(fs.readFileSync(questionsFilePath, "utf-8"));

    console.log("Seeding questions...");
    for (const question of questions) {
      const existingQuestion = await prisma.question.findFirst({
        where: {
          question: question.question,
        },
      });

      if (existingQuestion) {
        console.log(
          `Question "${question.question}" already exists. Skipping...`
        );
        continue;
      }

      await prisma.question.create({
        data: question,
      });
    }
    console.log("Seeding completed successfully!");
  } catch (error) {
    console.error("Error seeding questions:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

seedQuestions().catch((error) => {
  console.error("Error in seed function:", error);
  process.exit(1);
});
