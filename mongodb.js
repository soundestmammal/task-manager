/*
CRUD Operations
Create, Read, Update, Delete
*/

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;

// Good time to use Destructuring
const { MongoClient, ObjectID } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'Patrick',
    //     age: 29
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user');
    //     }

    //     console.log(result.ops);
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Alg',
    //         age: 28
    //     }, {
    //         name: 'Ben',
    //         age: 85
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('There was an error');
    //     }

    //     console.log(result.ops);
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Walk the dog',
    //         completed: false
    //     },
    //     {
    //         description: 'Do the laundry',
    //         completed: true
    //     },
    //     {
    //         description: 'Algorithms',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error) return console.log('There was a problem');

    //     console.log('Everything was added correctly!!!');
    //     console.log(result.ops);
    // })
    
    // Fetching Data out of the database

    // db.collection('users').findOne({ _id: new ObjectID('5d113ceb469cfcacd327f24e')}, (error, user) => {
    //     if(error) {
    //         return console.log('Unable to fetch');
    //     }

    //     console.log(user);
    // })

    // db.collection('users').find({age: 24}).toArray((error, users) => {
    //     console.log(users);
    // });

    // db.collection('users').find({age: 24}).count((error, count) => {
    //     console.log(count);
    // });

    // Challenge 1: Use findOne to fetch last task by its id
    db.collection('tasks').findOne({_id: new ObjectID("5d1136cc483a79aacccc0014")}, (error, task) => {
        console.log(task);
    })

    // Challenge 2: Use find to fetch all tasks that are not completed
    db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
        console.log(tasks);
    })

}); 