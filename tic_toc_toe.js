flag = 1;
let fun = () => {
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;

    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;

    var btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9;
    btn1 = document.getElementById("b1");
    btn2 = document.getElementById("b2");
    btn3 = document.getElementById("b3");
    btn4 = document.getElementById("b4");
    btn5 = document.getElementById("b5");
    btn6 = document.getElementById("b6");
    btn7 = document.getElementById("b7");
    btn8 = document.getElementById("b8");
    btn9 = document.getElementById("b9");

    if ((b1 == 'X') && (b2 == 'X') && (b3 == 'X')) {
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;

        btn1.style.color = "red";
        btn2.style.color = "red";
        btn3.style.color = "red";

        document.getElementById("print").innerHTML = "Person X is won";
    }
    else if ((b4 == 'X') && (b5 == 'X') && (b6 == 'X')) {
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;

        btn4.style.color = "red";
        btn5.style.color = "red";
        btn6.style.color = "red";

        document.getElementById("print").innerHTML = "Person X is won";
    }
    else if ((b7 == 'X') && (b8 == 'X') && (b9 == 'X')) {
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;

        btn7.style.color = "red";
        btn8.style.color = "red";
        btn9.style.color = "red";

        document.getElementById("print").innerHTML = "Person X is won";
    }
    else if ((b1 == 'X') && (b4 == 'X') && (b7 == 'X')) {
        btn2.disabled = true;
        btn3.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;

        btn1.style.color = "red";
        btn4.style.color = "red";
        btn7.style.color = "red";

        document.getElementById("print").innerHTML = "Person X is won";
    }
    else if ((b2 == 'X') && (b5 == 'X') && (b8 == 'X')) {
        btn1.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn9.disabled = true;

        btn2.style.color = "red";
        btn5.style.color = "red";
        btn8.style.color = "red";

        document.getElementById("print").innerHTML = "Person X is won";
    }
    else if ((b3 == 'X') && (b6 == 'X') && (b9 == 'X')) {
        btn1.disabled = true;
        btn2.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;

        btn3.style.color = "red";
        btn6.style.color = "red";
        btn9.style.color = "red";

        document.getElementById("print").innerHTML = "Person X is won";
    }
    else if ((b1 == 'X') && (b5 == 'X') && (b9 == 'X')) {
        document.getElementById("print").innerHTML = "Person X is won";
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;

        btn1.style.color = "red";
        btn5.style.color = "red";
        btn9.style.color = "red";

    }

    else if ((b3 == 'X') && (b5 == 'X') && (b7 == 'X')) {
        btn1.disabled = true;
        btn2.disabled = true;
        btn4.disabled = true;
        btn6.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;

        btn3.style.color = "red";
        btn5.style.color = "red";
        btn7.style.color = "red";

        document.getElementById("print").innerText = "Person X is won";
    }
    else if ((b1 == 'O') && (b2 == 'O') && (b3 == 'O')) {
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;

        btn1.style.color = "red";
        btn2.style.color = "red";
        btn3.style.color = "red";

        document.getElementById("print").innerHTML = "Person O is won";
    }
    else if ((b4 == 'O') && (b5 == 'O') && (b6 == 'O')) {
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;

        btn4.style.color = "red";
        btn5.style.color = "red";
        btn6.style.color = "red";

        document.getElementById("print").innerHTML = "Person O is won";
    }
    else if ((b7 == 'O') && (b8 == 'O') && (b9 == 'O')) {
        btn1.disabled = true;
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;

        btn7.style.color = "red";
        btn8.style.color = "red";
        btn9.style.color = "red";

        document.getElementById("print").innerHTML = "Person O is won";
    }
    else if ((b1 == 'O') && (b4 == 'O') && (b7 == 'O')) {
        btn2.disabled = true;
        btn3.disabled = true;
        btn5.disabled = true;
        btn6.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;

        btn1.style.color = "red";
        btn4.style.color = "red";
        btn7.style.color = "red";

        document.getElementById("print").innerHTML = "Person O is won";
    }
    else if ((b2 == 'O') && (b5 == 'O') && (b8 == 'O')) {
        btn1.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn9.disabled = true;

        btn2.style.color = "red";
        btn5.style.color = "red";
        btn8.style.color = "red";

        document.getElementById("print").innerHTML = "Person O is won";
    }
    else if ((b3 == 'O') && (b6 == 'O') && (b9 == 'O')) {
        btn1.disabled = true;
        btn2.disabled = true;
        btn4.disabled = true;
        btn5.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;

        btn3.style.color = "red";
        btn6.style.color = "red";
        btn9.style.color = "red";

        document.getElementById("print").innerHTML = "Person O is won";
    }
    else if ((b1 == 'O') && (b5 == 'O') && (b9 == 'O')) {
        btn2.disabled = true;
        btn3.disabled = true;
        btn4.disabled = true;
        btn6.disabled = true;
        btn7.disabled = true;
        btn8.disabled = true;

        btn1.style.color = "red";
        btn5.style.color = "red";
        btn9.style.color = "red";

        document.getElementById("print").innerHTML = "Person O is won";
    }

    else if ((b3 == 'O') && (b5 == 'O') && (b7 == 'O')) {
        btn1.disabled = true;
        btn2.disabled = true;
        btn4.disabled = true;
        btn6.disabled = true;
        btn8.disabled = true;
        btn9.disabled = true;

        btn3.style.color = "red";
        btn5.style.color = "red";
        btn7.style.color = "red";

        document.getElementById("print").innerHTML = "Person O is won";
    }
    else {
        if (((b1 == 'X' || b1 == 'O') && (b2 == 'X' || b2 == 'O') && (b3 == 'X' || b3 == 'O') && (b4 == 'X' || b4 == 'O') && (b5 == 'X' || b5 == 'O') && (b6 == 'X' || b6 == 'O') && (b7 == 'X' || b7 == 'O') && (b8 == 'X' || b8 == 'O') && (b9 == 'X' || b9 == 'O'))) {
            document.querySelectorAll(".container").style.border = "thick solid red"
            document.getElementById("print").innerHTML = "Match Tie";
        }
        else if (flag == 1) {
            document.getElementById("print").innerText = "Player X Turn";
        }
        else {
            document.getElementById("print").innerText = "Player O Turn";
        }
    }

}
let fun_1 = () => {
    if (flag == 1) {
        document.getElementById("b1").value = 'X';
        document.getElementById("b1").style.fontSize = '370%';
        document.getElementById("b1").style.color = 'black';
        document.getElementById("b1").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b1").value = 'O';
        document.getElementById("b1").style.fontSize = '370%';
        document.getElementById("b1").style.color = 'black';
        document.getElementById("b1").disabled = true;
        flag = 1;
    }
}

let fun_2 = () => {
    // flag =1; 
    if (flag == 1) {
        document.getElementById("b2").value = 'X';
        document.getElementById("b2").style.fontSize = '370%';
        document.getElementById("b2").style.color = 'black';
        document.getElementById("b2").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b2").value = 'O';
        document.getElementById("b2").style.fontSize = '370%';
        document.getElementById("b2").disabled = true;
        document.getElementById("b2").style.color = 'black';
        flag = 1;
    }
}

let fun_3 = () => {
    if (flag == 1) {
        document.getElementById("b3").value = 'X';
        document.getElementById("b3").style.fontSize = '370%';
        document.getElementById("b3").style.color = 'black';
        document.getElementById("b3").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b3").value = 'O';
        document.getElementById("b3").style.fontSize = '370%';
        document.getElementById("b3").disabled = true;
        document.getElementById("b3").style.color = 'black';
        flag = 1;
    }
}

let fun_4 = () => {
    // flag =1; 
    if (flag == 1) {
        document.getElementById("b4").value = 'X';
        document.getElementById("b4").style.fontSize = '370%';
        document.getElementById("b4").style.color = 'black';
        document.getElementById("b4").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b4").value = 'O';
        document.getElementById("b4").style.fontSize = '370%';
        document.getElementById("b4").disabled = true;
        document.getElementById("b4").style.color = 'black';
        flag = 1;
    }
}

let fun_5 = () => {
    // flag =1; 
    if (flag == 1) {
        document.getElementById("b5").value = 'X';
        document.getElementById("b5").style.fontSize = '370%';
        document.getElementById("b5").style.color = 'black';
        document.getElementById("b5").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b5").value = 'O';
        document.getElementById("b5").style.fontSize = '370%';
        document.getElementById("b5").disabled = true;
        document.getElementById("b5").style.color = 'black';
        flag = 1;
    }
}
let fun_6 = () => {
    // flag =1; 
    if (flag == 1) {
        document.getElementById("b6").value = 'X';
        document.getElementById("b6").style.fontSize = '370%';
        document.getElementById("b6").style.color = 'black';
        document.getElementById("b6").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b6").value = 'O';
        document.getElementById("b6").style.fontSize = '370%';
        document.getElementById("b6").disabled = true;
        document.getElementById("b6").style.color = 'black';
        flag = 1;
    }
}
let fun_7 = () => {
    if (flag == 1) {
        document.getElementById("b7").value = 'X';
        document.getElementById("b7").style.fontSize = '370%';
        document.getElementById("b7").style.color = 'black';
        document.getElementById("b7").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b7").value = 'O';
        document.getElementById("b7").style.fontSize = '370%';
        document.getElementById("b7").disabled = true;
        document.getElementById("b7").style.color = 'black';
        flag = 1;
    }
}

let fun_8 = () => {
    if (flag == 1) {
        document.getElementById("b8").value = 'X';
        document.getElementById("b8").style.fontSize = '370%';
        document.getElementById("b8").style.color = 'black';
        document.getElementById("b8").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b8").value = 'O';
        document.getElementById("b8").style.fontSize = '370%';
        document.getElementById("b8").disabled = true;
        document.getElementById("b8").style.color = 'black';
        flag = 1;
    }
}

let fun_9 = () => {
    // flag =1; 
    if (flag == 1) {
        document.getElementById("b9").value = 'X';
        document.getElementById("b9").style.fontSize = '370%';
        document.getElementById("b9").style.color = 'black';
        document.getElementById("b9").disabled = true;
        flag = 0;
    }
    else {
        document.getElementById("b9").value = 'O';
        document.getElementById("b9").style.fontSize = '370%';
        document.getElementById("b9").disabled = true;
        document.getElementById("b9").style.color = 'black';
        flag = 1;
    }
}

function funForReset() {
    location.reload();
    b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = "";
}

