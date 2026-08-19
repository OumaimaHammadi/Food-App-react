import express  from "express";
import {dishes} from '../controllers/dishesController.js'

import{getSingleDishe} from '../controllers/disheController.js'




const router =express.Router()


router.get('/',dishes)


router.get('/getSingleDishe/:id',getSingleDishe)


export default router;