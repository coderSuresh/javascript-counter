var decrease = document.getElementById('btn_decrease');
var increase = document.getElementById('btn_increase');
var reset = document.getElementById('btn_reset');
var number = document.getElementById('number');

var n = 0;

function increaser() {
    n++;
    number.innerHTML = n;
}

function decreaser() {
    n--;
    number.innerHTML = n;
}

function reseter() {
    n = 0;
    number.innerHTML = n;
}