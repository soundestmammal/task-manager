const express = require('express');
require('./db/mongoose');

// Routers
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(PORT, () => {
    console.log("Server is up on port", PORT);
});
