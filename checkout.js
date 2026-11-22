// skenario 1 member (aktif/true) dan dapat gartis ongkir

const hargaBarang = 280000;
const member = true;


// skenario 2 member (tidak aktif /false) dan dapat gratis ongkir

// const hargaBarang = 280000;
// const member = false;


// skenario 3 tidak mendapatkan gratis ongkir tapi member (aktif/true)

// const hargaBarang = 28000;
// const member = true;


// skenario 4 tidak mendapatkan gratis ongkir tapi member (tidak aktif/false)

// const hargaBarang = 22000;
// const member = false;



const item = 2;
const total = hargaBarang * item;
const diskon = total * 0.1;
let subtotal;
let totalBayar;
let MSGmember;
let ValidateIpunt = hargaBarang > 0 && (Number.isInteger(item) && item > 0) ? "input valid" : "input tidak valid"


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

    console.log(`------------${ValidateIpunt}--------------`)
 console.log("harga barang -------------------------",hargaBarang)       
 console.log("banyak item yang di beli -------------",item)       
 console.log("total belanjaan ----------------------",total)      
 console.log(MSGmember)
console.log("harga yang harus di bayar ------------",subtotal)
console.log("yang sudah di bayar termasuk ongkir---",totalBayar)
console.log("-------Terimakasi sudah belanja di sini------")


