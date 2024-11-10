// Import các hàm calculateBMI và classifyBMI từ bmi.js

// Hàm getBMI xử lý yêu cầu từ client
// Trả về JSON chứa bmi và classification

// Xuất hàm getBMI

// Lưu ý: Tham khảo mã trong tệp nameController.js
// bmiController.js

// Import các hàm từ tệp bmi.js
// src/controllers/bmiController.js
const calculateBMI = (req, res) => {
    const { height, weight } = req.body;
    if (!height || !weight) {
        return res.status(400).json({ error: 'Chiều cao và cân nặng là bắt buộc' });
    }
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    // Phân loại BMI theo chỉ số
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
};

module.exports = { calculateBMI };

