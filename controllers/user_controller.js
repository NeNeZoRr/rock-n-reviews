const router = require('express').Router()
const User = require('../models/user')
const userSeedData = require('../models/user_seed')

//seed data
router.get('/data/seed', (req, res) => {
    Bakers.insertMany(userSeedData)
        .then(res.redirect('/user'))
})

//create user
router.post('/', (req, res) => {
    for (const [key, value] of Object.entries(req.body)) {
        if (!value) delete req.body[key]
    }
    User.create(req.body)
    // .then(() => {
    //     res.redirect('./user')
    // })
})

//show user page
router.get('/:id', async (req, res) => {
    const { id } = req.params
    const foundUser = await User.findById(id)
    res.json(foundUser)
})



module.exports = router