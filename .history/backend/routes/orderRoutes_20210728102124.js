import express from 'express';
import { addOrderItems, getOrderById, updateOrderToPaid } from '../controller/orderController.js';
import { protect } from '../middleware/authMiddleware.js';

const router=express.Router()

router.route('/').post(protect,addOrderItems);
router.route('/:id').get(protect,getOrderById);
router.router('/:id/pay').get(protect,updateOrderToPaid);

export default router;