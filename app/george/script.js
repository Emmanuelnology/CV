var i = 0;
var j = 0;
var txt = 'george.webster@yourcompany.com';
var txt2 = 'Pa$$word123';
var speed = 50;

function delay(){
    setTimeout(typeWriter1, 1500);
    setTimeout(typeWriter2, 4000);
}

function typeWriter1() {
    if (i < txt.length) {
        document.getElementById("first").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter1, speed);
    }
}

function typeWriter2() {
    if (j < txt2.length) {
        document.getElementById("second").innerHTML += txt2.charAt(j);
        j++;
        setTimeout(typeWriter2, speed);
    }
}