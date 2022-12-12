describe('Cek Fungsi Data User', () => {
    it('Tambah User dengan benar', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/user')
        cy.visit('http://127.0.0.1:8000/user/create')
        cy.get('#name').type("Gilang Pratama")
        cy.get('#username').type("gilang")
        cy.get('#email').type("gilang@gmail.com")
        cy.get('.uploads').selectFile({
            contents: Cypress.Buffer.from("file contents"),
            fileName: "file.png",
            lastModified: Date.now(),
        });
        cy.get('select[name="level"]').select('user')
        cy.get('#password').type("user123")
        cy.get('#confirm_password').type("user123")
        //cy.get('#submit').click()
    });
    it('Tambah User dengan format profile selain gambar', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/user')
        cy.visit('http://127.0.0.1:8000/user/create')
        cy.get('#name').type("Rini Lestari")
        cy.get('#username').type("lestari")
        cy.get('#email').type("lestari@gmail.com")
        cy.get('.uploads').selectFile({
            contents: Cypress.Buffer.from("file contents"),
            fileName: "file.pdf",
            lastModified: Date.now(),
        });
        cy.get('select[name="level"]').select('user')
        cy.get('#password').type("user123")
        cy.get('#confirm_password').type("user123")
        //cy.get('#submit').click()
    });
    it('Tambah User tanpa username', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/user')
        cy.visit('http://127.0.0.1:8000/user/create')
        cy.get('#name').type("Gilang Pratama")
        cy.get('#email').type("gilang@gmail.com")
        cy.get('.uploads').selectFile({
            contents: Cypress.Buffer.from("file contents"),
            fileName: "file.png",
            lastModified: Date.now(),
        });
        cy.get('select[name="level"]').select('user')
        cy.get('#password').type("user123")
        cy.get('#confirm_password').type("user123")
        cy.get('#submit').click()
    });
    it('Tambah User tanpa password', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/user')
        cy.visit('http://127.0.0.1:8000/user/create')
        cy.get('#name').type("Gilang Pratama")
        cy.get('#username').type("gilang")
        cy.get('#email').type("gilang@gmail.com")
        cy.get('.uploads').selectFile({
            contents: Cypress.Buffer.from("file contents"),
            fileName: "file.png",
            lastModified: Date.now(),
        });
        cy.get('select[name="level"]').select('user')
        cy.get('#submit').click()
    });
    it('Tambah User dengan format email yang salah', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/user')
        cy.visit('http://127.0.0.1:8000/user/create')
        cy.get('#name').type("Gilang Pratama")
        cy.get('#username').type("gilang")
        cy.get('#email').type("gilangpra")
        cy.get('.uploads').selectFile({
            contents: Cypress.Buffer.from("file contents"),
            fileName: "file.png",
            lastModified: Date.now(),
        });
        cy.get('select[name="level"]').select('user')
        cy.get('#password').type("user123")
        cy.get('#confirm_password').type("user123")
        cy.get('#submit').click()
    });
    it('Tambah User tanpa level', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/user')
        cy.visit('http://127.0.0.1:8000/user/create')
        cy.get('#name').type("Gilang Pratama")
        cy.get('#username').type("gilang")
        cy.get('#email').type("gilangpra")
        cy.get('.uploads').selectFile({
            contents: Cypress.Buffer.from("file contents"),
            fileName: "file.png",
            lastModified: Date.now(),
        });
        cy.get('#password').type("user123")
        cy.get('#confirm_password').type("user123")
        cy.get('#submit').click()
    });
    it('Tambah User tanpa profile dan dengan level admin', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/user')
        cy.visit('http://127.0.0.1:8000/user/create')
        cy.get('#name').type("Emy Khuriyah")
        cy.get('#username').type("emykh")
        cy.get('#email').type("emykh@gmail.com")
        cy.get('select[name="level"]').select('admin')
        cy.get('#password').type("user123")
        cy.get('#confirm_password').type("user123")
        //cy.get('#submit').click()
    });
    it('Detail User', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/user')
        cy.visit('http://127.0.0.1:8000/user/4')
    });
    it('Update User pada name saja', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/user')
        cy.visit('http://127.0.0.1:8000/user/5/edit')
        cy.get('#name').clear()
        cy.get('#name').type("Darma Prakasa Arjuna")
        //cy.get('#submit').click()
    });
    it('Update User pada level saja', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/user')
        cy.visit('http://127.0.0.1:8000/user/4/edit')
        cy.get('select[name="level"]').select('admin')
        //cy.get('#submit').click()
    });
    it('Update User pada password saja', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/user')
        cy.visit('http://127.0.0.1:8000/user/7/edit')
        cy.get('#password').type("user123")
        cy.get('#confirm_password').type("user123")
        //cy.get('#submit').click()
    });
    it('Hapus User', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/user')
        //cy.get(':nth-child(5) > :nth-child(5) > .btn-group > .dropdown-menu > .pull-left > .dropdown-item').click({force: true})
    });
});