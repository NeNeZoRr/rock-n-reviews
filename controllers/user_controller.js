const router = require('express').Router()
const User = require('../models/user')


//seed data
// router.get('/data/seed', (req, res) => {
//     Bakers.insertMany(userSeedData)
//         .then(res.redirect('/user'))
// })

//create user
router.post('/user', (req, res) => {
    for (const [key, value] of Object.entries(req.body)) {
        if (!value) delete req.body[key]
    }
    User.create(req.body)
        .then(() => {
            res.redirect('./src/views/user')
        })
})

//show user page
router.get('/user/:id', async (req, res) => {
    const { id } = req.params
    const foundUser = await User.findById(id)
    res.json(foundUser)
})



module.exports = router