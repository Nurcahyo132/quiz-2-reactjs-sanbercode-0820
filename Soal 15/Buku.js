let warna = ["biru", "merah", "kuning", "hijau"]

let dataBukuTambahan = {
    penulis: "john doe",
    tahunTerbit: 2020
}

let buku = {
    nama: "pemrograman dasar",
    jumlahHalaman: 172,
    warnaSampul: [...warna, "hitam"]
}

let gabungData = {...dataBukuTambahan, ...buku}
console.log(gabungData);