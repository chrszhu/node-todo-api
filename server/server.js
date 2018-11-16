var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

var newTodo = new Todo({
  text: 'cook dinner'
});

var newTodo2 = new Todo({
  text: 'be happy',
  completed: true,
  completedAt: 11
})

// newTodo.save().then((doc) => {
//   console.log('saved todo', doc);
// }, (e) => {
//   console.log('unable to save todo');
// });

newTodo2.save().then((doc) => {
  console.log('saved', doc._doc);
}, (e) => {
  console.log('doo doo');
});
