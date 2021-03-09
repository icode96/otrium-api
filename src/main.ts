import server from './server'

const { PORT } = process.env

server().then((app) => {
  app.listen(PORT || 3000, async () => {
    console.info('Running a GraphQL API server at http://localhost:3000/graphql')
  })
})
