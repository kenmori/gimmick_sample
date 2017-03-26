

function setup(){
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
}
function draw (){
    background(150);
    strokeWeight(2);//太さ
    stroke(255);
    fill(0, 0);
    rect(windowWidth/2, windowHeight/2, windowWidth/4, windowHeight/4);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

