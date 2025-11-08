import express  from "express";
import {populardishe} from '../controllers/popularDishesController.js'

const router =express.Router()


router.get('/',populardishe)
export default router;