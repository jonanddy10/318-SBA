import express from "express"
import drinkData from "../data/drinks.mjs"

let drinkDataInMemory = [];

const router = express.Router()

// C R U D  R O U T E S 

// C: Create/post
router.post("/", (req, res) => {
    try {
        drinkDataInMemory = [...drinkData]; 
        res.status(201).render('drink', { title: 'drink Data', message: drinkDataInMemory.map(drink => `${drink.name} for ${drink.type} is hot? ${drink.hot}`)});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
// R: Read/get
router.get("/", (req, res) => {
    try {
        res.status(200).render('drink', { title: 'drink Data', message: drinkDataInMemory.map(drink => `${drink.name} for ${drink.type} is hot? ${drink.hot}`)});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
  
// U: Update/patch
router.patch("/", (req, res) => {
    try {
        drinkDataInMemory = [...req.body]; 
        res.status(200).send('Database update with drink collection was successful');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// D: Delete
router.delete("/", (req, res) => {
    try {
        drinkDataInMemory = [];
        res.status(200).send('Cleared data succesfully.')
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
});

export default router