import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from "./config/db.js"
import router from './routes/api.js'

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

dotenv.config()

app.use("/api", router)

connectDB()

app.listen(3000, () => {
    console.log("Server started on port 3000")
})

export default app