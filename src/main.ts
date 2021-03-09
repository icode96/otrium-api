import 'reflect-metadata'
import server from './server'

const { PORT } = process.env

server().then((app) => {
  app.listen(PORT || 3000, async () => {
    console.info('Server is running at http://localhost:3000')
  })
})
