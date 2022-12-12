describe('Cek Fungsi Search', () => {
    //Pustakawan
    it('Cari Halaman Dashboard Admin berdasarkan buku', () => {
      cy.visit('http://127.0.0.1:8000')
      cy.get('input[id="email"]').type("adminsmk")
      cy.get('input[id="password"]').type("admin123")
      cy.get('button[type="submit"]').click()
      cy.get('#table_filter > label > .form-control').type("desain")
    });
    it('Cari Halaman Dashboard Admin berdasarkan anggota', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.get('#table_filter > label > .form-control').type("alfian")
    });
    it('Cari Halaman Dashboard Admin berdasarkan buku yang tidak ada', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.get('#table_filter > label > .form-control').type("mawar")
      });
    it('Cari Halaman Dashboard Admin berdasarkan anggota yang tidak ada', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.get('#table_filter > label > .form-control').type("admin")
    });
    it('Cari Halaman Data User Admin berdasarkan user yang ada', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/user')
        cy.get('#table_filter > label > .form-control').type("admin")
    });
    it('Cari Halaman Data User Admin berdasarkan user yang tidak ada', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/user')
        cy.get('#table_filter > label > .form-control').type("annisa")
    });
    it('Cari Halaman Data Anggota Admin berdasarkan anggota yang ada', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/anggota')
        cy.get('#table_filter > label > .form-control').type("alfian")
    });
    it('Cari Halaman Data Anggota Admin berdasarkan anggota yang tidak ada', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/anggota')
        cy.get('#table_filter > label > .form-control').type("rofika")
    });
    it('Cari Halaman Data Buku Admin berdasarkan buku yang ada', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/buku')
        cy.get('#table_filter > label > .form-control').type("matematika")
    });
    it('Cari Halaman Data Buku Admin berdasarkan buku yang tidak ada', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/buku')
        cy.get('#table_filter > label > .form-control').type("lingkungan")
    });
    it('Cari Halaman Transaksi Admin berdasarkan buku', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/transaksi')
        cy.get('#table_filter > label > .form-control').type("desain")
      });
    it('Cari Halaman Transaksi Admin berdasarkan anggota', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/transaksi')
        cy.get('#table_filter > label > .form-control').type("alfian")
    });

    //Anggota
    it('Cari Transaksi Anggota yang ada', () => {
      cy.visit('http://127.0.0.1:8000')
      cy.get('input[id="email"]').type("cyntiapd")
      cy.get('input[id="password"]').type("user123")
      cy.get('button[type="submit"]').click()
      cy.visit('http://127.0.0.1:8000/transaksi')
      cy.get('#table_filter > label > .form-control').type("desain")
    });
    it('Cari Transaksi Anggota yang tidak ada', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("cyntiapd")
        cy.get('input[id="password"]').type("user123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/transaksi')
        cy.get('#table_filter > label > .form-control').type("hukum")
    });
  })