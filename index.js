require('dotenv').config();
const express = require('express');
const pool = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Cek server berjalan
app.get('/', (req, res) => {
  res.json({ message: 'Server Express berjalan. Coba GET /biodata' });
});

// GET semua data biodata
app.get('/biodata', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM biodata ORDER BY id ASC');
    res.json({ success: true, data: result.rows });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, message: 'Gagal mengambil data' });
  }
});

// GET satu data biodata berdasarkan id
app.get('/biodata/:id', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM biodata WHERE id = $1', [req.params.id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ success: false, message: 'Data tidak ditemukan' });
    }
    res.json({ success: true, data: result.rows[0] });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, message: 'Gagal mengambil data' });
  }
});

// Tes koneksi database saat server start
pool.query('SELECT NOW()')
  .then(() => console.log('Terhubung ke database PostgreSQL'))
  .catch((err) => console.error('Gagal terhubung ke database:', err.message));

app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));
