const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/users', async (req, res) => {

    const user = new User(req.body);

    try {
        await user.save();
        res.status(201).send(user);
    } catch(e) {
        res.status(400).send(e); 
    }
});

app.post('/tasks', async (req, res) => {
    const task = new Task(req.body);

    try {
        await task.save();
        res.send(task);
    } catch(e) {
        res.status(400).send(e);
    }
});

app.get('/users', async (req, res) => {
    
    try {
        const users = await User.find({});
        res.send(users);
    } catch(e) {
        res.status(500).send();
    }
});

app.get('/users/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const user = await User.findById({ _id });
        if(!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch(e) {
        res.status(500).send(e);
    }
});

app.get('/tasks', async (req, res) => {
    try {
        tasks = await Task.find({});
        res.send(tasks);
    } catch(e) {
        res.status(400).send();
    } 
});

app.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id;

    try {
        const task = await Task.findById(_id);
        if(!task) {
            return res.status(404).send();
        }
        res.send(task);
    } catch(e) {
        res.status(500).send();
    }
});

app.patch('/tasks/:id', async (req, res) => {
    const _id = req.params.id;

    const updates = Object.keys(req.body);
    const allowedUpdates = ['description', 'completed'];
    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update);
    });

    if(!isValidOperation) {
        return res.status(400).send({ error: "Invalid Update to a task"});
        console.log("This is here");
    }

    try {
        const task = await Task.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true });
        if(!task) {
            return res.status(404).send();
        }
        res.send(task);
    } catch(e) {
        res.status(400).send();
        console.log("Here is where the problem is")
    }
});

app.patch('/users/:id', async (req, res) => {
    const _id = req.params.id;

    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'password', 'age', 'email'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if(!isValidOperation) {
        return res.status(400).send( { error: 'Invalid Updates' });
    }

    try {
        const user = await User.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true});
        if(!user) {
            return res.status(404).send();
        }
        res.send(user);

    } catch(e) {
        res.status(400).send();
    }
});

app.delete('/users/:id', async(req, res) => {
    const _id = req.params.id;
    
    try {
        const user = await User.findByIdAndDelete(_id);
        if(!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch(e) {
        res.status(400).send();
    }
});

app.delete('/tasks/:id', async(req, res) => {
    const _id = req.params.id;

    try {
        const task = await Task.findByIdAndDelete(_id);
        if(!task) {
            return res.status(404).send();
        }
        res.send(task);
    } catch(e) {
        res.status(400).send();
    }
});

app.listen(PORT, () => {
    console.log("Server is up on the port");
});


