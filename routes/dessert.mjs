import express from "express"
import dessertData from "../data/desserts.mjs"

let dessertDataInMemory = [];

const router = express.Router()

// C R U D  R O U T E S 

// C: Create/post
router.post("/", (req, res) => {
    try {
        dessertDataInMemory = [...dessertData]; 
        res.status(201).render('dessert', { title: 'dessert Data', message: dessertDataInMemory.map(dessert => `${dessert.name} for ${dessert.type} `)});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
// R: Read/get
router.get("/", (req, res) => {
    try {
        res.status(200).render('dessert', { title: 'dessert Data', message: dessertDataInMemory.map(dessert => `${dessert.name} for ${dessert.type} `)});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
  
// U: Update/patch
router.patch("/", (req, res) => {
    try {
        dessertDataInMemory = [...req.body]; 
        res.status(200).send('Database update with dessert collection was successful');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// D: Delete
router.delete("/", (req, res) => {
    try {
        dessertDataInMemory = [];
        res.status(200).send('Cleared data succesfully.')
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});
// add a middleware function that returns only vegan or non-vegan
export default router