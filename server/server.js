const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const ConnectDB = require('./config/db')
const Router = require('./Routes/taskRoutes')

dotenv.config()
ConnectDB()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/tasks',Router)

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=> console.log(`Server is running on http://localhost:${PORT}`))