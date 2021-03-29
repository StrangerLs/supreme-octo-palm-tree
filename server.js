const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const contentRoutes = require('./routes/content')
const PORT = process.env.PORT || 3000
const db = require('./db/connection')

const app = express();

app.use(express.json())
app.use(cors())
app.use(logger('dev'))
app.use('/api', contentRoutes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.listen(PORT, () => console.log(`Listening on port : ${PORT}`))