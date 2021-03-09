import { connection } from '@/libs/db'
import ProductEntity from './product.entity'
import BrandEntity from './brand.entity'

export const ProductRepository = () => connection().getRepository(ProductEntity)
export const BrandRepository = () => connection().getRepository(BrandEntity)
