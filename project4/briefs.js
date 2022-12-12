function setup() {
    const canvas = createCanvas(400, 400);
    canvas.parent("briefs");
    ellipseMode(CORNER);

  }
  
  function draw() {
    background(0);
    var halfx = width/2;
    var xx = width/2;
    point(0,halfx);
    point(halfx,0);
    point(halfx,width);
    point(width,halfx);
    point(halfx,halfx);
    stroke(225);
    strokeWeight(1);
    
    beginShape();
    vertex(0, halfx);
    //top vertex
    quadraticVertex(xx, xx, width, halfx);
    //bottom right vertex
    quadraticVertex(xx, xx, halfx, width);
    //bottom left vertex
    quadraticVertex(xx, xx, 0, halfx);
    endShape();
  }