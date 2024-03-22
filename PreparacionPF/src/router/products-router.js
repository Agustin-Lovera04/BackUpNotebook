import {
  Router
} from "express";
import {
  ManagerProducts
} from "../dao/managerMongo/managerProductsMongo.js";
import {
  productsModel
} from "../dao/models/productsModel.js";
import multer from "multer";
import mongoose from "mongoose";
import {
  io
} from "../app.js";

import { passportCall, securityAcces } from "../utils.js";
import { ProductsController } from "../controller/productsController.js";
export const router = Router();
export const managerProducts = new ManagerProducts();

/* MANEJO FORM DATA */
const upload = multer();

router.post("/", passportCall('jwt'),upload.none(), securityAcces(["admin", "premiun"]),ProductsController.createProduct);

router.put("/:id", passportCall('jwt') , securityAcces(["public"]),ProductsController.updateProduct);

router.delete("/:id", passportCall('jwt'),securityAcces(["admin", "premiun"]),ProductsController.deleteProduct);
