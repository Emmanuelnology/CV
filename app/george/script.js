var i = 0;
var j = 0;
var txt = 'george.webster@yourcompany.com';
var txt2 = 'Pa$$word';
var speed = 50;

function delay(){
    setTimeout(typeWriter1, 2000);
    setTimeout(typeWriter2, 4500);
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