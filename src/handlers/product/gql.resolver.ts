import { Resolver, Mutation, Query, Args, Arg } from 'type-graphql'
import {
  ATCreateProduct,
  ATGetProduct,
  ATUpdateProduct,
  OTCreateProduct,
  OTGetProduct,
} from './gql.types'
import handler from './handler'

@Resolver()
export default class ProductResolver {
  @Mutation(() => OTCreateProduct, { description: 'Create product' })
  createProduct(@Args() payload: ATCreateProduct) {
    return handler.createProduct_2_0(payload)
  }

  @Query(() => [OTGetProduct], { description: 'Get products' })
  async getProducts() {
    return handler.getProducts_2_0()
  }

  @Query(() => OTGetProduct, { description: 'Get product by id or slug' })
  async getProduct(@Args() payload: ATGetProduct) {
    return handler.getProduct_2_0(payload)
  }

  @Mutation(() => Boolean!, { description: 'Delete product' })
  deleteProduct(@Arg('id') id: number) {
    return handler.deleteProduct_2_0(id)
  }

  @Mutation(() => Boolean!, { description: 'Delete product' })
  updateProduct(@Args() payload: ATUpdateProduct) {
    return handler.updateProduct_2_0(payload)
  }
}
