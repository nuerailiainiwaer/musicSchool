var btnA = document.getElementById("renBtn");
var btnB = document.getElementById("jianBtn");
var btnC = document.getElementById("rongyuBtn ");

var textA = document.getElementById("textA");
var textB = document.getElementById("textB ");
var textC = document.getElementById("textC ");

// this is for page
var pageA = document.getElementById("renPage ");
var pageB = document.getElementById("jianPage ");
var pageC = document.getElementById("rongyuPage ");

function renBtn() {
    console.log('fuck you ')
    pageA.style.display = "block";
    pageB.style.display = "none";
    pageC.style.display = "none";

    textA.style.color = "white";
    textB.style.color = "#343A40";
    textC.style.color = "#343A40";

    btnA.style.backgroundColor = "#007BFF";
    btnB.style.backgroundColor = "white";
    btnC.style.backgroundColor = "white";
}

function jianBtn() {
    pageA.style.display = "none";
    pageB.style.display = "block";
    pageC.style.display = "none";

    textA.style.color = "#343A40";
    textB.style.color = "white";
    textC.style.color = "#343A40";

    btnA.style.backgroundColor = "white";
    btnB.style.backgroundColor = "#007BFF";
    btnC.style.backgroundColor = "white";

    btnA.classList.remove("mystyle");
    btnB.classList.add("mystyle");
    btnC.classList.remove("mystyle");
}

function rongyuBtn() {
    pageA.style.display = "none";
    pageB.style.display = "none";
    pageC.style.display = "block";

    textA.style.color = "#343A40";
    textB.style.color = "#343A40";
    textC.style.color = "white";

    btnA.style.backgroundColor = "white";
    btnB.style.backgroundColor = "white";
    btnC.style.backgroundColor = "#007BFF";
}

function rencaiBtn() {
    pageA.style.display = "none";
    pageB.style.display = "none";
    pageC.style.display = "none";

    textA.style.color = "#343A40";
    textB.style.color = "#343A40";
    textC.style.color = "#343A40";

    btnA.style.backgroundColor = "white";
    btnB.style.backgroundColor = "white";
    btnC.style.backgroundColor = "white";
}