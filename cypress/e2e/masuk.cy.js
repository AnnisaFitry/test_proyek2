describe('Cek Fungsi Login', () => {
  //Pustakawan
  it('Login Admin - Mengisi username dan password dengan benar', () => {
    cy.visit('http://127.0.0.1:8000')
    cy.get('input[id="email"]').type("adminsmk")
    cy.get('input[id="password"]').type("admin123")
    cy.get('button[type="submit"]').click()
  });
  it('Login Admin - Mengisi username dengan salah dan password dengan benar', () => {
    cy.visit('http://127.0.0.1:8000')
    cy.get('input[id="email"]').type("admin")
    cy.get('input[id="password"]').type("admin123")
    cy.get('button[type="submit"]').click()
  });
  it('Login Admin - Mengisi password saja', () => {
    cy.visit('http://127.0.0.1:8000')
    cy.get('input[id="password"]').type("admin123")
    cy.get('button[type="submit"]').click()
  });
  it('Login Admin - Mengisi username dengan benar dan password dengan salah', () => {
    cy.visit('http://127.0.0.1:8000')
    cy.get('input[id="email"]').type("admin")
    cy.get('input[id="password"]').type("adminadmin")
    cy.get('button[type="submit"]').click()
  });
  it('Login Admin - Mengisi username saja', () => {
    cy.visit('http://127.0.0.1:8000')
    cy.get('input[id="email"]').type("admin")
    cy.get('button[type="submit"]').click()
  });
  it('Login Admin - Tidak mengisi username dan password', () => {
    cy.visit('http://127.0.0.1:8000')
    cy.get('button[type="submit"]').click()
  });

  //Anggota
  it('Login Anggota - Mengisi username dan password dengan benar', () => {
    cy.visit('http://127.0.0.1:8000')
    cy.get('input[id="email"]').type("cyntiapd")
    cy.get('input[id="password"]').type("user123")
    cy.get('button[type="submit"]').click()
  });
  it('Login Anggota - Mengisi username dengan salah dan password dengan benar', () => {
    cy.visit('http://127.0.0.1:8000')
    cy.get('input[id="email"]').type("cyntia")
    cy.get('input[id="password"]').type("user123")
    cy.get('button[type="submit"]').click()
  });
  it('Login Anggota - Mengisi password saja', () => {
    cy.visit('http://127.0.0.1:8000')
    cy.get('input[id="password"]').type("user123")
    cy.get('button[type="submit"]').click()
  });
  it('Login Anggota - Mengisi username dengan benar dan password dengan salah', () => {
    cy.visit('http://127.0.0.1:8000')
    cy.get('input[id="email"]').type("cyntiapd")
    cy.get('input[id="password"]').type("useruser")
    cy.get('button[type="submit"]').click()
  });
  it('Login Anggota - Mengisi username saja', () => {
    cy.visit('http://127.0.0.1:8000')
    cy.get('input[id="email"]').type("cyntiapd")
    cy.get('button[type="submit"]').click()
  });
  it('Login Anggota - Tidak mengisi username dan password', () => {
    cy.visit('http://127.0.0.1:8000')
    cy.get('button[type="submit"]').click()
  });
})