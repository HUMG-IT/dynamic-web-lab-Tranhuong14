// Tính chỉ số BMI dựa trên cân nặng và chiều cao, trả về hệ số BMI với 2 số sau dấu phẩy
// 1. Định nghĩa hàm calculateBMI để tính chỉ số BMI:
// - Viết một hàm calculateBMI nhận hai tham số là weight (cân nặng, đơn vị kg) và height (chiều cao, đơn vị cm).
// - Sử dụng công thức tính BMI: BMI = weight / (height / 100)^2.
// - Đảm bảo kết quả của chỉ số BMI được giới hạn ở hai chữ số thập phân bằng .toFixed(2).

// Phân loại theo chỉ số BMI
// 2. Định nghĩa hàm classifyBMI để phân loại chỉ số BMI:
// - Viết hàm classifyBMI nhận một tham số là bmi, là kết quả từ hàm calculateBMI.
// - Sử dụng các điều kiện để phân loại bmi:
//    - BMI dưới 18.5 là "Gầy".
//    - BMI từ 18.5 đến 24.9 là "Bình thường".
//    - BMI từ 25 đến 29.9 là "Thừa cân".
//    - BMI từ 30 trở lên là "Béo phì".

// Xuất các hàm calculateBMI và classifyBMI
// Hàm tính chỉ số BMI
function calculateBMI(weight, height) {
    // Tính BMI sử dụng công thức: BMI = weight / (height / 100)^2
    let bmi = weight / Math.pow((height / 100)** 2);
    // Giới hạn BMI ở hai chữ số thập phân
    return parseFloat(bmi.toFixed(2));
}

// Hàm phân loại chỉ số BMI
function classifyBMI(bmi) {
    // Phân loại theo các điều kiện chỉ số BMI
    if (bmi < 18.5) {
        return "Gầy";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "Bình thường";
    } else if (bmi >= 25 && bmi <= 29.9) {
        return "Thừa cân";
    } else {
        return "Béo phì";
    }
}

// Xuất các hàm để sử dụng ở nơi khác
module.exports = { calculateBMI, classifyBMI };
