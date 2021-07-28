import express from 'express';
import { getProduct, getProductById } from '../controller/productControllers';
const router=express.Router();

router.route('/').get(getProduct)

router.route('/:id').get(getProductById);

export default router;