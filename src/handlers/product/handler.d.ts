declare type Brand = {
  name: string
  code: string
}

// HI: HandlerInput
export type HICreateBrand = Brand

export interface HICreateProduct {
  name: string
  slug: string
  sku: string
  brandId: number
}

export interface HIGetProduct {
  id?: string
  slug?: string
}

export interface HIUpdateProduct {
  id: string
  name?: string
  slug?: string
  sku?: string
  brandId: number
}

// HI: HandlerResponse
export interface HRCreateProduct {
  id: number
}

export interface HRCreateBrand {
  id: number
}

export interface HRGetProduct {
  id: number
  name: string
  slug: string
  sku: string
  brand: Brand & { id: number }
}
