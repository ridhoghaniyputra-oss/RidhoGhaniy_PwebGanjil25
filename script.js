
document.addEventListener('DOMContentLoaded', function(){
  var $ = function(id){ return document.getElementById(id); };
  function rup(n){ return (Number(n)||0).toLocaleString('id-ID'); }
  function hargaTerpilih(){
    var s = $('tujuan'); return parseInt(s.options[s.selectedIndex].dataset.price,10)||0;
  }
  function memberTerpilih(){ var m=document.querySelector('input[name="member"]:checked'); return m?m.value:'none'; }

  function hitung(){
    var h = hargaTerpilih();
    var j = parseInt($('jumlah').value,10)||0;
    var subtotal = h * j;
    var member = memberTerpilih();
    var rate = member==='gold'?0.20: member==='silver'?0.10:0;
    var diskon = Math.round(subtotal * rate);
    var total = subtotal - diskon;

    $('harga').value = rup(h);
    $('subtotal').value = rup(subtotal);
    $('diskon').value = (rate*100) + '% (' + rup(diskon) + ')';
    $('total').value = rup(total);
    return {h,j,subtotal,diskon,total,member};
  }

  $('hitung').addEventListener('click', function(){ hitung(); $('nota').style.display='none'; });
  $('bayar').addEventListener('click', function(){
    var data = hitung();
    if(data.h===0 || data.j<=0){ alert('Pilih tujuan & jumlah tiket.'); return; }
    var bayarRaw = prompt('Masukkan jumlah pembayaran (angka):', data.total);
    if(bayarRaw===null) return;
    var bayar = parseInt(bayarRaw.replace(/\D/g,''),10)||0;
    if(bayar < data.total){ alert('Pembayaran tidak cukup. Total: ' + rup(data.total)); return; }
    var kembali = bayar - data.total;

    $('nota-nama').textContent = $('nama').value || '-';
    $('nota-tujuan').textContent = $('tujuan').value || '-';
    $('nota-jumlah').textContent = data.j;
    $('nota-member').textContent = data.member==='none'?'Bukan Member': data.member.charAt(0).toUpperCase()+data.member.slice(1);
    $('nota-harga').textContent = rup(data.h);
    $('nota-subtotal').textContent = rup(data.subtotal);
    $('nota-diskon').textContent = rup(data.diskon);
    $('nota-total').textContent = rup(data.total);
    $('nota-bayar').textContent = rup(bayar);
    $('nota-kembali').textContent = rup(kembali);

    $('nota').style.display = 'block';
  });

  $('ulang').addEventListener('click', function(){
    $('nama').value=''; $('tujuan').selectedIndex=0; $('jumlah').value=1;
    var none = document.querySelector('input[name="member"][value="none"]'); if(none) none.checked=true;
    $('harga').value=''; $('subtotal').value=''; $('diskon').value=''; $('total').value=''; $('nota').style.display='none';
  });


  $('tujuan').addEventListener('change', hitung);
  $('jumlah').addEventListener('input', hitung);
  Array.from(document.querySelectorAll('input[name="member"]')).forEach(function(r){ r.addEventListener('change', hitung); });
});