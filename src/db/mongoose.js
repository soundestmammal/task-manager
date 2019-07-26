const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
});

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const me = new User({name: 'Rob', age: 27 })

me.save().then((me) => {
    console.log(me);
}).catch((error) => {
    console.log("Error: ", error);
});

/* 

Goal: Create a model for tasks

1. Define the model with description and completed fields
2. Create a new instance of the model
3. Save the model to the database
4. Test your work

*/

const Tasks = mongoose.model('Tasks', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
});

const july26 = new Tasks({
    description: "Go to Flux",
    completed: false
});

july26.save().then((july26) => {
    console.log("This was a success", july26);
}).catch((error) => {
    console.log("There was an error, I am so sorry to tell you", error);
});