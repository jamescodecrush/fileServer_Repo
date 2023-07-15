const express = require('express');
const user = require('./users')
const app = express();

app.use(express.json());



app.get('/', (req, res) => {
    res.json({ message: 'Hello, world!' });
});

// Create a new user
app.post('/users', (req, res) => {
    const { firstname, lastname, email } = req.body; // Assuming you're sending JSON data with firstname, email, and password fields

    const createUser = user.createUser(firstname, lastname, email)

    res.json({createUser})

    // return createUser ? res.json({ "message": "success"}) : res.json({createUser})

});
app.put // Updating existing. It updates all the fields

app.patch // Updating single records

app.delete // for deleting records

app.head // 

app.options //

app.delete // 

app.patch
app.listen(3000, 'localhost', () => {
    console.log('Servers started')
})

module.exports.app
