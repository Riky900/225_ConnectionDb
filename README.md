# 225_ConnectionDb

Program Express.js yang terhubung ke database PostgreSQL `mahasiswa` (tabel `biodata`) dan menyediakan endpoint GET untuk mengambil data.

## Struktur tabel biodata
| Kolom | Tipe | Keterangan |
|-------|------|------------|
| id | SERIAL | Primary key |
| nama | VARCHAR(100) | Nama mahasiswa |
| nim | VARCHAR(20) | NIM (unik) |
| kelas | VARCHAR(20) | Kelas |

## Cara menjalankan
1. npm install
2. Buat database dan tabel memakai schema.sql
3. Salin .env.example menjadi .env, lalu sesuaikan isinya
4. npm start

## Endpoint
| Method | URL | Fungsi |
|--------|-----|--------|
| GET | / | Cek server |
| GET | /biodata | Ambil semua data biodata |
| GET | /biodata/:id | Ambil satu data berdasarkan id |

## Hasil GET /biodata
![Hasil GET biodata](screenshots/get-biodata.png)
