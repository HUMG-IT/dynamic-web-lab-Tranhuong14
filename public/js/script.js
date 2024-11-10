// Form lưu tên
document.getElementById('nameForm').addEventListener('submit', async function (e) {
    // Ngăn hành vi mặc định của form (ngăn tải lại trang)
    e.preventDefault();

    // Lấy giá trị nhập từ trường input có id là 'name'
    const name = document.getElementById('name').value;

    // Gửi yêu cầu POST đến server tại route '/submit' với dữ liệu JSON
    const response = await fetch('/api/v1/submit', {
        method: 'POST',  // Sử dụng phương thức POST để gửi dữ liệu
        headers: {
            'Content-Type': 'application/json',  // Định nghĩa kiểu nội dung gửi là JSON
        },
        body: JSON.stringify({ name: name }),  // Chuyển đổi đối tượng { name: name } thành chuỗi JSON
    });

    // Chờ phản hồi từ server và chuyển đổi phản hồi từ JSON thành đối tượng JavaScript
    const data = await response.json();

    // Hiển thị thông điệp trả về từ server trong phần tử có id là 'nameResponse'
    document.getElementById('nameResponse').textContent = data.message;
});
document.getElementById('bmiForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Lấy giá trị chiều cao và cân nặng từ form
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    // Kiểm tra nếu chiều cao và cân nặng là số hợp lệ
    if (!isNaN(height) && !isNaN(weight) && height > 0 && weight > 0) {
        try {
            // Gửi yêu cầu POST đến endpoint /api/v1/bmi
            const response = await fetch('/api/v1/bmi', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ height, weight })
            });
            
            // Kiểm tra nếu phản hồi thành công
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            // Kiểm tra nếu data.bmi là số hợp lệ trước khi gọi toFixed
            if (typeof data.bmi === 'number') {
                document.getElementById('bmiResponse').textContent = 
                    `BMI: ${data.bmi.toFixed(2)}, Phân loại: ${data.category}`;
            } else {
                document.getElementById('bmiResponse').textContent = 
                    'Lỗi: Dữ liệu BMI không hợp lệ từ server.';
            }
        } catch (error) {
            // Xử lý lỗi nếu xảy ra trong quá trình gửi yêu cầu
            console.error('Fetch error:', error);
            document.getElementById('bmiResponse').textContent = 
                'Lỗi khi tính toán BMI. Vui lòng thử lại sau.';
        }
    } else {
        document.getElementById('bmiResponse').textContent = 
            'Vui lòng nhập giá trị hợp lệ cho chiều cao và cân nặng.';
    }
});
