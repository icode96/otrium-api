import 'reflect-metadata'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import { connect as connectDb } from '@/libs/db'
import useRouter from '@/api/v1'

async function startServer() {
  const app: express.Application = express()
  await connectDb()

  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())

  useRouter(app)

  return app
}

export default startServer
