// DEPENDENCIES
const express = require('express')
const methodOverride = require('method-override')
const cors = require('cors')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
const mongoose = require('mongoose')
const MONGO_URI = process.env.MONGO_URI


// MIDDLEWARE
app.use(cors())
app.use(express.json())
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))





// ROUTES
app.get('/', (req, res) => {
    res.send('Welcome!')
})

const userController = require('./controllers/user_controller.js')
app.use('/user', userController)

// 404 Page
app.get('*', (req, res) => {
    res.render('Error')
})


// LISTEN

const start = () => {
    mongoose.connect(MONGO_URI)
        .then(() => console.log('db connected'))
        .catch(err => console.error(err));

    app.listen(PORT, console.log(`listening on port ${PORT}`))
}

start();