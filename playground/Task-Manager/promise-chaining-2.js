/*
Challenge:

1. Create promise-chaining-2.js
2. Load in monogoose and Task model
3. Remove a given task by id
4. Get and print the total number of imcomplete tasks
5. Test your work...
*/

require('../../src/db/mongoose');
const Task = require('../../src/models/task');

Task.findByIdAndDelete('5d55e0701abd86dd96fadecb').then((res) => {
    console.log(res);
}).catch((e) => {
    console.log(e);
});

Task.find({completed: false}).then((notDone) => {
    console.log(notDone);
    return Task.countDocuments({ completed: false });
    }).then((num) => {
        console.log(num);
    }).catch((e) => {
        console.log(e);
    })



