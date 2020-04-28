//  GITSALAH 
function letsdo(item) {
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

var key;
function replace() {
    key = document.conversion.saisie.value;
    key = key.replace(/’/g, "\'");
    key = key.replace(/[aâàā]/g, "ا");
    key = key.replace(/اا/g, "آ");
    key = key.replace(/b/g, "ب");
    key = key.replace(/ب'/g, "پ");
    key = key.replace(/p/g, "پ");
    key = key.replace(/پ'/g, "ب");
    key = key.replace(/t/g, "ت");
    key = key.replace(/ت'/g, "ث");
    key = key.replace(/ث'/g, "ت");
    key = key.replace(/ṯ/g, "ث");
    key = key.replace(/[jǧ]/g, "ج");
    key = key.replace(/ج'/g, "چ");
    key = key.replace(/c/g, "چ");
    key = key.replace(/چ'/g, "ح");
    key = key.replace(/[HḥḤ]/g, "ح");
    key = key.replace(/ح'/g, "خ");
    key = key.replace(/[xẖK]/g, "خ");
    key = key.replace(/خ'/g, "ج");
    key = key.replace(/d/g, "د");
    key = key.replace(/د'/g, "ذ");
    key = key.replace(/ذ'/g, "د");
    key = key.replace(/ḏ/g, "ذ");
    key = key.replace(/r/g, "ر");
    key = key.replace(/ر'/g, "ز");
    key = key.replace(/ز'/g, "ر");
    key = key.replace(/z/g, "ز");
    key = key.replace(/s/g, "س");
    key = key.replace(/س'/g, "ش");
    key = key.replace(/ش'/g, "س");
    key = key.replace(/š/g, "ش");
    key = key.replace(/[Sṣ]/g, "ص");
    key = key.replace(/ص'/g, "ض");
    key = key.replace(/ض'/g, "ص");
    key = key.replace(/[Dḍ]/g, "ض");
    key = key.replace(/[Tṭ]/g, "ط");
    key = key.replace(/ط'/g, "ظ");
    key = key.replace(/ظ'/g, "ط");
    key = key.replace(/[Zẓ]/g, "ظ");
    key = key.replace(/[gʿ]/g, "ع");
    key = key.replace(/ع'/g, "غ");
    key = key.replace(/غ'/g, "ع");
    key = key.replace(/ġ/g, "غ");
    key = key.replace(/f/g, "ف");
    key = key.replace(/ف'/g, "ڤ");
    key = key.replace(/ڤ'/g, "ف");
    key = key.replace(/v/g, "ڢ");
    key = key.replace(/q/g, "ق");
    key = key.replace(/ق'/g, "ڨ");
    key = key.replace(/ڨ'/g, "ق");
    key = key.replace(/k/g, "ك");
    key = key.replace(/ك'/g, "ڭ");
    key = key.replace(/ڭ'/g, "ك");
    key = key.replace(/l/g, "ل");
    key = key.replace(/m/g, "م");
    key = key.replace(/n/g, "ن");
    key = key.replace(/h/g, "ه");
    key = key.replace(/ه'/g, "ة");
    key = key.replace(/ة'/g, "ه");
    key = key.replace(/[wouôûōū]/g, "و");
    key = key.replace(/[yieîī]/g, "ي");
    key = key.replace(/[YIE]/g, "ى");
    key = key.replace(/ي'/g, "ى");
    key = key.replace(/ى'/g, "ي");
    key = key.replace(/-/g, "ء");
    key = key.replace(/ʾ/g, "ء");
    key = key.replace(/وءء/g, "ؤ");
    key = key.replace(/يءء/g, "ئ");
    key = key.replace(/اءء/g, "إ");
    key = key.replace(/I/g, "إ");
    key = key.replace(/A/g, "إ");
    key = key.replace(/ءا/g, "أ");
    key = key.replace(/_/g, "ـ");
    key = key.replace(/\?/g, "؟");
    key = key.replace(/\;/g, "؛");
    key = key.replace(/\,/g, "،");
    key = key.replace(/\[\d+\]/g, '1')
    document.conversion.saisie.value = key;
    var obj = document.conversion.saisie;
    obj.focus();
    obj.scrollTop = obj.scrollHeight;
}
