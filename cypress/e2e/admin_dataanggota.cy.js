describe('Cek Fungsi Data Anggota', () => {
    it('Tambah Anggota dengan benar', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/anggota')
        cy.visit('http://127.0.0.1:8000/anggota/create')
        cy.get('#nama').type("Darma Prakasa Arjuna")
        cy.get('#nisn').type("349890384")
        cy.get('#tempat_lahir').type("Malang")
        cy.get('input[name="tgl_lahir"]').type('2001-02-23')
        cy.get('select[name="jk"]').select('L')
        cy.get('select[name="kelas"]').select('10')
        cy.get('select[name="user_id"]').select('5')
        //cy.get('button[id="submit"]').click()
    });
    it('Tambah Anggota dengan salah yaitu tidak mengisi satu atau lebih fill', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/anggota')
        cy.visit('http://127.0.0.1:8000/anggota/create')
        cy.get('#nama').type("Darma Prakasa Arjuna")
        cy.get('#nisn').type("349890384")
        cy.get('#tempat_lahir').type("Malang")
        cy.get('input[name="tgl_lahir"]').type('2001-02-23')
        // Contoh tidak diisi:
        // cy.get('select[name="jk"]').select('L')
        // cy.get('select[name="kelas"]').select('10')
        // cy.get('select[name="user_id"]').select('5')
        cy.get('button[id="submit"]').click()
    });
    it('Tambah Anggota dengan salah yaitu mengisi nisn dengan format salah', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/anggota')
        cy.visit('http://127.0.0.1:8000/anggota/create')
        cy.get('#nama').type("Darma Prakasa Arjuna")
        cy.get('#nisn').type("darmadarma") //format huruf
        cy.get('#tempat_lahir').type("Malang")
        cy.get('input[name="tgl_lahir"]').type('2001-02-23')
        cy.get('select[name="jk"]').select('L')
        cy.get('select[name="kelas"]').select('10')
        cy.get('select[name="user_id"]').select('5')
        cy.get('button[id="submit"]').click()
    });
    it('Detail Anggota', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/anggota')
        cy.visit('http://127.0.0.1:8000/anggota/3/edit')
    });
    it('Update Anggota dengan benar yaitu mengganti nisn dan tempat lahir saja', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/anggota')
        cy.visit('http://127.0.0.1:8000/anggota/3/edit')
        cy.get('#nisn').clear()
        cy.get('#nisn').type("9834099308") 
        cy.get('#tempat_lahir').clear()
        cy.get('#tempat_lahir').type("Batu")
        //cy.get('button[id="submit"]').click()
    });
    it('Update Anggota dengan salah yaitu mengosongkan nisn', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/anggota')
        cy.visit('http://127.0.0.1:8000/anggota/3/edit')
        cy.get('#nisn').clear()
        cy.get('button[id="submit"]').click()
    });
    it('Update Anggota dengan salah yaitu mengosongkan nisn', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/anggota')
        cy.visit('http://127.0.0.1:8000/anggota/3/edit')
        cy.get('#nisn').clear()
        cy.get('button[id="submit"]').click()
    });
    it('Delete Anggota', () => {
        cy.visit('http://127.0.0.1:8000')
        cy.get('input[id="email"]').type("adminsmk")
        cy.get('input[id="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.visit('http://127.0.0.1:8000/anggota')
    });
});