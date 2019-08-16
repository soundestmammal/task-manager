require('../../src/db/mongoose');
const User = require('../../src/models/user');
const Task = require('../../src/models/task');

User.findByIdAndUpdate('5d559054b7c8d5c851200547', { age: 1}).then((user) => {
    console.log(user);
    return User.countDocuments({age : 1});
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
});

const updateAgeandCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age });
    const count = await User.countDocuments({ age});
    return count;
}

updateAgeandCount('5d559054b7c8d5c851200547', 11);
// Why this deprecation warning...? -> Not a huge deal right now...

/*
Goal:

Use Async/Await

1. Create deleteTaskAndCount as an async function
 - Accept id of task to remove
2. Use await to delete task and count up incomplete tasks
3. Return the count 
4. Call the function and attach then and catch to log the results
5. Test the results
*/

const deleteTaskAndCount = async (id) => {
    const deletedTask = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false });
    return count;
}

deleteTaskAndCount('5d558d7dd3a12dc67709dcde').then((result) => {
    console.log('result', result);
}).catch((e) => {
    console.log(e);
})