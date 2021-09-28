const number = document.getElementById("number");

var n = 0;

function decreaser() {
    n--;
    number.innerHTML = n;
}

function reseter() {
    n = 0;
    number.innerHTML = n;
}

function increaser() {
    n++;
    number.innerHTML = n;
}