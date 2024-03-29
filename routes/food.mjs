import express from "express"
import foodData from "../data/foods.mjs"

let foodDataInMemory = [];

const router = express.Router()

// C R U D  R O U T E S 

// C: Create/post
router.post("/", (req, res) => {
    try {
        foodDataInMemory = [...foodData]; 
        res.status(201).render('food', { title: 'Food Data', message: foodDataInMemory.map(food => `${food.name} for ${food.type} `)});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
// R: Read/get
router.get("/", (req, res) => {
    try {
        res.status(200).render('food', { title: 'Food Data', message: foodDataInMemory.map(food => `${food.name} for ${food.type} `)});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
  
// U: Update/patch
router.patch("/", (req, res) => {
    try {
        foodDataInMemory = [...req.body]; 
        res.status(200).send('Database update with food collection was successful');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// D: Delete
router.delete("/", (req, res) => {
    try {
        foodDataInMemory = [];
        res.status(200).send('Cleared data succesfully.')
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

export default router