import { PrismaClient } from '@prisma/client'
import * as fs from 'fs'
import * as path from 'path'

const prisma = new PrismaClient()

const tasksFilePath = path.join(__dirname, 'ccs-tasks.json')

async function seedTasks() {
  try {
    console.log('Reading tasks from JSON file...')
    const tasks = JSON.parse(fs.readFileSync(tasksFilePath, 'utf-8'))

    console.log('Seeding tasks...')
    for (const task of tasks) {
      const existingTask = await prisma.task.findFirst({
        where: {
          title: task.title,
          description: task.description,
        },
      })

      if (existingTask) {
        console.log(`Task "${task.title}" already exists. Skipping...`)
        continue
      }
      await prisma.task.create({
        data: task,
      })
    }
    console.log('Seeding completed successfully!')
  } catch (error) {
    console.error('Error seeding tasks:', error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

seedTasks().catch((error) => {
  console.error('Error in seed function:', error)
  process.exit(1)
})
