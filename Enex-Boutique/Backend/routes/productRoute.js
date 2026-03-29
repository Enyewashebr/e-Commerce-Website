import express from 'express';
import { addProduct, listProducts, removeProduct, singleProduct } from '../controllers/productController.js';

const productRouter = express.Router();

productRouter.post('/add', addProduct);
productRouter.get('/list', listProducts);
productRouter.post('/SINGLE', singleProduct);
productRouter.post('/remove', removeProduct);

export default productRouter;

