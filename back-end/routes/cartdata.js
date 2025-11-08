import express from "express"
import { addtocart,removefromcart,getcart} from "../controllers/cartdataController.js"
const router = express.Router()
import fetchUser from '../utils/fetchUser.js'


router.post('/addtocart',fetchUser,addtocart)
router.delete('/removefromcart/:id',fetchUser,removefromcart)
router.post('/getcart',fetchUser,getcart)

export default router