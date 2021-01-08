/**
 * ASSIGNMENT:
 *
 * Finish implementing the endpoints to create a Rest API for users.
 * The "database" is just an in-memory array. You may interface the database as
 * you would with a JavaScript array - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * (hint array.splice, array.push, etc.)
 *
 * Since it is in-memory, all of the values will be reset any time the server restarts.
 *
 * You will be assessed by the following criteria:
 * - Unit tests based on criteria specified in the comments above each endpoint - @see app.spec.js
 * - Code cleanliness (make sure to lint, avoid duplicate code, and minimize complexity)
 *
 * For more information, please refer to the @see README.md
 */

const express = require('express');
const database = require('./database');

const PORT = process.env.PORT || 3000;
const app = express();

// TODO - make sure the authorization header of every request is 'auth-token'
// eslint-disable-next-line no-unused-vars
const EXPECTED_AUTH_HEADER = 'auth-token';

app.use(express.json());

/**
 * @description GET /users - An endpoint to list users
 *
 * Criteria:
 * - 401 status code if Authorization header does not equal @see EXPECTED_AUTH_HEADER
 * - 200 status code and the list of ALL users in the database in the body (already complete)
 */
app.get('/users', (req, res) => {
  res.send(database.users);
});

/**
 * @description GET /user/:userId - An endpoint to retrieve a user by id
 *
 * Criteria:
 * - 401 status code if Authorization header does not equal @see EXPECTED_AUTH_HEADER
 * - 404 status code if user does not exist
 * - 200 status code and user in response body if user exists
 */
app.get('/users/:userId', (req, res) => {
  res.send();
});

/**
 * @description POST /users - An endpoint to create a user
 *
 * Criteria:
 * - 401 status code if Authorization header does not equal @see EXPECTED_AUTH_HEADER
 * - 400 status code if the user is invalid. (email, firstName, and lastName are required)
 * - 400 status code if the specified email is taken by another user
 * - 200 status code and the new user in the response body
 * - An id must be generated for each user that is created
 * - The new user must be added to the database
 */
app.post('/users', (req, res) => {
  res.send();
});

/**
 * @description PUT /users/:userId - An endpoint to update/replace a user
 *
 * Criteria:
 * - 401 status code if Authorization header does not equal @see EXPECTED_AUTH_HEADER
 * - 400 status code if the user is invalid. (email, firstName, and lastName are required)
 * - 400 status code if the specified email is taken by another user
 * - 404 status code if the user does not exist
 * - 200 status code and the updated user in the response body
 * - The user id may not be changed
 * - The user is updated within the database
 */
app.put('/users/:userId', (req, res) => {
  res.send();
});

/**
 * @description DELETE /users/:userId - An endpoint to remove a user
 *
 * Criteria:
 * - 401 status code if Authorization header does not equal @see EXPECTED_AUTH_HEADER
 * - 404 status code if the user does not exist
 * - 2XX status code if the user is succesfully removed
 * - The user is removed from the database
 */
app.delete('/users/:userId', (req, res) => {
  res.send();
});

module.exports.app = app;
module.exports.startServer = () => app.listen(PORT);
