const express = require('express');
require('./db/mongoose');

// Routers
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const PORT = process.env.PORT || 3000;

// app.use((req, res, next) => {
//     if(req.method === "GET") {
//         res.send("Get requests are disabled.");
//     } else {
//         next();
//     }

//      // Without this the request would never end...
//     /* If we never call next, then the route handler will never run.*/
// });

// app.use((req, res, next) => {
//         res.status(503).send("The site is under maintenance give us some time...");
// })

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(PORT, () => {
    console.log("Server is up on port", PORT);
});

const jwt = require('jsonwebtoken');

// const myFunction = () => {
//     const token = jwt.sign({ _id: 'abc123' }, "hereismycryptokey", { expiresIn: '5 seconds'});
//     console.log(token);
//     const data = jwt.verify(token, 'hereismycryptokey');
//     console.log(data);
// }

// myFunction();

const pet = {
    name: 'Luna'
}

pet.toJSON = function() {
    console.log(this);
    return {};
}

console.log(JSON.stringify(pet));