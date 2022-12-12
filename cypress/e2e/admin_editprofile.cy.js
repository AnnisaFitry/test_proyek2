describe('Cek Fungsi Edit Profile Admin', () => {
    it('Edit Profile Admin - Mengisi dengan benar', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/user/1/edit')
        cy.get('input[id="name"]').clear()
        cy.get('input[id="name"]').type("Admin SMK MA'ARIF BATU")
        cy.get('.uploads').selectFile({
            contents: Cypress.Buffer.from("file contents"),
            fileName: "file.png",
            lastModified: Date.now(),
        });
        cy.get('#password').type("admin123")
        cy.get('#confirm_password').type("admin123")
        cy.get('button[type="submit"]').click()
    });
    it('Edit Profile Admin - Mengganti gambar dengan format lain', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/user/1/edit')
        cy.get('input[id="name"]').clear()
        cy.get('input[id="name"]').type("Admin SMK MA'ARIF BATU")
        cy.get(".uploads").selectFile({
            contents: Cypress.Buffer.from("file contents"),
            fileName: "file.pdf",
            lastModified: Date.now(),
          });
        cy.get('#password').type("admin123")
        cy.get('#confirm_password').type("admin123")
        cy.get('button[type="submit"]').click()
    });
    it('Edit Profile Admin - Kosongkan nama', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/user/1/edit')
        cy.get('input[id="name"]').clear()
        cy.get('.uploads').selectFile({
          contents: Cypress.Buffer.from("file contents"),
          fileName: "file.png",
          lastModified: Date.now(),
        });
        cy.get('#password').type("admin123")
        cy.get('#confirm_password').type("admin123")
        cy.get('button[type="submit"]').click()
    });
    it('Edit Profile Admin - Kosongkan Password', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/user/1/edit')
        cy.get('input[id="name"]').clear()
        cy.get('input[id="name"]').type("Admin SMK MA'ARIF BATU")
        cy.get('.uploads').selectFile({
          contents: Cypress.Buffer.from("file contents"),
          fileName: "file.png",
          lastModified: Date.now(),
        });
        cy.get('button[type="submit"]').click()
    });
    it('Edit Profile Admin - Tanpa mengisi gambar', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/user/1/edit')
        cy.get('input[id="name"]').clear()
        cy.get('input[id="name"]').type("Admin SMK MA'ARIF BATU")
        cy.get('#password').type("admin123")
        cy.get('#confirm_password').type("admin123")
        cy.get('button[type="submit"]').click()
    });
    it('Edit Profile Admin - Kosongkan Semua', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/user/1/edit')
        cy.get('input[id="name"]').clear()
        cy.get('button[type="submit"]').click()
    });
})