import { connection } from '@/libs/db'
import ProductEntity from './product.entity'

const ProductRepository = () => connection().getRepository(ProductEntity)

export default ProductRepository
