import { ArgsType, Field, ObjectType } from 'type-graphql'
import { TBrand } from './handler.d'

@ArgsType()
export class ATCreateProduct {
  @Field()
  name: string

  @Field()
  slug: string

  @Field()
  sku: string

  @Field()
  brandId: number
}

@ObjectType()
export class OTCreateProduct {
  @Field({ description: 'Returns the ID of the created product' })
  id: number
}

@ObjectType()
export class OTGetBrand {
  @Field()
  id: number

  @Field()
  name: string

  @Field()
  code: string
}

@ObjectType()
export class OTGetProduct {
  @Field()
  id: number

  @Field()
  name: string

  @Field()
  slug: string

  @Field()
  sku: string

  @Field()
  brand: OTGetBrand
}
