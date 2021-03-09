import 'reflect-metadata'
import * as path from 'path'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import { GraphQLError } from 'graphql'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { connect as connectDb } from '@/libs/db'
import useRouter from '@/api/v1'

async function startServer() {
  const buildPromises = Promise.all([
    buildSchema({
      resolvers: [path.join(__dirname, '/**/*.resolver.{ts,js}')],
      emitSchemaFile: true,
      validate: false,
    }),
    connectDb(),
  ])

  const [schema] = await buildPromises
  const app: express.Application = express()

  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  useRouter(app)

  const server = new ApolloServer({
    schema,
    context: ({ req }) => ({ req }),
    formatError: (error) => {
      const errorText = error?.originalError?.message || 'Something went wrong'
      return new GraphQLError(errorText)
    },
    playground: true,
  })

  await server.applyMiddleware({ app, path: '/api/v2.0' })

  return app
}

export default startServer
