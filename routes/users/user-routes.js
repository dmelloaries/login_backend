import express from 'express';
import { getUserDetails } from '../../controllers/authController.js';
import {authMiddleware} from "../../middlewares/authMiddleware.js";

const router = express.Router();

router.get('/user-details',authMiddleware, getUserDetails);

export default router;