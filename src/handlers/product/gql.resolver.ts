import { Resolver, Mutation, Query, Args } from 'type-graphql'
import { ATCreateProduct, OTCreateProduct, OTGetProduct } from './gql.types'
import handler from './handler'

@Resolver()
export default class ProductResolver {
  @Mutation(() => OTCreateProduct, { description: 'Create product' })
  createProduct(@Args() payload: ATCreateProduct) {
    return handler.createProduct_2_0(payload)
  }

  @Query(() => [OTGetProduct], { description: 'Application health' })
  async getProduct() {
    return handler.getProducts_2_0()
  }
}
