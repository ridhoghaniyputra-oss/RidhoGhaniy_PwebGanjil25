

var nama = prompt("Nama Barang");
var harga = prompt("Harga Barang");
var jumlah = prompt("Jumlah Barang Yang Dibeli");

harga = parseInt(harga, 10) || 0;
jumlah = parseInt(jumlah, 10) || 0;
var subtotal = harga * jumlah;

document.write("<h3>Tampilan Akhir</h3>");
document.write("<table border='1' cellspacing='0' cellpadding='5'>");
document.write("<tr><th>Nama Barang</th><th>Harga Barang</th><th>Jumlah Beli</th><th>Sub Total</th></tr>");
document.write("<tr>");
document.write("<td>" + (nama === null ? "" : nama) + "</td>");
document.write("<td>" + harga + "</td>");
document.write("<td>" + jumlah + "</td>");
document.write("<td>" + subtotal + "</td>");
document.write("</tr>");
document.write("<tr><td colspan='4'>Ridho Ghaniy Putra</td></tr>");
document.write("</table>");