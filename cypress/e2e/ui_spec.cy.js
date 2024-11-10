describe('Kiểm thử giao diện lưu tên và tính chỉ số BMI', () => {
    it('hiển thị lời chào sau khi gửi tên', () => {
        cy.visit('http://localhost:3000');
        cy.get('#name').type('John');
        cy.get('button').contains('Gửi tên').click();
        cy.get('#nameResponse').should('contain', 'Xin chào, John!');
        cy.get('#bmiResult', { timeout: 15000 }).should('contain', 'Bình thường');

    });

    it('tính và hiển thị chỉ số BMI', () => {
        cy.visit('http://localhost:3000');
        cy.get('#weight').type('60');
        cy.get('#height').type('165');
        cy.get('button').contains('Tính BMI').click();
        cy.get('#bmiResult').should('contain', 'Bình thường');
    });
});
  