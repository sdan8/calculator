var input_1 = 0.0, input_2 = 0.0, total = 0.0;  //input_1用来存放操作数1；input_2用来存放操作数2；total用来存放结果
var state = 1;  //state表示当前状态，1-输入操作数1；2-输入操作数2；3-得到结果；4-输入运算符
var operator_sign = ""; //operator_sign用来存放运算符

var input_text = document.getElementById('text');


function btn(num) {
    
    if ((state == 3) || (state == 4)){
        input_text.value = "0.";
    }
    if (input_text.value == "0."){
        if (num != 0){
            input_text.value = num;
        }
    } else {
        input_text.value += num;
    }
    if (state == 3) state = 1;
    if (state == 4) state = 2;
}

function operator(sign) {
    if ((state == 1) || (state == 3)) {
        input_1 = parseFloat(input_text.value);
        operator_sign = sign;
        state = 4;
    } else {
        if (state == 2) {
            input_2 = parseFloat(input_text.value);
            switch (operator_sign) {
                case '+':
                    total = input_1 + input_2;
                    break;
                case '-':
                    total = input_1 - input_2;
                    break;
                case '*':
                    total = input_1 * input_2;
                    break;
                case '/':
                    if (input_2 == 0.0) {
                        alert("除数不能为零！！！");
                    } else {
                        total = input_1 / input_2;
                    }
                    break;
                default:
                    break;
            }
            input_text.value = total;
            input_1 = total;
            operator_sign = sign;
            state = 4;
        } else {
            operator_sign = sign;
        }
    }
}

function equal() {
    if (state == 2){
        input_2 = parseFloat(input_text.value);
        switch (operator_sign) {
            case '+':
                total = input_1 + input_2;
                break;
            case '-':
                total = input_1 - input_2;
                break;
            case '*':
                total = input_1 * input_2;
                break;
            case '/':
                if (input_2 == 0.0){
                    alert("除数不能为零！！！");
                } else {
                    total = input_1 / input_2;
                }
        }
        input_text.value = total;
        state = 3;
    }
}

function dot() {
    if (state == 3){
        input_text.value = '.';
        state = 1;
    } else {
        if (state == 4){
            input_text.value = '.';
            state = 2;
        } else {
            if (input_text.value.indexOf('.') == -1){
                input_text.value += '.';
            }
        }
    }
}

function backspace() {
    if (input_text.value != '0.'){
        if (input_text.value.length == 1){
            input_text.value = '0.';
        } else {
            input_text.value = input_text.value.subString(0, input_text.value.length - 1);
        }
    }
}

function ce() {
    input_text.value = '0.';
}

function c() {
    input_1 = 0.0;
    input_2 = 0.0;
    total = 0.0;
    operator_sign = '';
    state = 1;
    input_text.value = '0.';
}