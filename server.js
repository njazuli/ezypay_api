require('dotenv').config()
const cors = require('cors');
const express = require('express')
const app = express()
const mongoose = require('mongoose')
app.use(cors());
app.options('*', cors());
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

app.listen(3000, () => console.log('Server Started'))