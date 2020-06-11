
var btnA = document.getElementById("renBtn");
var btnB = document.getElementById("jianBtn");
var btnC = document.getElementById("rongyuBtn");
var btnD = document.getElementById("rencaiBtn");

var textA = document.getElementById("textA");
var textB = document.getElementById(" textB");
var textC = document.getElementById(" textC");
var textD = document.getElementById(" textD");
// this is for page
var pageA = document.getElementById("renPage");
var pageB = document.getElementById("jianPage");
var pageC = document.getElementById("rongyuPage");
var pageD = document.getElementById("rencaiPage");

function renBtn() {
    pageA.style.display = "block";
    pageB.style.display = "none";
    pageC.style.display = "none";
    pageD.style.display = "none";

    textA.style.color = "white";
    textB.style.color = "#343A40";
    textC.style.color = "#343A40";
    textD.style.color = "#343A40";

    btnA.style.backgroundColor = "#007BFF";
    btnB.style.backgroundColor = "white";
    btnC.style.backgroundColor = "white";
    btnD.style.backgroundColor = "white";
}



function jianBtn() {
    pageA.style.display = "none";
    pageB.style.display = "block";
    pageC.style.display = "none";
    pageD.style.display = "none";

    textA.style.color = "#343A40";
    textB.style.color = "white";
    textC.style.color = "#343A40";
    textD.style.color = "#343A40";

    btnA.style.backgroundColor = "white";
    btnB.style.backgroundColor = "#007BFF";
    btnC.style.backgroundColor = "white";
    btnD.style.backgroundColor = "white";
}

function rongyuBtn() {
    pageA.style.display = "none";
    pageB.style.display = "none";
    pageC.style.display = "block";
    pageD.style.display = "none";

    textA.style.color = "#343A40";
    textB.style.color = "#343A40";
    textC.style.color = "white";
    textD.style.color = "#343A40";

    btnA.style.backgroundColor = "white";
    btnB.style.backgroundColor = "white";
    btnC.style.backgroundColor = "#007BFF";
    btnD.style.backgroundColor = "white";

}

function rencaiBtn() {
    pageA.style.display = "none";
    pageB.style.display = "none";
    pageC.style.display = "none";
    pageD.style.display = "block";

    textA.style.color = "#343A40";
    textB.style.color = "#343A40";
    textC.style.color = "#343A40";
    textD.style.color = "white";

    btnA.style.backgroundColor = "white";
    btnB.style.backgroundColor = "white";
    btnC.style.backgroundColor = "white";
    btnD.style.backgroundColor = "#007BFF";

}