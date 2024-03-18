import { test } from 'vitest';
import request from 'supertest';
import app from '../app';

test('GET /api/hello', async ({ expect }) => {
  const response = await request(app)
    .get('/api/hello')
    .send({ message: 'Test' });

  expect(response.statusCode).toBe(200);
  expect(response.body).toEqual({
    message: 'Hello from server! Mesage: Test',
  });
});
