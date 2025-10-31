function tampilkanWaktu() {
  const namaHari = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jum'at",
    "Sabtu",
  ];
  const sekarang = new Date();

  const hari = namaHari[sekarang.getDay()];
  const jam = sekarang.getHours().toString().padStart(2, "0");
  const menit = sekarang.getMinutes().toString().padStart(2, "0");
  const detik = sekarang.getSeconds().toString().padStart(2, "0");

  const teksWaktu = `${hari}, ${jam}:${menit}:${detik}`;
  document.getElementById("waktu").textContent = teksWaktu;
}

// Jalankan setiap 1 detik
setInterval(tampilkanWaktu, 1000);

// Tampilkan saat pertama kali
tampilkanWaktu();
