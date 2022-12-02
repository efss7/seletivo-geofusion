import ProductData from "../data/ProductData";
import { createProductDto } from "../model/dto/ProductDto";
import Product from "../model/Product";
import Stock from "../model/Stock";
import { CustomError } from "./errors/CustomError";

export class ProductBusiness {
  constructor(
    private productData: ProductData
  ) { }

  createProduct = async (fields: createProductDto) => {
    try {
      const { name, description, price, qtyInStock } = fields

      if(!name || typeof name!=="string"){
        throw new CustomError(422, "Name invalid")
      }

      if (!description || typeof description !== "string") {
        throw new CustomError(422, "Description invalid")
      }

      if(!price || typeof price !== "number"|| price <= 0 ){
        throw new CustomError(422, "Price invalid")
      }

      if (!qtyInStock || typeof qtyInStock !== "number" || qtyInStock <= 0) {
        throw new CustomError(422, "Quantity invalid")
      }

      const product = new Product( name, description, price)
      const stock = new Stock(qtyInStock)

      await this.productData.createProduct(product, stock)

    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message)
    }
  }
}

export default new ProductBusiness(
  new ProductData()
)