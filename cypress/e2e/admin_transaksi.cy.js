describe('Cek Fungsi Transaksi Admin', () => {
    it('Tambah Transaksi dengan benar', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/transaksi')
        cy.visit('http://127.0.0.1:8000/transaksi/create')
        cy.get('input[id="tgl_pinjam"]').type("2022-12-20")
        cy.get('input[id="tgl_kembali"]').type("2023-12-06")
        cy.get('button[data-target="#myModal"]').should('be.visible')
        cy.get('[data-buku_id="50"]').click({force:true})
        cy.get('button[data-target="#myModal2"]').should('be.visible')
        cy.get('[data-anggota_id="3"]').click({force:true})
        cy.get('input[name="ket"]').type("Kode Buku : 123D")
        cy.get('button[id="submit"]').click()
    });
    it('Tambah Transaksi dengan salah, tanpa cari buku dan anggota', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/transaksi')
        cy.visit('http://127.0.0.1:8000/transaksi/create')
        cy.get('input[id="tgl_pinjam"]').type("2022-12-20")
        cy.get('input[id="tgl_kembali"]').type("2023-12-06")
        cy.get('input[name="ket"]').type("...")
        cy.get('button[id="submit"]').click()
    });
    it('Detail Transaksi', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/transaksi')
        cy.visit('http://127.0.0.1:8000/transaksi/9')
      });
    it('Update status pengembalian Buku', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/transaksi')
        cy.get(':nth-child(2) > :nth-child(7) > .btn-group > .dropdown-menu > [enctype="multipart/form-data"] > .dropdown-item').click()
    });
    it('Delete Transaksi', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/transaksi')
        cy.get(':nth-child(1) > :nth-child(7) > .btn-group > .dropdown-menu > .pull-left > .dropdown-item').click()
    });
});