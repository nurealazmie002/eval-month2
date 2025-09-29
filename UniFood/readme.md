link repo:https://github.com/nurealazmie002/eval-month2
link vercel: https://eval-month2-yhsk.vercel.app/
link slide: https://www.canva.com/design/DAG0Tx9CZ34/ATCYTiNF00pC9rqbMxH_MA/edit?utm_content=DAG0Tx9CZ34&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
link video: https://youtu.be/Q2MPeqLYJL4


# UniFood Web App

UniFood adalah sebuah web aplikasi sederhana yang menampilkan daftar makanan dari API **TheMealDB**. Aplikasi ini juga memiliki fitur login dan registrasi sederhana menggunakan **LocalStorage** untuk menyimpan data pengguna.

---

## Fitur

1. **Halaman Login dan Registrasi**
   - Pengguna dapat mendaftar dengan username dan password.
   - Login menggunakan akun yang sudah terdaftar.
   - Fitur logout dan hapus akun.
   - Form login dan registrasi berganti secara interaktif.

2. **Daftar Menu Masakan**
   - Menampilkan daftar makanan dari API TheMealDB.
   - Menampilkan informasi:
     - Nama makanan
     - Gambar makanan
     - Asal (Area)
     - Kategori
     - Bahan-bahan
     - Cara memasak
   - Fitur pencarian makanan secara real-time.

3. **Responsif**
   - Tampilan menyesuaikan ukuran layar, dapat digunakan di desktop maupun mobile.

---

## Teknologi yang Digunakan

- **HTML5** – Struktur halaman web.
- **CSS3** – Styling halaman.
  - `styleLogin.css` untuk halaman login/registrasi
  - `styleList.css` untuk halaman daftar makanan
- **JavaScript (ES6 Modules)** – Interaktivitas dan logika aplikasi.
  - `login.js` – Mengatur login, registrasi, dan logout menggunakan LocalStorage.
  - `main.js` – Mengambil data makanan dari API dan mengatur pencarian.
  - `api.js` – Fungsi fetch data dari TheMealDB.
  - `ui.js` – Fungsi untuk merender daftar makanan dan menampilkan error.
- **LocalStorage** – Menyimpan data pengguna secara lokal.
- **API** – [TheMealDB](https://www.themealdb.com/api.php) untuk data makanan.

---

## Cara Menjalankan

1. Clone atau download repository ini.
2. Buka `index.html` di browser.
3. Daftar akun baru atau login dengan akun yang sudah ada.
4. Setelah login, pengguna akan diarahkan ke halaman daftar makanan (`foodList.html`).
5. Gunakan kolom pencarian untuk mencari makanan yang diinginkan.

---

## Catatan

- Data pengguna disimpan secara lokal di browser menggunakan **LocalStorage**.
- Data makanan diambil langsung dari API **TheMealDB**.
- Aplikasi ini bersifat front-end only, tanpa backend server.

