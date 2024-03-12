import express from "express"
import foodData from "../data/foods.mjs"

// declarations
const router = express.Router()

// C R U D  R O U T E S 
// allow server to accept incoming json 
router.use(express.json())

// C: Create/post
router.post("/", (req, res) => {

})
// R: Read/get
router.get("/")
// U: Update/patch
router.patch("/")
// D: Delete
router.delete("/")

// middleware

// retrieve food data
function getFood(req, res, next) {
    let food
    try {
        food = food.findById(req.params.id)

        if(food == null){res.status(404).json({ message: "cannot find food"})}
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    res.food = food
    next()
}

export default router