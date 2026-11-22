input
1. hargaBarang
2. item
3. member

Proses
1. validasi input
2. menjumlahkan harga dengan item dan di masukan ke total
3. mencari tau diskon dari jumlah total * 0.1
4. validasi member jika member true  total - diskon jika false tidak di kurangi dan setelah itu di masukan ke subtotal
5. validasi subtotal jika lebih dari sama dengan  250k maka dapet gratis ongkir jika kurng dari 250k maka subtotal + 15k dan di masukan ke totalBayar.
6. tampilkan totalBayar

output
------------input valid--------------
harga barang ------------------------- 280000
banyak item yang di beli ------------- 2
total belanjaan ---------------------- 560000
Member Aktif---------------Dapat Diskon 56000
harga yang harus di bayar ------------ 504000

pattren recognition
1. semua transaksi membutuhkan perhitungan harga * item
2. pelanggan yang member pasti dapat diskon
3. biaya ongkir tergantung pada subtotal setelah diskon
4. kalo subtotal lebih dari 250k akan gratis ongkir jika tidak subtotal + 15k

Abstraction
1. nama barang
2. nama toko
3. nama pembeli
4. nama pengimput
5. orang yang imput ganteng atau engga tapi pasti ganteng

<!-- plis yang terakhir semoga tidak jadi minus soalnya mentor ganteng -->