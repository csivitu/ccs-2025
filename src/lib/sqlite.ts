import sqlite3 from 'sqlite3'
import { open, type Database } from 'sqlite'
import path from 'node:path'

let db: Database

export async function connectDB() {
  if (!db) {
    const dbPath = path.join(
      process.cwd(),
      'src',
      'data',
      'csi-enrolled-students.db',
    )
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    })
  }
  return db
}

export async function findUserByEmail(email: string) {
  const db = await connectDB()
  return db.get('SELECT * FROM users WHERE email = ?', [email])
}

export async function getUserPhoneNumber(email: string) {
  const db = await connectDB()
  return db.get('SELECT mobile_no FROM users WHERE email = ?', [email])
}
