import * as express from 'express'
import * as multer from 'multer'
import handler from '@/handlers/product/handler'

const router = express.Router()
const upload = multer({ dest: 'temp/' })

router.post('/', handler.createProduct)
router.post('/bulk', upload.single('productCSV'), handler.createProductBulk)
router.get('/', handler.getProduct)
router.delete('/:id', handler.deleteProduct)
router.patch('/:id', handler.updateProduct)
router.get('/list', handler.getProducts)

router.post('/brand', handler.createBrand)

export default router
