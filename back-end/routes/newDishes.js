import express  from "express";
import {newdishes} from '../controllers/newDishesController.js'

const router =express.Router()


router.get('/',newdishes)
export default router;