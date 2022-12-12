// briefs
var sketchBriefs = function(p) {
    p.setup = function() {
      const briefsCanvas = p.createCanvas(400, 400);
      briefsCanvas.parent("briefs");
    //   ellipseMode(CORNER);
    }
  
    p.draw = function() {
        p.background(0);
        var width = 400;
        var halfx = width/2;
        var xx = width/2;
        p.point(0,halfx);
        p.point(halfx,0);
        p.point(halfx,width);
        p.point(width,halfx);
        p.point(halfx,halfx);
        p.stroke(225);
        p.strokeWeight(1);
        
        p.beginShape();
        p.vertex(0, halfx);
        //top vertex
        p.quadraticVertex(xx, xx, width, halfx);
        //bottom right vertex
        p.quadraticVertex(xx, xx, halfx, width);
        //bottom left vertex
        p.quadraticVertex(xx, xx, 0, halfx);
        p.endShape();
    }
  }
  
  //boxerbriefs
  var sketchBoxerbriefs = function(p) {
    p.setup = function() {
      const boxerbriefsCanvas = p.createCanvas(400, 400);
      boxerbriefsCanvas.parent("boxerbriefs");
    }
  
    p.draw = function() {
        p.background(0);
        var width = 400;
        var halfx = width/2;
        var xx = width/2;
        var xy = width/2;
        p.point(0,halfx);
        p.point(halfx,0);
        p.point(halfx,width);
        p.point(width,halfx);
        p.point(halfx,halfx);
        p.stroke(225);
        p.strokeWeight(1);
        
        p.beginShape();
        // noFill();
        p.vertex(0, halfx);
        // quadraticVertex(mouseX, mouseY, halfx, 0);
        //top vertex
        p.quadraticVertex(xx, xy, width, halfx);
        // vertex(width, width);
        //bottom right vertex
        p.quadraticVertex(xx, xy, width, width);
        p.quadraticVertex(xx, xy, 0, width);
        // vertex(0,width);
        //bottom left vertex
        p.quadraticVertex(xx, xy, 0, halfx);
        p.endShape();
    }
  }

  //trunks
  var sketchTrunks = function(p) {
    p.setup = function() {
      const trunksCanvas = p.createCanvas(400, 400);
      trunksCanvas.parent("trunks");
    }
  
    p.draw = function() {
        p.background(0);
        var width = 400;
        var halfx = width/2;
        var xx = width/2;
        var xy = width/2;
        p.point(0,halfx);
        p.point(halfx,0);
        p.point(halfx,width);
        p.point(width,halfx);
        p.point(halfx,halfx);
        p.stroke(225);
        p.strokeWeight(1);
        
        p.beginShape();
        // noFill();
        p.vertex(0, halfx);
        // quadraticVertex(mouseX, mouseY, halfx, 0);
        //top vertex
        p.quadraticVertex(xx, xy, width, halfx);
        p.vertex(width, width);
        //bottom right vertex
        // quadraticVertex(xx, xy, width, width);
        p.quadraticVertex(xx, xy+100, 0, width);
        p.vertex(0,width);
        //bottom left vertex
        // quadraticVertex(xx, xy, 0, halfx);
        p.endShape();
    }
  }

  var myp5Briefs = new p5(sketchBriefs);
  var myp5Boxerbriefs = new p5(sketchBoxerbriefs);
  var myp5Trunks = new p5(sketchTrunks);