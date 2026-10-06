CREATE DATABASE mahasiswa;
\c mahasiswa

CREATE TABLE biodata (
  id SERIAL PRIMARY KEY,
  nama VARCHAR(100) NOT NULL,
  nim VARCHAR(20) NOT NULL UNIQUE,
  kelas VARCHAR(20) NOT NULL
);

INSERT INTO biodata (nama, nim, kelas) VALUES
  ('Riky Tri Pamungkas', '20240140225', 'E');
