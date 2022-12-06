import { Router } from "express";
import productController from "../../controller/ProductController";


export const productRouter = Router();


productRouter.post("/create", productController.createProduct)
productRouter.get("", productController.findAllProducts)
