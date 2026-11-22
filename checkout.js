
const hargaBarang = 280000;
const member = true;
const item = 2;
const total = hargaBarang * item;
const diskon = total * 0.1;
let subtotal;
let totalBayar;
let MSGmember;

switch (true){
    case member == true:
        MSGmember = `Member Aktif---------------Dapat Diskon ${diskon}`;
        break;
        default:
        MSGmember = "Member Tidak Aktif---------Tidak Dapat Diskon"
}

switch (true) {
    case member == true:
        subtotal = total - diskon;
        break
        default:
        subtotal = total
}

switch (true){
    case subtotal < 250000:
        totalBayar = subtotal + 15000
        break
        default:
        totalBayar = subtotal
    }

 console.log("harga barang -------------------------",hargaBarang)       
 console.log("banyak item yang di beli -------------",item)       
 console.log("total belanjaan ----------------------",total)      
 console.log(MSGmember)
console.log("harga yang harus di bayar ------------",subtotal)
console.log("yang sudah di bayar termasuk ongkir---",totalBayar)
console.log("-------Terimakasi sudah belanja di sini------")


