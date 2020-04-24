//  GITSALAH 
function alpha(item) {
    var input = document.conversion.saisie;
    if (document.selection) {
        input.focus();
        range = document.selection.createRange();
        range.text = item;
        range.select();
    } else if (input.selectionStart || input.selectionStart === '0') {
        var startPos = input.selectionStart;
        var endPos = input.selectionEnd;
        var cursorPos = startPos;
        var scrollTop = input.scrollTop;
        var baselength = 0;
        input.value = input.value.substring(0, startPos) +
            item +
            input.value.substring(endPos, input.value.length);
        cursorPos += item.length;
        input.focus();
        input.selectionStart = cursorPos;
        input.selectionEnd = cursorPos;
        input.scrollTop = scrollTop;
    } else {
        input.value += item;
        input.focus();
    }
}

function copier() {
    document.conversion.saisie.focus();
    document.conversion.saisie.select();
    copietxt = document.selection.createRange();
    copietxt.execCommand("Copy");
}

var car;

function transcrire() {
    car = document.conversion.saisie.value;
    car = car.replace(/’/g, "\'");
    car = car.replace(/[aâàā]/g, "ا");
    car = car.replace(/اا/g, "آ");
    car = car.replace(/b/g, "ب");
    car = car.replace(/ب'/g, "پ");
    car = car.replace(/p/g, "پ");
    car = car.replace(/پ'/g, "ب");
    car = car.replace(/t/g, "ت");
    car = car.replace(/ت'/g, "ث");
    car = car.replace(/ث'/g, "ت");
    car = car.replace(/ṯ/g, "ث");
    car = car.replace(/[jǧ]/g, "ج");
    car = car.replace(/ج'/g, "چ");
    car = car.replace(/c/g, "چ");
    car = car.replace(/چ'/g, "ح");
    car = car.replace(/[HḥḤ]/g, "ح");
    car = car.replace(/ح'/g, "خ");
    car = car.replace(/[xẖK]/g, "خ");
    car = car.replace(/خ'/g, "ج");
    car = car.replace(/d/g, "د");
    car = car.replace(/د'/g, "ذ");
    car = car.replace(/ذ'/g, "د");
    car = car.replace(/ḏ/g, "ذ");
    car = car.replace(/r/g, "ر");
    car = car.replace(/ر'/g, "ز");
    car = car.replace(/ز'/g, "ر");
    car = car.replace(/z/g, "ز");
    car = car.replace(/s/g, "س");
    car = car.replace(/س'/g, "ش");
    car = car.replace(/ش'/g, "س");
    car = car.replace(/š/g, "ش");
    car = car.replace(/[Sṣ]/g, "ص");
    car = car.replace(/ص'/g, "ض");
    car = car.replace(/ض'/g, "ص");
    car = car.replace(/[Dḍ]/g, "ض");
    car = car.replace(/[Tṭ]/g, "ط");
    car = car.replace(/ط'/g, "ظ");
    car = car.replace(/ظ'/g, "ط");
    car = car.replace(/[Zẓ]/g, "ظ");
    car = car.replace(/[gʿ]/g, "ع");
    car = car.replace(/ع'/g, "غ");
    car = car.replace(/غ'/g, "ع");
    car = car.replace(/ġ/g, "غ");
    car = car.replace(/f/g, "ف");
    car = car.replace(/ف'/g, "ڤ");
    car = car.replace(/ڤ'/g, "ف");
    car = car.replace(/v/g, "ڢ");
    car = car.replace(/q/g, "ق");
    car = car.replace(/ق'/g, "ڨ");
    car = car.replace(/ڨ'/g, "ق");
    car = car.replace(/k/g, "ك");
    car = car.replace(/ك'/g, "ڭ");
    car = car.replace(/ڭ'/g, "ك");
    car = car.replace(/l/g, "ل");
    car = car.replace(/m/g, "م");
    car = car.replace(/n/g, "ن");
    car = car.replace(/h/g, "ه");
    car = car.replace(/ه'/g, "ة");
    car = car.replace(/ة'/g, "ه");
    car = car.replace(/[wouôûōū]/g, "و");
    car = car.replace(/[yieîī]/g, "ي");
    car = car.replace(/[YIE]/g, "ى");
    car = car.replace(/ي'/g, "ى");
    car = car.replace(/ى'/g, "ي");
    car = car.replace(/-/g, "ء");
    car = car.replace(/ʾ/g, "ء");
    car = car.replace(/وءء/g, "ؤ");
    car = car.replace(/يءء/g, "ئ");
    car = car.replace(/اءء/g, "إ");
    car = car.replace(/I/g, "إ");
    car = car.replace(/A/g, "إ");
    car = car.replace(/ءا/g, "أ");
    car = car.replace(/_/g, "ـ");
    car = car.replace(/\?/g, "؟");
    car = car.replace(/\;/g, "؛");
    car = car.replace(/\,/g, "،");
    document.conversion.saisie.value = car;
    var obj = document.conversion.saisie;
    obj.focus();
    obj.scrollTop = obj.scrollHeight;
}
