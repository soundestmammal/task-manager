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

const id = new ObjectID();
console.log(id.id.length);
console.log(id.toHexString().length);

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
}); 