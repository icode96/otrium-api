import * as express from 'express'
import { throwError } from '@/libs/utils/error'
import {
  HICreateBrand,
  HRCreateBrand,
  HICreateProduct,
  HIUpdateProduct,
  HRCreateProduct,
  HRGetProduct,
} from './handler.d'
import { ProductRepository, BrandRepository } from './db'

const handler = {
  /**
   * @handler Create Brand
   * @param req
   * @param res
   * @returns { res: HRCreateBrand }
   */
  async createBrand(req: express.Request, res: express.Response): Promise<void> {
    try {
      const { name, code }: HICreateBrand = req.body

      const payload = {
        name,
        code,
      }

      const { id }: HRCreateBrand = await BrandRepository().save(payload)
      res.status(200).json({ id })
    } catch (error) {
      const errorCode = throwError(error?.errorCode, error, true)
      res.status(500).json(errorCode)
    }
  },

  /**
   * @handler Create Product
   * @param req
   * @param res
   * @returns { res: HRCreateProduct }
   */
  async createProduct(req: express.Request, res: express.Response): Promise<void> {
    try {
      const { name, slug, sku, brandId }: HICreateProduct = req.body

      const brand = await BrandRepository().findOne(brandId)
      if (!brand) {
        throwError('ER.P.001', `Invalid brandId: ${brandId}`)
      }

      const payload = {
        name,
        slug,
        sku,
        brand,
      }

      const { id }: HRCreateProduct = await ProductRepository().save(payload)
      res.status(200).json({ id })
    } catch (error) {
      const errorCode = throwError(error?.errorCode, error, true)
      res.status(500).json(errorCode)
    }
  },

  /**
   * @handler Get Products
   * @param req
   * @param res
   * @returns { res: [HRGetProduct] }
   */
  async getProducts(_, res: express.Response): Promise<void> {
    try {
      const data = await ProductRepository().find({ relations: ['brand'] })

      const products: Array<HRGetProduct> = data.map((product) => ({
        id: product.id,
        name: product.name,
        slug: product.slug,
        sku: product.sku,
        brand: {
          id: product.brand?.id,
          name: product.brand?.name,
          code: product.brand?.code,
        },
      }))

      res.status(200).json({ data: products })
    } catch (error) {
      const errorCode = throwError(error?.errorCode, error, true)
      res.status(500).json(errorCode)
    }
  },

  /**
   * @handler Get Product
   * @param req
   * @param res
   * @returns { res: HRGetProduct }
   */
  async getProduct(req: express.Request, res: express.Response): Promise<void> {
    try {
      const { id, slug } = req.query

      const query = {
        id,
        slug,
      }

      const [data] = await ProductRepository().find({
        where: JSON.parse(JSON.stringify(query)),
        join: {
          alias: 'product',
          leftJoinAndSelect: {
            brand: 'product.brand',
          },
        },
      })

      if (!data) {
        throwError('ER.P.003', `Invalid productId or slug: {${JSON.stringify(query)}}`)
      }

      const product: HRGetProduct = {
        id: data.id,
        name: data.name,
        slug: data.slug,
        sku: data.sku,
        brand: {
          id: data.brand?.id,
          name: data.brand?.name,
          code: data.brand?.code,
        },
      }

      res.status(200).json({ data: product })
    } catch (error) {
      const errorCode = throwError(error?.errorCode, error, true)
      res.status(500).json(errorCode)
    }
  },

  /**
   * @handler Delete Product
   * @param req
   * @param res
   */
  async deleteProduct(req: express.Request, res: express.Response): Promise<void> {
    try {
      const { id } = req.params

      const isProductExist = await ProductRepository().findOne(id)
      if (!isProductExist) {
        throwError('ER.P.002', `Invalid productId: ${id}`)
      }

      await ProductRepository().delete(id)
      res.status(200).send()
    } catch (error) {
      const errorCode = throwError(error?.errorCode, error, true)
      res.status(500).json(errorCode)
    }
  },

  /**
   * @handler Update Product
   * @param req
   * @param res
   */
  async updateProduct(req: express.Request, res: express.Response): Promise<void> {
    try {
      const { id } = req.params
      const { name, slug, sku, brandId }: HIUpdateProduct = req.body

      const isProductExist = await ProductRepository().findOne(id)
      if (!isProductExist) {
        throwError('ER.P.002', `Invalid productId: ${id}`)
      }

      const changes = JSON.parse(JSON.stringify({ id, name, slug, sku, brandId }))
      await ProductRepository().update(id, changes)

      res.status(200).send()
    } catch (error) {
      const errorCode = throwError(error?.errorCode, error, true)
      res.status(500).json(errorCode)
    }
  },
}

export default handler
