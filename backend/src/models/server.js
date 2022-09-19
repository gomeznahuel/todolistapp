const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config.db');
const router = require('../routes/todos.route');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.todosPath = '/';

    // Database connection
    this.connectToDB();

    // Middlewares
    this.middlewares();

    // Routes
    this.routes();
  }

  // Connect to database
  async connectToDB() {
    await dbConnection();
  }

  middlewares() {
    
    // CORS
    this.app.use(cors());

    // Read and parse body
    this.app.use(express.json());

    // Public directory
    this.app.use(express.static('public'));

  }
 
  // Routes
  routes() {
    this.app.use(this.todosPath, router);
  }

  // Start server
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}

module.exports = Server;
