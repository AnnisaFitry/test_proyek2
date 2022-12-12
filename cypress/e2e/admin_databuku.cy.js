describe('Cek Fungsi Data Buku', () => {
    it('Tambah Buku Admin - Mengisi dengan benar', () => {
      cy.visit('http://127.0.0.1:8000')
      cy.get('input[id="email"]').type("adminsmk")
      cy.get('input[id="password"]').type("admin123")
      cy.get('button[type="submit"]').click()
      cy.visit('http://127.0.0.1:8000/buku')
      cy.visit('http://127.0.0.1:8000/buku/create')
      cy.get('#judul').type("Test 1")
      cy.get('#isbn').type("-")
      cy.get('#pengarang').type("-")
      cy.get('#penerbit').type("-")
      cy.get('#tahun_terbit').type("2000")
      cy.get('#jumlah_buku').type("1")
      cy.get('#deskripsi').type("...")
      cy.get('select[name="lokasi"]').select('rak1')
      cy.get('.uploads').selectFile({
        contents: Cypress.Buffer.from("file contents"),
        fileName: "file.png",
        lastModified: Date.now(),
      });
      //cy.get('button[id="submit"]').click()
    });
    it('Tambah Buku Admin - Mengisi dengan format cover selain gambar', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/buku')
        cy.visit('http://127.0.0.1:8000/buku/create')
        cy.get('#judul').type("Test 3")
        cy.get('#isbn').type("-")
        cy.get('#pengarang').type("-")
        cy.get('#penerbit').type("-")
        cy.get('#tahun_terbit').type("2000")
        cy.get('#jumlah_buku').type("3")
        cy.get('#deskripsi').type("...")
        cy.get('select[name="lokasi"]').select('rak1')
        cy.get('.uploads').selectFile({
          contents: Cypress.Buffer.from("file contents"),
          fileName: "file.pdf",
          lastModified: Date.now(),
        });
        //cy.get('button[id="submit"]').click()
      });
    it('Tambah Buku Admin - Mengisi tanpa judul', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/buku')
        cy.visit('http://127.0.0.1:8000/buku/create')
        cy.get('#isbn').type("-")
        cy.get('#pengarang').type("-")
        cy.get('#penerbit').type("-")
        cy.get('#tahun_terbit').type("2000")
        cy.get('#jumlah_buku').type("1")
        cy.get('#deskripsi').type("...")
        cy.get('select[name="lokasi"]').select('rak1')
        cy.get('.uploads').selectFile({
          contents: Cypress.Buffer.from("file contents"),
          fileName: "file.png",
          lastModified: Date.now(),
        });
        cy.get('button[id="submit"]').click()
    });
    it('Tambah Buku Admin - Mengisi tanpa jumlah buku', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/buku')
        cy.visit('http://127.0.0.1:8000/buku/create')
        cy.get('#judul').type("Testing")
        cy.get('#isbn').type("-")
        cy.get('#pengarang').type("-")
        cy.get('#penerbit').type("-")
        cy.get('#tahun_terbit').type("2000")
        cy.get('#deskripsi').type("...")
        cy.get('select[name="lokasi"]').select('rak1')
        cy.get('.uploads').selectFile({
          contents: Cypress.Buffer.from("file contents"),
          fileName: "file.png",
          lastModified: Date.now(),
        });
        cy.get('button[id="submit"]').click()
      });
    it('Tambah Buku Admin - Mengisi tanpa lokasi', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/buku')
        cy.visit('http://127.0.0.1:8000/buku/create')
        cy.get('#judul').type("Test 1")
        cy.get('#isbn').type("-")
        cy.get('#pengarang').type("-")
        cy.get('#penerbit').type("-")
        cy.get('#tahun_terbit').type("2000")
        cy.get('#jumlah_buku').type("1")
        cy.get('#deskripsi').type("...")
        cy.get('.uploads').selectFile({
          contents: Cypress.Buffer.from("file contents"),
          fileName: "file.png",
          lastModified: Date.now(),
        });
        cy.get('button[id="submit"]').click()
      });
    it('Tambah Buku Admin - Mengisi semua kecuali cover dan deskripsi', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/buku')
        cy.visit('http://127.0.0.1:8000/buku/create')
        cy.get('#judul').type("Test 2")
        cy.get('#isbn').type("-")
        cy.get('#pengarang').type("-")
        cy.get('#penerbit').type("-")
        cy.get('#tahun_terbit').type("2000")
        cy.get('#jumlah_buku').type("2")
        cy.get('select[name="lokasi"]').select('rak1')
        //cy.get('button[id="submit"]').click()
    });
    it('Detail Buku Admin', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/buku')
        cy.visit('http://127.0.0.1:8000/buku/4')
    });
    it('Update Buku Admin denagn benar - Menganti semua kecuali cover dan deskripsi', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/buku')
        cy.visit('http://127.0.0.1:8000/buku/62/edit')
        cy.get('#judul').clear()
        cy.get('#judul').type("Test 4")
        cy.get('#isbn').clear()
        cy.get('#isbn').type("9823983")
        cy.get('#pengarang').clear()
        cy.get('#pengarang').type("test")
        cy.get('#penerbit').clear()
        cy.get('#penerbit').type("test")
        cy.get('#tahun_terbit').clear()
        cy.get('#tahun_terbit').type("2022")
        cy.get('#jumlah_buku').clear()
        cy.get('#jumlah_buku').type("4")
        cy.get('select[name="lokasi"]').select('rak2')
        //cy.get('button[id="submit"]').click()
    });
    it('Update Buku Admin dengan salah - Mengosongkan isbn', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/buku')
        cy.visit('http://127.0.0.1:8000/buku/62/edit')
        cy.get('#isbn').clear()
        cy.get('button[id="submit"]').click()
    });
    it('Delete Buku Admin', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/buku')
        //cy.visit('http://127.0.0.1:8000/buku/62/delete')
    });
})