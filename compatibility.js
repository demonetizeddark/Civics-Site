if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    getElementById('body').style.display = 'none';
}

const mq = window.matchMedia( "(max-width: 1265px)" );
var errArray = [
    "4",
    "3",
    "2",
    "1"
  ];
  
const randomItem = errArray[Math.floor(Math.random()*errArray.length)];

if (mq.matches) {
    eval("errPrompt" + randomItem + "()")
    } else {
    document.getElementById("warning").style.display = "none"
}

function errPrompt1() {
    var luckyElem = document.getElementById("err-sign")
    var luckyCont = document.getElementById("warning")

    luckyElem.src = "assets/Unsupported.png"
    luckyCont.style.border = "5px solid #818181"
    luckyCont.style.color = "#818181"
}

function errPrompt2() {
    var luckyElem = luckyElem = document.getElementById("err-sign")
    var luckyCont = document.getElementById("warning")
    
    luckyElem.src = "assets/AlertStopIcon.png"
    luckyCont.style.border = "5px solid #fff"
    luckyCont.style.color = "#ff0000"
}

function errPrompt3() {
    var luckyElem = luckyElem = document.getElementById("err-sign")
    var luckyCont = document.getElementById("warning")

    luckyElem.src = "assets/BurningIcon.png"
    luckyCont.style.border = "5px solid yellow"
    luckyCont.style.color = "yellow"
}

function errPrompt4() {
    var luckyElem = luckyElem = document.getElementById("err-sign")
    var luckyCont = document.getElementById("warning")

    luckyElem.src = "assets/CDAudioVolumeIcon.png"
    luckyCont.style.border = "5px solid #ddd"
    luckyCont.style.color = "#ddd"
}