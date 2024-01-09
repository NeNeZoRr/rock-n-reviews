const express = require('express');
const bodyParser = require('body-parser');
const User = require('../models/user');

const app = express();
app.use(bodyParser.json());

// Create user
app.post('/', (req, res) => {
    for (const [key, value] of Object.entries(req.body)) {
        if (!value) delete req.body[key];
    }
    User.create(req.body)
        // .then(() => {
        //     res.redirect('/user');
        // })
        .catch(err => {
            console.error(err);
            res.status(500).send('An error occurred while creating the user.');
        });
});

// Show user page
app.get('/user/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const foundUser = await User.findById(id);
        res.json(foundUser);
    } catch (err) {
        console.error(err);
        res.status(500).send('An error occurred while fetching the user.');
    }
});

module.exports = app;