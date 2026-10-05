const request = require('supertest');
const app = require('../src/app');

describe('GET /health', () => {
  it('should return 200', async () => {
    const response = await request(app)
      .get('/health');
    // Check that the response status code is 200 and the body contains the expected status
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('ok');
  });
});