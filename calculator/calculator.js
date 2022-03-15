let total = 0;
let input = "";
let calc = "+";
let flg = 1;
let data;
let work;

function valuef(data) {
    flg = 0;
    input += data;
    document.keyboard.line.value = input;
}

function AC() {
    total = 0;
    calc = "+";
    input = "";
    document.keyboard.line.value = total;
}

function calculate(data) {
    if (flg == 0) {
        flg = 1;
        work = total + calc + input;
        total = eval(work);
        input = "";
        document.keyboard.line.value = total;
    }
    if (data == "=") {
        total = 0;
        calc = "+";
    } else {
        calc = data;
    }
}