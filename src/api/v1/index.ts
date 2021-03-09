import * as express from 'express'

import productRouter from './products'

const useRouter = (app: express.Application) => {
  app.use('/api/v1/product', productRouter)
}

export default useRouter
