# Perhitungan Checkout Belanja

Program JavaScript sederhana untuk menghitung total belanja, diskon member, dan ongkos kirim.

## Aturan Program

| Kondisi | Hasil |
|---|---|
| Harga atau jumlah item tidak valid | Input ditandai tidak valid |
| Member aktif | Mendapat diskon 10% dari total belanja |
| Member tidak aktif | Tidak mendapat diskon |
| Subtotal kurang dari Rp250.000 | Ditambah ongkir Rp15.000 |
| Subtotal Rp250.000 atau lebih | Gratis ongkir |

Rumus yang digunakan:

```text
total = hargaBarang * item
diskon = total * 10%
subtotal = member ? total - diskon : total
totalBayar = subtotal < 250000 ? subtotal + 15000 : subtotal
```

## Cara Menjalankan

Pastikan Node.js sudah terpasang, kemudian jalankan perintah berikut dari folder proyek:

```powershell
node checkout.js
```

## Mengubah Skenario

Ubah nilai `hargaBarang`, `item`, dan `member` pada bagian atas [checkout.js](checkout.js).

```javascript
const hargaBarang = 280000;
const item = 2;
const member = true;
```

Empat skenario awal juga sudah disiapkan sebagai contoh pada [checkout.js](checkout.js).

## Contoh Output

Untuk `hargaBarang = 280000`, `item = 2`, dan `member = true`:

```text
------------input valid--------------
harga barang ------------------------- 280000
banyak item yang di beli ------------- 2
total belanjaan ---------------------- 560000
Member Aktif---------------Dapat Diskon 56000
harga yang harus di bayar ------------ 504000
yang sudah di bayar termasuk ongkir--- 504000
-------Terimakasi sudah belanja di sini------
```

## Struktur File

- [checkout.js](checkout.js) - Implementasi perhitungan checkout
- [analysis.md](analysis.md) - Analisis input, proses, output, dan pola permasalahan
- [psudocode-pm-java.txt](psudocode-pm-java.txt) - Pseudocode program
- [flowChart-PM-Java.drawio](flowChart-PM-Java.drawio) - Diagram alur program
- [testing.md](testing.md) - Skenario pengujian aplikasi
