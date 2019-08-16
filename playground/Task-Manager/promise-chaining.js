require('../../src/db/mongoose');
const User = require('../../src/models/user');

User.findByIdAndUpdate('5d559054b7c8d5c851200547', { age: 1}).then((user) => {
    console.log(user);
    return User.countDocuments({age : 1});
}).then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
});



// Why this deprecation warning...? -> Not a huge deal right now...