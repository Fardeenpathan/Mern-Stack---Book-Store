import { bookController } from "../controller/bookController.js";
import express from 'express';

export const router = express.Router();

// book controller 
router.get("/", bookController);