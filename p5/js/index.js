var bg;
var position_start;
var position_end;
var xRenge = [];
var yRenge = [];
var isMovedFromStartPoint = false;

function setup(){
    // bg = loadImage('./tarot.png');背景画像
    // noLoop();
    createCanvas(300, 300);
    // $("#defaultCanvas0").fadeIn(3000);
    // console.log("in");
    // background("#fff");
}
var els = document.querySelector('#defaultCanvas0');

var nodeList = anime({
    targets: els,
    translateX: 250
});


// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
// }

function draw(){
    // background(bg);
    drawSprites();
}

/////////////////////////////
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
    if (window.addEventListener) // older FF
        window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove  = preventDefault; // mobile
    document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}

/////////////////////////////

function touchStarted(){
    position_start = [mouseX, mouseY];
    disableScroll();
    console.log(mouseX, mouseY)
}

function touchMoved(){
    strokeWeight(10);
    isMovedFromStartPoint = true;
    line(mouseX, mouseY, pmouseX, pmouseY);
    stroke(126);
}

function caluclateRenge(){
    //スタート地点から-10、+10を戻ってくるべき座標としている
    var xs = position_start[0] -10;
    var xe = position_start[0] +10;
    var ys = position_start[1] -10;
    var ye = position_start[1] +10;
    for (var i = xs; i < xe; i++){
        xRenge.push(i);
    }
    for (var i = ys; i < ye; i++){
        yRenge.push(i);
    }
}
function isIncludeRenge(x, y){
    var isX = (xRenge.indexOf(x)!== -1 && isMovedFromStartPoint) ? true : false
    var isY = (yRenge.indexOf(y)!== -1 && isMovedFromStartPoint) ? true : false
    if(isX && isY) {
        return true;
    } else {
        return false;
    }
}
function touchEnded(){
    ellipse(mouseX, mouseY, 5, 5);
    caluclateRenge();
    console.log(mouseX, mouseY);
    if(isIncludeRenge(mouseX, mouseY)){
        console.log("戻ってきました");
        // var els = document.querySelector('#defaultCanvas0');
        // anime({
        //     targets: els,
        //     // translateX: [
        //     //     { value: 100, duration: 1200 },
        //     //     { value: 0, duration: 800 }
        //     // ],
        //     rotate: '100turn',
        //     // backgroundColor: '#FFF',
        //     duration: 10000,
        //     loop: false
        // });

        $("#defaultCanvas0").fadeOut(1000, function(){
            window.location = "https://amb-uranai.ameba.jp/";
        });
    } else {
        console.log("戻ってきていません")
    }
    return false;
}