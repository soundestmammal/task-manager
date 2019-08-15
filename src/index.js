const express = require('express');
require('./db/mongoose');
const User = require('./models/user');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.send(user);
    }).catch((e) => {
        console.log("There is an error!", e);
    });
})

app.listen(PORT, () => {
    console.log("Server is up on the port");
});
