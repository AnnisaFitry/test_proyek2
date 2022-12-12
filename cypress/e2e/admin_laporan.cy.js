describe('Cek Fungsi Laporan Admin', () => {
    //Laporan Transaksi
    it('Export PDF laporan transaksi untuk semua transaksi', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/laporan/trs')
        cy.get('a[href="http://127.0.0.1:8000/laporan/trs/pdf"]').click()
    });
    it('Export PDF laporan transaksi untuk laporan pinjam saja', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/laporan/trs')
        cy.get('a[href="http://127.0.0.1:8000/laporan/trs/pdf?status=pinjam"]').click()
    });
    it('Export PDF laporan transaksi untuk laporan kembali saja', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/laporan/trs')
        cy.get('a[href="http://127.0.0.1:8000/laporan/trs/pdf?status=kembali"]').click()
    });
    it('Export Excel laporan transaksi untuk semua transaksi', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/laporan/trs')
        cy.get('a[href="http://127.0.0.1:8000/laporan/trs/excel"]').click()
    });
    it('Export Excel laporan transaksi untuk laporan pinjam saja', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/laporan/trs')
        cy.get('a[href="http://127.0.0.1:8000/laporan/trs/excel?status=pinjam"]').click()
    });
    it('Export Excel laporan transaksi untuk laporan kembali saja', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/laporan/trs')
        cy.get('a[href="http://127.0.0.1:8000/laporan/trs/excel?status=kembali"]').click()
    });
    //Laporan Buku
    it('Export PDF laporan buku', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/laporan/buku')
        cy.get('a[class="btn btn-primary btn-rounded btn-fw">]').click()
    });
    it('Export Excel laporan buku', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/laporan/buku')
        cy.get('a[class="btn btn-success btn-rounded btn-fw"]').click()
    });
});