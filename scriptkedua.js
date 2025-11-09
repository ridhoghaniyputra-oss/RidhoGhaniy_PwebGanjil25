
document.addEventListener('DOMContentLoaded', () => {
    const $ = id => document.getElementById(id);
    const nilaiAkhirEl = $('nilaiAkhir');
    const indeksEl = $('indeks');
    const keteranganEl = $('keterangan');
    const btnHitung = $('hitung');
    const btnUlang = $('ulang');

    function promptScore(label) {
        while (true) {
            const raw = window.prompt(`Masukkan nilai ${label} (0-100):`);
            if (raw === null) return null; // user cancelled
            const v = parseFloat(raw.trim());
            if (!isNaN(v) && v >= 0 && v <= 100) return v;
            alert('Input tidak valid. Masukkan angka antara 0 dan 100.');
        }
    }

    function getIndexAndRemark(score) {
        if (score >= 80 && score <= 100) return { idx: 'A', remark: 'Lulus dengan sangat baik' };
        if (score >= 68 && score < 80) return { idx: 'B', remark: 'Lulus dengan baik' };
        if (score >= 55 && score < 68) return { idx: 'C', remark: 'Lulus dengan cukup' };
        if (score >= 38 && score < 55) return { idx: 'D', remark: 'Lulus dengan kurang' };
        return { idx: 'E', remark: 'Tidak Lulus' };
    }

    function displayResult(finalScore, indexObj) {
        const finalStr = finalScore.toFixed(2);
        if (nilaiAkhirEl) nilaiAkhirEl.value = finalStr;
        if (indeksEl) indeksEl.value = indexObj.idx;
        if (keteranganEl) keteranganEl.value = indexObj.remark;

        alert(
            `Nilai akhir: ${finalStr}\nIndeks: ${indexObj.idx}\nKeterangan: ${indexObj.remark}`
        );
    }

    if (btnHitung) {
        btnHitung.addEventListener('click', () => {
            const quiz = promptScore('Quiz (10%)');
            if (quiz === null) return;
            const tugas = promptScore('Tugas (20%)');
            if (tugas === null) return;
            const uts = promptScore('UTS (30%)');
            if (uts === null) return;
            const uas = promptScore('UAS (40%)');
            if (uas === null) return;

            const finalScore = Math.round(((quiz * 0.10) + (tugas * 0.20) + (uts * 0.30) + (uas * 0.40)) * 100) / 100;
            const indexObj = getIndexAndRemark(finalScore);
            displayResult(finalScore, indexObj);
        });
    }

    if (btnUlang) {
        btnUlang.addEventListener('click', () => {
            ['quiz','tugas','uts','uas','nilaiAkhir','indeks','keterangan'].forEach(id => {
                const el = $(id);
                if (el) el.value = '';
            });
            alert('Formulir direset.');
        });
    }
});
