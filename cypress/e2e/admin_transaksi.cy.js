describe('Cek Fungsi Transaksi Admin', () => {
    it('Tambah Transaksi dengan benar', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("cyntiapd")
        cy.get('input[id="password"]').type("user123")
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
        //cy.get('button[id="submit"]').click()
    });
    it('Tambah Transaksi dengan salah, tanpa cari buku dan anggota', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("cyntiapd")
        cy.get('input[id="password"]').type("user123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/transaksi')
        cy.visit('http://127.0.0.1:8000/transaksi/create')
        cy.get('input[id="tgl_pinjam"]').type("2022-12-20")
        cy.get('input[id="tgl_kembali"]').type("2023-12-06")
        cy.get('input[name="ket"]').type("...")
        cy.get('button[id="submit"]').click()
    });
    it('Update status pengembalian Buku', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("cyntiapd")
        cy.get('input[id="password"]').type("user123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/transaksi')
    });
    it('Delete Trnasaksi', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("cyntiapd")
        cy.get('input[id="password"]').type("user123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/transaksi')
    });
});