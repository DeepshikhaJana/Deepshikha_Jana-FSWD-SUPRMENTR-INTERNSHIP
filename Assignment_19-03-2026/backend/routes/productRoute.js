// Define API routes and connect them to controller functions
import express from 'express';
import { getProducts } from '../controllers/productController.js';

const router = express.Router();

router.get('/', getProducts);

export default router;
