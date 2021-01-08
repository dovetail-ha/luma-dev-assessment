const request = require('supertest');
const { app, startServer } = require('./app');
const database = require('./database');

const authorizedRequest = (req) => req.set('Authorization', 'auth-token');
const testUnauthorized = async (req) => {
  const response = await req;

  return expect(response.statusCode).toBe(401);
};

const VALID_USER = {
  email: 'george.washington@us.gov',
  firstName: 'George',
  lastName: 'Washington',
};

describe('Luma Assessment', () => {
  let server;
  beforeEach(() => {
    server = startServer();
    database.initUsers();
  });

  afterEach(() => {
    server.close();
  });

  // List users
  describe('GET /users', () => {
    test('without bearer token returns 401', async () => {
      await testUnauthorized(request(app).get('/users'));
    });

    test('returns all users', async () => {
      const req = authorizedRequest(request(app).get('/users').set('Accept', 'application/json'));

      const response = await req.set({
        firstName: 'Gary',
      });

      return expect(response.body.length).toBe(database.users.length);
    });
  });

  // Get user
  describe('GET /users/:userId', () => {
    test('without bearer token returns 401', async () => {
      await testUnauthorized(request(app).get('/users/1'));
    });

    test('with non-existing user id returns 404', async () => {
      const response = await authorizedRequest(request(app).get(`/users/${database.users.length + 1}`));

      expect(response.statusCode).toBe(404);
    });

    test('with existing user id returns 200 and user', async () => {
      const testUser = database.users[0];
      const response = await authorizedRequest(request(app).get(`/users/${testUser.id}`));

      expect(response.body).toBeTruthy();
      expect(response.body.id).toBe(testUser.id);
    });
  });

  // Create user
  describe('POST /users', () => {
    const createValidUser = () => authorizedRequest(request(app).post('/users').send(VALID_USER));

    test('without bearer token returns 401', async () => {
      await testUnauthorized(request(app).post('/users'));
    });

    test('without email address returns 400', async () => {
      const response = await authorizedRequest(
        request(app).post('/users').send({
          firstName: 'George',
          lastName: 'Washington',
        }),
      );

      expect(response.statusCode).toBe(400);
    });

    test('without first name returns 400', async () => {
      const response = await authorizedRequest(
        request(app).post('/users').send({
          email: 'george.washington@us.gov',
          lastName: 'Washington',
        }),
      );

      expect(response.statusCode).toBe(400);
    });

    test('without last name returns 400', async () => {
      const response = await authorizedRequest(
        request(app).post('/users').send({
          email: 'george.washington@us.gov',
          firstName: 'Washington',
        }),
      );

      expect(response.statusCode).toBe(400);
    });

    test('with duplicate email address returns 400', async () => {
      const { email } = database.users[0];
      const response = await authorizedRequest(
        request(app).post('/users').send({
          email,
          firstName: 'George',
          lastName: 'Washington',
        }),
      );

      expect(response.statusCode).toBe(400);
    });

    test('with valid email address, first name, and last name returns 200 and new user', async () => {
      const response = await authorizedRequest(
        request(app).post('/users').send({
          email: 'george.washington@us.gov',
          firstName: 'George',
          lastName: 'Washington',
        }),
      );

      expect(response.statusCode).toBe(200);
      expect(response.body).toBeTruthy();
    });

    test('with valid email address, first name, and last name assigns an id to the new user', async () => {
      const response = await authorizedRequest(
        request(app).post('/users').send({
          email: 'george.washington@us.gov',
          firstName: 'George',
          lastName: 'Washington',
        }),
      );

      expect(response.body.id).toBeTruthy();
    });

    test('with valid email address, first name, and last name adds user to users array', async () => {
      const response = await createValidUser();

      expect(database.users).toContainEqual(
        expect.objectContaining({
          id: response.body.id,
        }),
      );
    });
  });

  // Update user
  describe('PUT /users/:userId', () => {
    test('without bearer token returns 401', async () => {
      await testUnauthorized(request(app).put('/users/1'));
    });

    test('without email address returns 400', async () => {
      const { firstName, lastName, id } = database.users[0];
      const response = await authorizedRequest(
        request(app).put(`/users/${id}`).send({
          firstName,
          lastName,
        }),
      );

      expect(response.statusCode).toBe(400);
    });

    test('without first name returns 400', async () => {
      const { email, lastName, id } = database.users[0];
      const response = await authorizedRequest(
        request(app).put(`/users/${id}`).send({
          email,
          lastName,
        }),
      );

      expect(response.statusCode).toBe(400);
    });

    test('without last name returns 400', async () => {
      const { firstName, email, id } = database.users[0];
      const response = await authorizedRequest(
        request(app).put(`/users/${id}`).send({
          email,
          firstName,
        }),
      );

      expect(response.statusCode).toBe(400);
    });

    test('with duplicate email address returns 400', async () => {
      const userA = database.users[0];
      const userB = database.users[1];
      const response = await authorizedRequest(
        request(app).put(`/users/${userA.id}`).send({
          email: userB.email,
          firstName: userA.firstName,
          lastName: userB.lastName,
        }),
      );

      expect(response.statusCode).toBe(400);
    });

    test('with a valid body and a non-existing user id returns 404', async () => {
      const response = await authorizedRequest(
        request(app)
          .put(`/users/${database.users.length + 1}`)
          .send(VALID_USER),
      );

      expect(response.statusCode).toBe(404);
    });

    test('with valid email address, first name, and last name returns 200 and updated user', async () => {
      const existingUserId = database.users[0].id;
      const response = await authorizedRequest(request(app).put(`/users/${existingUserId}`).send(VALID_USER));

      expect(response.statusCode).toBe(200);
      expect(response.body).toMatchObject(
        expect.objectContaining({
          email: VALID_USER.email,
          id: existingUserId,
          firstName: VALID_USER.firstName,
          lastName: VALID_USER.lastName,
        }),
      );
    });

    test('with valid id, email, first name, and last name updates user within database', async () => {
      const existingUserId = database.users[0].id;
      await authorizedRequest(request(app).put(`/users/${existingUserId}`).send(VALID_USER));

      const updatedUser = database.users.find((x) => x.id === existingUserId);

      expect(updatedUser).toMatchObject(
        expect.objectContaining({
          email: VALID_USER.email,
          id: existingUserId,
          firstName: VALID_USER.firstName,
          lastName: VALID_USER.lastName,
        }),
      );
    });

    test('does not allow id to be changed', async () => {
      const existingUserId = database.users[0].id;
      const attemptedNewUserId = database.users.length + 1;
      const response = await authorizedRequest(
        request(app)
          .put(`/users/${existingUserId}`)
          .send({ id: attemptedNewUserId, ...VALID_USER }),
      );

      const updatedUser = database.users.find((x) => x.id === attemptedNewUserId);

      expect(response.body.id).not.toBe(attemptedNewUserId);
      expect(updatedUser).toBeFalsy();
    });
  });

  // Delete user
  describe('DELETE /users/:userId', () => {
    test('without bearer token returns 401', async () => {
      await testUnauthorized(request(app).put('/users/1'));
    });

    test('with non-existing id returns 404', async () => {
      const nonExistingUserId = database.users.length + 1;
      const response = await authorizedRequest(request(app).delete(`/users/${nonExistingUserId}`));

      expect(response.statusCode).toBe(404);
    });

    test('with existing user id returns 2XX', async () => {
      const userId = database.users[0].id;
      const response = await authorizedRequest(request(app).delete(`/users/${userId}`));

      expect(response.statusCode).toBeGreaterThanOrEqual(200);
      expect(response.statusCode).toBeLessThan(300);
    });

    test('with existing user id removes user from users array', async () => {
      const userId = database.users[0].id;
      await authorizedRequest(request(app).delete(`/users/${userId}`));

      const user = database.users.find((x) => x.id === userId);

      expect(user).toBeFalsy();
    });
  });
});
