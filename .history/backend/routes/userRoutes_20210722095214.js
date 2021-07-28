import express from 'express';
import { authUser, getUserProfile } from '../controller/userController.js';

const router=express.Router();

router.post('/login',authUser);
router.route('/profile').get(getUserProfile);
export default router;