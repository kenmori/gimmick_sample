
function setup(){
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER, CENTER);
    rectMode(CENTER);
}
function draw (){
    background(0);
    strokeWeight(2);//太さ
    stroke(255);
    fill(0, 0);
    rect(width/2, height/2, 210, 30);

    fill(255);
    noStroke();
    textFont('Arial');
    text("CODING FOR VISUAL LEARNERS", width/ 2, height/2);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

//これをやっている
//https://css-tricks.com/creating-book-cover-using-javascript-p5-js/