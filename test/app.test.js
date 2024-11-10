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

app.post('/api/v1/bmi', (req, res) => {
  const { height, weight } = req.body;
  
  // Kiểm tra nếu thiếu chiều cao hoặc cân nặng
  if (!height || !weight) {
    return res.status(400).json({ error: 'Chiều cao và cân nặng là bắt buộc' });
  }

  // Tính BMI và phân loại
  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
  let classification;

  if (bmi < 18.5) {
    classification = 'Gầy';
  } else if (bmi >= 18.5 && bmi < 24.9) {
    classification = 'Bình thường';
  } else if (bmi >= 25 && bmi < 29.9) {
    classification = 'Thừa cân';
  } else {
    classification = 'Béo phì';
  }

  res.json({ bmi, classification });
});


// Tests
describe('POST /api/v1/bmi', () => {
  it('should return the correct BMI and category', async () => {
    const res = await request(app)
      .post('/api/v1/bmi')
      .send({ height: 170, weight: 65 });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('bmi', '22.49');
    expect(res.body).toHaveProperty('classification', 'Bình thường');
  });
});

module.exports = app;

