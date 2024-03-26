import express from "express"
// invoke express in the app variable
    const app = express()
// import routes
import foodRouter from "./routes/food.mjs"
import drinkRouter from "./routes/drink.mjs"
import dessertRouter from "./routes/dessert.mjs"

// store the port number into the PORT variable
const PORT = 3000

// render view engine:
app.set('view engine', 'ejs')

// accept json request as a body
app.use(express.json())
// routes
app.use("/food", foodRouter)
app.use("/drink", drinkRouter)
app.use("/dessert", dessertRouter)

// global error-handling middleware
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