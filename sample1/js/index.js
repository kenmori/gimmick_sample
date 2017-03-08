function setup(){
    createCanvas(400, 400);
    background("#fff");
}

function draw(){
    drawSprites();
}

// function touchStarted(){
//     // ellipse(mouseX, mouseY, 5, 5);
//     createSprite(mouseX, mouseY, 50, 50);
// }

function touchMoved(){
    strokeWeight(10);
    line(mouseX, mouseY, pmouseX, pmouseY);
    stroke(126);
}

function touchEnded(){
    ellipse(mouseX, mouseY, 5, 5);
    console.log("fafa");
    return false;
}