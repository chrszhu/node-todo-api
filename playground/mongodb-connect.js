const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to connect to mongodb server');
  }

  console.log('connected to mongodb server');

  db.collection('Todos').insertOne({
    text: 'something to do',
    completed: false
  }, (err, result) => {
    if (err) {
      return console.log('unable to insert todo', err);
    }

    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  //insert new doc into users (name age location)

  db.collection('Users').insertOne({
    name: 'chris',
    age: 22,
    location: 'ca'
  }, (err, result) => {
    if (err) {
      return console.log('unable to insert user', err);
    }

    console.log(result.ops)
  })

  db.close();
});
