var rawPanjang = prompt("Panjang (contoh: 100)");
var rawLebar = prompt("Lebar (contoh: 50)");

var panjang = parseFloat(rawPanjang) || 0;
var lebar = parseFloat(rawLebar) || 0;
var luas = panjang * lebar;


document.write("<h3>TUGAS INDIVIDU 2</h3>");
document.write("<table border='1' cellspacing='0' cellpadding='6'>");
document.write("<tr><th>Variabel</th><th>Data Masukan</th><th>Keluaran</th></tr>");
document.write("<tr><td>Panjang</td><td>" + (rawPanjang === null ? "" : rawPanjang) + "</td><td></td></tr>");
document.write("<tr><td>Lebar</td><td>" + (rawLebar === null ? "" : rawLebar) + "</td><td></td></tr>");
document.write("<tr><td>Luas</td><td>Panjang * Lebar</td><td>" + luas + "</td></tr>");
document.write("</table>");