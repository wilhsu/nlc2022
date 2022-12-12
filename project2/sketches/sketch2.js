function setup() {
  let ww = 500;
  let wh = 500;
  
  createCanvas(ww, wh);
}

function draw() {
  let ww = 500;
  let wh = 500;
  
  background(225);
  
  // head
  noStroke();
  fill(100);
  ellipse(ww/2, wh/2 - 60, 100);
  
  // left eye white
  noStroke();
  fill(225);
  ellipse(ww/2-15, wh/2 - 60, 25);
  
  // right eye white
  noStroke();
  fill(225);
  ellipse(ww/2+15, wh/2 - 60, 25);
  
  // neck
  noStroke();
  fill(100);
  rect(ww/2 - 10, wh/2 - 40, 20, 50);
  
  // body
  noStroke();
  fill(100);
  rect(ww/2 - 60, wh/2 + 10, 120, 200);
  
  // laptop
  noStroke();
  fill(0);
  quad(ww/2 - 100, wh/2 + 40, ww/2 + 100, wh/2 + 40, ww/2 + 60, wh/2 + 120, ww/2 - 60, wh/2 +120);
  
  let ex = constrain(mouseX, 230, 240);
  let ey = constrain(mouseY, 185, 195);
  
  // left pupil
  noStroke();
  fill(0);
  ellipse(ex, ey, 10);
  
  // right pupil
  noStroke();
  fill(0);
  ellipse(ex + 30, ey, 10);
  
  // box - face
  stroke('#66ff00');
  strokeWeight(3);
  noFill();
  rect(ww/2 - 60, wh/2 - 120, 120, 120);
  
  // box - laptop
  stroke('#66ff00');
  strokeWeight(3);
  noFill();
  rect(ww/2 - 105, wh/2 +10 , 210, 130);
}