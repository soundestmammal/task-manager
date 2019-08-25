const mongoose = require('mongoose');
const validator = require('validator');

const taskSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            required: true,
            trim: true
        },
        completed: {
            type: Boolean,
            default: false
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        }
    }, {
        timestamps: true
    }
)

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;

/*
There are two ways, to do this...

We can either have the user store the ids of the tasks, 

Or 

We can store the id of the user on the task data field
*/