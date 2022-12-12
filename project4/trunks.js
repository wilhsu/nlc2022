function setup() {
    const canvas = createCanvas(400, 400);
    canvas.parent("trunks");
    ellipseMode(CORNER);
    angleMode(DEGREES);
    // background(0);
  }
  
  function draw() {
    background(0);
    var halfx = width/2;
    var xx = width/2;
    var xy = width/2;
    point(0,halfx);
    point(halfx,0);
    point(halfx,width);
    point(width,halfx);
    point(halfx,halfx);
    stroke(225);
    strokeWeight(1);
    
    beginShape();
    // noFill();
    vertex(0, halfx);
    // quadraticVertex(mouseX, mouseY, halfx, 0);
    //top vertex
    quadraticVertex(xx, xy, width, halfx);
    vertex(width, width);
    //bottom right vertex
    // quadraticVertex(xx, xy, width, width);
    quadraticVertex(xx, xy+100, 0, width);
    vertex(0,width);
    //bottom left vertex
    // quadraticVertex(xx, xy, 0, halfx);
    endShape();
  }