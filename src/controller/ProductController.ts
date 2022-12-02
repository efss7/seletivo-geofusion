import { Request, Response } from "express";
import productBusiness, { ProductBusiness } from "../business/ProductBusiness";
import { createProductDto } from "../model/dto/ProductDto";

export class ProductController {
  constructor(
    private productBusiness: ProductBusiness
  ) { }

  public createProduct = async ( req: Request, res: Response) => {
    try {
      const { name, description, price, qtyInStock } = req.body
      const fields: createProductDto = { name, description, price, qtyInStock }
      await this.productBusiness.createProduct(fields)
      res.status(200).send("Product created successfully!")
    } catch (error: any) {
      res.status(error.statusCode || 400).send({ error: error.message })
    }
  }
}

export default new ProductController(productBusiness)