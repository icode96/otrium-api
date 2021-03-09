import { ArgsType, Field, ObjectType } from 'type-graphql'

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

@ArgsType()
export class ATGetProduct {
  @Field({ nullable: true })
  id?: number

  @Field({ nullable: true })
  slug?: string
}

@ArgsType()
export class ATUpdateProduct {
  @Field()
  id: number

  @Field({ nullable: true })
  name?: string

  @Field({ nullable: true })
  slug?: string

  @Field({ nullable: true })
  sku?: string

  @Field({ nullable: true })
  brandId?: number
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
