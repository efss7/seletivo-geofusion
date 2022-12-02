import { app } from "./controller/app";
import express from "express";
import cors from "cors";
import { productRouter } from "./business/routes/ProductRouter";



app.use(express.json());
app.use(cors());

app.use("/product", productRouter)
