describe('Cek Fungsi Transaksi Anggota', () => {
  //Anggota
  it('Transaksi Anggota - Tambah Transaksi dengan Benar', () => {
    cy.visit('http://127.0.0.1:8000')
    cy.get('input[id="email"]').type("cyntiapd")
    cy.get('input[id="password"]').type("user123")
    cy.get('button[type="submit"]').click()
    cy.visit('http://127.0.0.1:8000/transaksi')
    cy.visit('http://127.0.0.1:8000/transaksi/create')
    cy.get('input[id="tgl_pinjam"]').type("2022-12-20")
    cy.get('input[id="tgl_kembali"]').type("2023-12-06")
    cy.get('button[data-target="#myModal"]').should('be.visible')
    cy.get('[data-buku_id="58"]').click({force:true})
    cy.get('input[name="ket"]').type("Kode Buku : 123D")
    cy.get('button[id="submit"]').click()
  });
  it('Transaksi Anggota - Tambah Transaksi tanpa keterangan', () => {
    cy.visit('http://127.0.0.1:8000')
    cy.get('input[id="email"]').type("cyntiapd")
    cy.get('input[id="password"]').type("user123")
    cy.get('button[type="submit"]').click()
    cy.visit('http://127.0.0.1:8000/transaksi')
    cy.visit('http://127.0.0.1:8000/transaksi/create')
    cy.get('input[id="tgl_pinjam"]').type("2022-12-20")
    cy.get('input[id="tgl_kembali"]').type("2023-12-06")
    cy.get('button[data-target="#myModal"]').should('be.visible')
    cy.get('[data-buku_id="59"]').click({force:true})
    cy.get('button[id="submit"]').click()
  });
  it('Transaksi Anggota - Tambah Transaksi tanpa cari buku', () => {
    cy.visit('http://127.0.0.1:8000')
    cy.get('input[id="email"]').type("cyntiapd")
    cy.get('input[id="password"]').type("user123")
    cy.get('button[type="submit"]').click()
    cy.visit('http://127.0.0.1:8000/transaksi')
    cy.visit('http://127.0.0.1:8000/transaksi/create')
    cy.get('input[id="tgl_pinjam"]').type("2022-12-20")
    cy.get('input[id="tgl_kembali"]').type("2023-12-06")
    cy.get('input[name="ket"]').type("Buku paket untuk 1 tahun")
    cy.get('button[id="submit"]').click()
  });
  it('Transaksi Anggota - Tambah Transaksi tanpa cari buku dan keterangan', () => {
    cy.visit('http://127.0.0.1:8000')
    cy.get('input[id="email"]').type("cyntiapd")
    cy.get('input[id="password"]').type("user123")
    cy.get('button[type="submit"]').click()
    cy.visit('http://127.0.0.1:8000/transaksi')
    cy.visit('http://127.0.0.1:8000/transaksi/create')
    cy.get('input[id="tgl_pinjam"]').type("2022-12-20")
    cy.get('input[id="tgl_kembali"]').type("2023-12-06")
    cy.get('button[id="submit"]').click()
  });
  it('Transaksi Anggota - Detail Transaksi', () => {
    cy.visit('http://127.0.0.1:8000')
    cy.get('input[id="email"]').type("cyntiapd")
    cy.get('input[id="password"]').type("user123")
    cy.get('button[type="submit"]').click()
    cy.visit('http://127.0.0.1:8000/transaksi')
    cy.visit('http://127.0.0.1:8000/transaksi/1')
  });
})