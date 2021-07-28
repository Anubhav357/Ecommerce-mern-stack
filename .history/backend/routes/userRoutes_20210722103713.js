import express from 'express';
import { authUser, getUserProfile } from '../controller/userController.js';
import {protect}from '../middleware/authMiddleware';
const router=express.Router();

router.post('/login',authUser);
router.route('/profile').get(authMiddleware,getUserProfile);
export default router;