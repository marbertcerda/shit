const express = require('express');
const app = express();
const fs = require('fs');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Load tasks from the JSON file
let tasks = JSON.parse(fs.readFileSync('tasks.json', 'utf8'));

app.get('/', (req, res) => {
  res.render('index', { tasks });
});

app.post('/addTask', (req, res) => {
  const newTask = req.body.task;
  tasks.push({ description: newTask, completed: false });
  updateTasksFile();
  res.redirect('/');
});

app.get('/editTask/:index', (req, res) => {
  const index = req.params.index;
  res.render('task', { index, task: tasks[index] });
});

app.post('/updateTask/:index', (req, res) => {
  const index = req.params.index;
  tasks[index].description = req.body.task;
  updateTasksFile();
  res.redirect('/');
});

app.post('/completeTask/:index', (req, res) => {
  const index = req.params.index;
  tasks[index].completed = !tasks[index].completed;
  updateTasksFile();
  res.redirect('/');
});

app.get('/deleteTask/:index', (req, res) => {
  const index = req.params.index;
  tasks.splice(index, 1);
  updateTasksFile();
  res.redirect('/');
});

function updateTasksFile() {
  fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2));
}

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
