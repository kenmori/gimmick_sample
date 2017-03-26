
var s = function(p){

var bg;
var position_start;
var position_end;
var xRenge = [];
var yRenge = [];
var isMovedFromStartPoint = false;
p.setup = function(){

    var canvasDiv = document.getElementById('myCanvas');
    var width = canvasDiv.offsetWidth;
    var sketchCanvas = p.createCanvas(width, 300);
    console.log(sketchCanvas);
    // sketchCanvas.parent("myCanvas");

}

//やり直すボタン
// $('.js-distribute').on('click', function(){
//     p5 = null;
// })

p.draw = function(){
    // background(bg);
    p.drawSprites();
}


p.touchStarted = function(){
    position_start = [p.mouseX, p.mouseY];
    disableScroll();
    console.log(p.mouseX, p.mouseY)
}

p.touchMoved = function(){
    p.strokeWeight(10);
    isMovedFromStartPoint = true;
    p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
    p.stroke(255, 204, 0);
}

p.caluclateRenge = function(){
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
p.isIncludeRenge = function(x, y){
    var isX = (xRenge.indexOf(x)!== -1 && isMovedFromStartPoint) ? true : false
    var isY = (yRenge.indexOf(y)!== -1 && isMovedFromStartPoint) ? true : false
    if(isX && isY) {
        return true;
    } else {
        return false;
    }
}
p.touchEnded = function(){
    p.ellipse(p.mouseX, p.mouseY, 5, 5);
    p.caluclateRenge();
    console.log(p.mouseX, p.mouseY);
    if(p.isIncludeRenge(p.mouseX, p.mouseY)){
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
}

var myp5 = new p5(s, 'myCanvas');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var s1 = function(p){
    var bg;
    var position_start;
    var position_end;
    var xRenge = [];
    var yRenge = [];
    var isMovedFromStartPoint = false;
    p.setup = function(){

        var canvasDiv = document.getElementById('myCanvas2');
        var width = canvasDiv.offsetWidth;
        var sketchCanvas = p.createCanvas(width, 300);
        console.log(sketchCanvas);
        // sketchCanvas.parent("myCanvas");

    }

//やり直すボタン
// $('.js-distribute').on('click', function(){
//     p5 = null;
// })

    p.draw = function(){
        // background(bg);
        p.drawSprites();
    }


    p.touchStarted = function(){
        position_start = [p.mouseX, p.mouseY];
        disableScroll();
        console.log(p.mouseX, p.mouseY)
    }

    p.touchMoved = function(){
        p.strokeWeight(10);
        isMovedFromStartPoint = true;
        p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
        p.stroke(255, 204, 0);
    }

    p.caluclateRenge = function(){
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
    p.isIncludeRenge = function(x, y){
        var isX = (xRenge.indexOf(x)!== -1 && isMovedFromStartPoint) ? true : false
        var isY = (yRenge.indexOf(y)!== -1 && isMovedFromStartPoint) ? true : false
        if(isX && isY) {
            return true;
        } else {
            return false;
        }
    }
    p.touchEnded = function(){
        p.ellipse(p.mouseX, p.mouseY, 5, 5);
        p.caluclateRenge();
        console.log(p.mouseX, p.mouseY);
        if(p.isIncludeRenge(p.mouseX, p.mouseY)){
            console.log("戻ってきました");
            var els = document.querySelector('#defaultCanvas1');
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
}
var myp5 = new p5(s1, 'myCanvas2');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var s2 = function(p){
    var bg;
    var position_start;
    var position_end;
    var xRenge = [];
    var yRenge = [];
    var isMovedFromStartPoint = false;
    p.setup = function(){

        var canvasDiv = document.getElementById('myCanvas3');
        var width = canvasDiv.offsetWidth;
        var sketchCanvas = p.createCanvas(width, 300);
        console.log(sketchCanvas);
        // sketchCanvas.parent("myCanvas");

    }

//やり直すボタン
// $('.js-distribute').on('click', function(){
//     p5 = null;
// })

    p.draw = function(){
        // background(bg);
        p.drawSprites();
    }


    p.touchStarted = function(){
        position_start = [p.mouseX, p.mouseY];
        disableScroll();
        console.log(p.mouseX, p.mouseY)
    }

    p.touchMoved = function(){
        p.strokeWeight(10);
        isMovedFromStartPoint = true;
        p.line(p.mouseX, p.mouseY, p.pmouseX, p.pmouseY);
        p.stroke(255, 204, 0);
    }

    p.caluclateRenge = function(){
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
    p.isIncludeRenge = function(x, y){
        var isX = (xRenge.indexOf(x)!== -1 && isMovedFromStartPoint) ? true : false
        var isY = (yRenge.indexOf(y)!== -1 && isMovedFromStartPoint) ? true : false
        if(isX && isY) {
            return true;
        } else {
            return false;
        }
    }
    p.touchEnded = function(){
        p.ellipse(p.mouseX, p.mouseY, 5, 5);
        p.caluclateRenge();
        console.log(p.mouseX, p.mouseY);
        if(p.isIncludeRenge(p.mouseX, p.mouseY)){
            console.log("戻ってきました");
            var els = document.querySelector('#defaultCanvas2');
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
}
var myp5 = new p5(s2, 'myCanvas3');