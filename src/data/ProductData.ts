import { CustomError } from "../business/errors/CustomError";
import Product from "../model/Product";
import Stock from "../model/Stock";
import { BaseDatabase } from "./BaseDatabase";

export default class ProductData {

  createProduct = async (product: Product, stock: Stock): Promise<void> => {
    try {
      await BaseDatabase.product.create({
        data: {
          name: product.getName(),
          description: product.getDescription(),
          price: product.getPrice(),
          Stock: {
            create: {
              qtyInStock: stock.getQtyInStock()
            }
          }
        }
      })
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage)
    }
  }
}