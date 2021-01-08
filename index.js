const { startServer } = require('./app');
const database = require('./database');

database.initUsers();
startServer();
