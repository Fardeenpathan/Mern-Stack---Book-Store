import { bookController } from "../controller/bookController.js";
import express from 'express';

export const router = express.Router();

router.get("/", bookController);