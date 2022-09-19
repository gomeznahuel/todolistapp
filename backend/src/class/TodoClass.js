const Todo = require('../models/todo');

class TodoClass {
  constructor(title) {
    this.title = title;
  }

  // Get all to do's from the database.
  static async getAllTodos() {
    try {
      const result = await Todo.find();
      return result;
    } catch (error) {
      return error;
    }
  }

  // Get a to do by id from the database.
  static async getTodoById(id) {
    try {
      const result = await Todo.findById(id);
      return result;
    } catch (error) {
      return { message: 'To do not found.' };
    }
  }

  // Add a new to do to the database.
  static async addNewTodo(title) {
    try {
      const todo = new Todo({ title });
      const result = await todo.save();
      return result;
    } catch (error) {
      return error;
    }
  }

  // Update a to do by id from the database.
  static async updateTodo(id, title) {
    try {
      const result = await Todo.findByIdAndUpdate(id, { title });
      return result;
    } catch (error) {
      return { message: 'Todo not found.' };
    }
  }

  // Delete a to do by id from the database.
  static async deleteTodo(id) {
    try {
      const result = await Todo.findByIdAndDelete(id);
      return result;
    } catch (error) {
      return { message: 'Todo not found.' };
    }
  }
}

module.exports = TodoClass;
