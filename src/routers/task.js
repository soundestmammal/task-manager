const express = require('express');
const Task = require('../models/task');
const User = require('../models/user');
const auth = require('../middleware/auth');
const router = new express.Router();

router.post('/tasks', auth, async (req, res) => {
    // const task = new Task(req.body);
    const task = new Task({
        ...req.body,
        owner: req.user._id
    });

    try {
        await task.save();
        res.send(task);
    } catch(e) {
        res.status(400).send(e);
    }
});

router.get('/tasks', auth, async (req, res) => {
    try {
        const _id = req.user._id;
        console.log(_id);
        const user = await User.findById(_id);
        console.log(user);
        await user.populate('tasks').execPopulate();
        console.log(user.tasks);
        

        res.send(user.tasks);
    } catch(e) {
        res.status(400).send();
    } 
});

router.get('/tasks/:id', auth, async (req, res) => {
    const _id = req.params.id;

    try {
        // const task = await Task.findById(_id);
        const task = await Task.findOne({ _id, owner: req.user._id });

        if(!task) {
            return res.status(404).send();
        }

        res.send(task);
    }   catch(e) {
        res.status(500).send();
    }
});

router.patch('/tasks/:id', async (req, res) => {
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
        const task = await Task.findById(_id);

        updates.forEach((update) => {
            task[update] = req.body[update];
        });

        await task.save();

        if(!task) {
            return res.status(404).send();
        }
        res.send(task);
    } catch(e) {
        res.status(400).send();
        console.log("Here is where the problem is")
    }
});

router.delete('/tasks/:id', async(req, res) => {
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



module.exports = router;