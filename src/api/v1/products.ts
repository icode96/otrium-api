import * as express from 'express'
import handler from '@/handlers/product/handler'

const router = express.Router()

router.post('/', handler.createProduct)
router.get('/', handler.getProduct)
router.delete('/:id', handler.deleteProduct)
router.patch('/:id', handler.updateProduct)
router.get('/list', handler.getProducts)

router.post('/brand', handler.createBrand)

export default router
