# Skenario Pengujian Checkout

## Lingkungan Uji

- Runtime: Node.js
- Perintah: `node checkout.js`
- Metode: Ubah nilai `hargaBarang`, `item`, dan `member` pada bagian atas `checkout.js`, kemudian jalankan program dan cocokkan output pada kolom hasil yang diharapkan.
- Harga ongkir: Rp15.000
- Ambang gratis ongkir: Rp250.000

## Daftar Skenario

| No | Skenario | Input | Perhitungan | Hasil yang Diharapkan | Status |
|---:|---|---|---|---|---|
| 1 | Member aktif, subtotal di atas ambang | `hargaBarang=280000`, `item=2`, `member=true` | Total Rp560.000; diskon Rp56.000; subtotal Rp504.000 | Pesan member aktif, diskon Rp56.000, dan total bayar Rp504.000 (gratis ongkir) | Lulus |
| 2 | Member tidak aktif, subtotal di atas ambang | `hargaBarang=280000`, `item=2`, `member=false` | Total Rp560.000; tanpa diskon | Pesan member tidak aktif, tidak ada diskon, dan total bayar Rp560.000 (gratis ongkir) | Lulus |
| 3 | Member aktif, subtotal di bawah ambang | `hargaBarang=28000`, `item=2`, `member=true` | Total Rp56.000; diskon Rp5.600; subtotal Rp50.400 | Total bayar Rp65.400 (subtotal ditambah ongkir Rp15.000) | Lulus |
| 4 | Member tidak aktif, subtotal di bawah ambang | `hargaBarang=22000`, `item=2`, `member=false` | Total Rp44.000; tanpa diskon | Total bayar Rp59.000 (subtotal ditambah ongkir Rp15.000) | Lulus |
| 5 | Batas gratis ongkir tanpa member | `hargaBarang=250000`, `item=1`, `member=false` | Total dan subtotal Rp250.000 | Tidak dikenai ongkir dan total bayar Rp250.000 | Lulus |
| 6 | Batas gratis ongkir setelah diskon member | `hargaBarang=277778`, `item=1`, `member=true` | Total Rp277.778; diskon Rp27.777,80; subtotal Rp250.000,20 | Tidak dikenai ongkir dan total bayar Rp250.000,20 | Lulus |
| 7 | Harga barang tidak valid | `hargaBarang=0`, `item=2`, `member=true` | Validasi input harus gagal | Pesan `input tidak valid` ditampilkan | Perlu diperbaiki |
| 8 | Jumlah item tidak valid | `hargaBarang=28000`, `item=-1`, `member=false` | Validasi item harus gagal | Pesan `input tidak valid` ditampilkan | Perlu diperbaiki |
