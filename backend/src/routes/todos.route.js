const { saveTodo, getAllTodos, getTodoById, updateTodo, deleteTodo } = require('../controllers/todo.controller');
const { Router } = require('express');
const router = Router();
const todoPath = '/todos';

router.get(todoPath, getAllTodos);
router.get(`${todoPath}/:id`, getTodoById);
router.post(todoPath, saveTodo);
router.put(`${todoPath}/:id`, updateTodo);
router.delete(`${todoPath}/:id`, deleteTodo);

module.exports = router;
