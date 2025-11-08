import express  from "express";
import {dishes} from '../controllers/dishesController.js'

const router =express.Router()


router.get('/',dishes)
export default router;