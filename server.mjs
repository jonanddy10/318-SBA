import express from "express"
import foodRouter from "./routes/food.mjs"
// import drinkRouter from "./routes/drink.mjs"
// import dessertRouter from "./routes/dessert.mjs"

// declarations
const app = express()
const PORT = 3000
app.set('view engine', 'ejs')

// routes
app.use("/food", foodRouter)
// app.use("/drink", drinkRouter)
// app.use("/dessert", dessertRouter)

// error-handling middleware
app.use((err, _req, res, _next)  => {
    res.status(404).json({ message : "nothing found here"})
})
app.use((err, _req, res, _next) => {
    res.status(500).json({ message: err.message })
})

// listeners
app.listen(PORT, () => {
    console.log(`Server connected.`)
})