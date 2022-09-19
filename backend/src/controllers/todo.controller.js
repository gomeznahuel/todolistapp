const TodoClass = require('../class/TodoClass');

const saveTodo = async (req, res) => {
  const { title } = req.body;
  const todo = await TodoClass.addNewTodo(title);
  res.json(todo);
};

const getAllTodos = async (req, res) => {
  const result = await TodoClass.getAllTodos();
  res.json(result);
};

const getTodoById = async (req, res) => {
  const { id } = req.params;
  const result = await TodoClass.getTodoById(id);

  if (result === null) res.json('Todo not found.');
  else res.json(result);
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const result = await TodoClass.updateTodo(id, title);

  if (result === null) res.json('Todo not found.');
  else res.json(result);
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  const result = await TodoClass.deleteTodo(id);

  if (result) res.json({ 'To do deleted successfully.': result });
  else res.json('To do not found.');
};

module.exports = { saveTodo, getAllTodos, getTodoById, updateTodo, deleteTodo };
