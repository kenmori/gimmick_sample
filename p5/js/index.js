var bg;
var position_start;
var position_end;
var xRenge = [];
var yRenge = [];
var isMovedFromStartPoint = false;

function setup(){
    var canvasDiv = document.getElementById('myCanvas');
    var width = canvasDiv.offsetWidth;
    var sketchCanvas = createCanvas(width, 300);
    console.log(sketchCanvas);
    sketchCanvas.parent("myCanvas");
}


//やり直すボタン
// $('.js-distribute').on('click', function(){
//     p5 = null;
// })

function draw(){
    // background(bg);
    drawSprites();
}


function touchStarted(){
    position_start = [mouseX, mouseY];
    disableScroll();
    console.log(mouseX, mouseY)
}

function touchMoved(){
    strokeWeight(10);
    isMovedFromStartPoint = true;
    line(mouseX, mouseY, pmouseX, pmouseY);
    stroke(255, 204, 0);
}

function caluclateRenge(){
    //スタート地点から-10、+10を戻ってくるべき座標としている
    var xs = position_start[0] -15;
    var xe = position_start[0] +15;
    var ys = position_start[1] -15;
    var ye = position_start[1] +15;
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
        var els = document.querySelector('#defaultCanvas0');
        anime({
            targets: els,
            // translateX: [
            //     { value: 100, duration: 1200 },
            //     { value: 0, duration: 800 }
            // ],
            rotate: '10turn',
            scale: 12,
            // backgroundColor: '#FFF',
            duration: 10000,
            loop: false
        });

        $("#defaultCanvas0").fadeOut(1000, function(){
            window.location = "";
        });
    } else {
        console.log("戻ってきていません")
    }
    return false;
}