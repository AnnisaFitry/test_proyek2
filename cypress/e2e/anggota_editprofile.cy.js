describe('Cek Fungsi Edit Profile Anggota', () => {
    it('Edit Profile Anggota - Mengisi dengan benar', () => {
      cy.visit('http://127.0.0.1:8000')
      cy.get('input[id="email"]').type("cyntiapd")
      cy.get('input[id="password"]').type("user123")
      cy.get('button[type="submit"]').click()
      cy.visit('http://127.0.0.1:8000/user/2/edit')
      cy.get('input[id="name"]').clear()
      cy.get('input[id="name"]').type("Cyntia Puspa Dewi Ratna")
      cy.get('.uploads').selectFile({
        contents: Cypress.Buffer.from("file contents"),
        fileName: "file.png",
        lastModified: Date.now(),
      });
      cy.get('button[type="submit"]').click()
    });
    it('Edit Profile Anggota - Mengganti gambar dengan format lain', () => {
      cy.visit('http://127.0.0.1:8000')
      cy.get('input[id="email"]').type("cyntiapd")
      cy.get('input[id="password"]').type("user123")
      cy.get('button[type="submit"]').click()
      cy.visit('http://127.0.0.1:8000/user/2/edit')
      cy.get('input[id="name"]').clear()
      cy.get('input[id="name"]').type("Cyntia Puspa Dewi Ratna")
      cy.get(".uploads").selectFile({
          contents: Cypress.Buffer.from("file contents"),
          fileName: "file.pdf",
          lastModified: Date.now(),
        });
      cy.get('button[type="submit"]').click()
    });
    it('Edit Profile Anggota - Kosongkan nama', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("cyntiapd")
        cy.get('input[id="password"]').type("user123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/user/2/edit')
        cy.get('input[id="name"]').clear()
        cy.get('.uploads').selectFile({
          contents: Cypress.Buffer.from("file contents"),
          fileName: "file.png",
          lastModified: Date.now(),
        });
        cy.get('button[type="submit"]').click()
    });
    it('Edit Profile Anggota - Tanpa mengisi gambar', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("cyntiapd")
        cy.get('input[id="password"]').type("user123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/user/2/edit')
        cy.get('input[id="name"]').clear()
        cy.get('input[id="name"]').type("Cyntia Puspa Dewi Ratna")
        cy.get('button[type="submit"]').click()
    });
    it('Edit Profile Anggota - Kosongkan semua', () => {
      cy.visit('http://127.0.0.1:8000')
      cy.get('input[id="email"]').type("cyntiapd")
      cy.get('input[id="password"]').type("user123")
      cy.get('button[type="submit"]').click()
      cy.visit('http://127.0.0.1:8000/user/2/edit')
      cy.get('input[id="name"]').clear()
      cy.get('button[type="submit"]').click()
    });
  })