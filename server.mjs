import express from "express"
import foodRouter from "./routes/food.mjs"
// import drinkRouter from "./routes/drink.mjs"
// import dessertRouter from "./routes/dessert.mjs"

// declarations
const app = express()
const PORT = 3000

// routes
app.use("/food", foodRouter)
// app.use("/drink", drinkRouter)
// app.use("/dessert", dessertRouter)

// C R U D  R O U T E S 

// C: Create/post
app.post("/")
// R: Read/get
app.get("/")
// U: Update/patch
app.patch("/")
// D: Delete
app.delete("/")

// middleware

// error-handling
app.use((err, _req, res, _next)  => {
    res.status(400).send({ message : "theres been an error"})
})

// listeners
app.listen(PORT, () => {
    console.log(`Server connected.`)
})