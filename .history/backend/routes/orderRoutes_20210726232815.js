import express from 'express';
import { addOrderItems, getOrderById } from '../controller/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

const router=express.Router()

router.route('/').post(protect,addOrderItems);
router.route('/:id').post(protect,getOrderById);

export default router;