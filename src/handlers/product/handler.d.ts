export type TProductStatus = 'P' | 'A'

// HI: HandlerInput
export interface HICreateProduct {
  productName: string
}
// HI: HandlerResponse
export interface HRCreateProduct {
  id: number
}
