import 'reflect-metadata'
import * as express from 'express'
import { connect as connectDb } from '@/libs/db'

async function startServer() {
  const app: express.Application = express()
  await connectDb()

  return app
}

export default startServer
