import express  from "express";
import {adddishe,alldishes,
    getSingleDishe,removedishe,
    updateDishe,getDisheBySearch} from './../controllers/disheController.js'



const router =express.Router()

// add new dishe
router.post('/adddishe',adddishe)
router.get('/alldishes',alldishes)
router.get('/getSingleDishe/:id',getSingleDishe)
router.delete('/removedishe/:id',removedishe)
router.put('/updateDishe/:id',updateDishe)
//get dishe by search
router.get('/search/getDisheBySearch',getDisheBySearch)

export default router;