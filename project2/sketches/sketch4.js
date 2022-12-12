let cw = 1200;
let ch = 530;

function setup(){
    createCanvas(cw, ch); 
    background(transparent);
}

function draw(){
// background(2);
// opacity:0.1;

    noFill();
    stroke(77, 255, 0);
// rect(random(cw), random(ch),      random(50,150), random(10,100));
    rect(mouseX, mouseY, random(50,150), random(10,100));
    frameRate(10);
}