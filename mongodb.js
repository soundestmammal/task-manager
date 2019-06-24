/*
CRUD Operations
Create, Read, Update, Delete
*/

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'Robert',
    //     age: 24
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user');
    //     }

    //     console.log(result.ops);
    // })

    db.collection('users').insertMany([
        {
            name: 'Alg',
            age: 28
        }, {
            name: 'Ben',
            age: 85
        }
    ], (error, result) => {
        if (error) {
            return console.log('There was an error');
        }

        console.log(result.ops);
    })
}); 