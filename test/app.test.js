const request = require('supertest');
const express = require('express');

const app = express();
app.use(express.json());

// Định nghĩa route và logic kiểm thử cho ứng dụng
const names = [];
app.post('/api/v1/submit', (req, res) => {
  const name = req.body.name;
  names.push(name);
  res.json({ message: `Xin chào, ${name}!`, names });
});

describe('kiểm thử POST /api/v1/submit', () => {
  it('trả về lời chào và cập nhật mảng tên', async () => {
    const res = await request(app)
      .post('/api/v1/submit')
      .send({ name: 'John' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Xin chào, John!');
    expect(res.body.names).toContain('John');
  });
});
