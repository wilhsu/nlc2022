let canvasContainer = document.getElementById("bigcontainer");
let sheetID = "1ti5FmijdJJAGI7PCqy8RvlkIAyxOnXLCobs5mPg9Jlo";
let tabName = 'ck'

// format them into Ben's uri
let opensheet_uri = `https://opensheet.elk.sh/${sheetID}/${tabName}`;

// console.log(opensheet_uri);

fetch(opensheet_uri)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // console.log(data);

        let dataArr = [];

        for (let datapoint of data){

            let undName = datapoint.name;
            let undType = datapoint.type;
            let undRatings = parseFloat(datapoint.ratings);

            dataArr.push([undName, undType, undRatings]);

            //underwear name
            let undies = document.createElement("div");
            undies.classList.add("undieName");
            undies.style.width = "200px";
            undies.style.margin = "10px";
            undies.style.backgroundColor = "red";
            undies.innerHTML = undName;

            //canvas
            // let undVisual = document.createElement("div");
            // undVisual.classList.add("ckCanvas");
            // undVisual.style.width = "400px";
            // undVisual.style.height = "400px";
            // undVisual.style.backgroundColor = "blue";
            // undVisual.src = "boxers.js";
            
            //javascript
            // var script = document.createElement("script");
            // script.src = `${undType}.js`;

            // p5 canvas
            var undArt = document.createElement("div");
            // undArt.classList.add("p5Canvas");
            // undArt.width = "800";
            // undArt.height = "800";
            // undArt.style.width = "400px";
            // undArt.style.height = "400px";
            undArt.setAttribute('id', undType);
            // document.body.appendChild(script);
            // if (undType == briefs){
            //     undVisual.src = "briefs.js";
            // }

            
            // if (undType == "briefs"){
            //     undVisual.appendChild(briefScript);
            // } else if (undType == "boxerbriefs"){
            //     undVisual.appendChild(boxerScript);
            // } else {
            //     undVisual.appendChild(trunkScript);
            // }

            // let briefUnd = document.createElement("div");
            // briefUnd.src = "boxers"
            
            //appending
            // undArt.appendChild(script);
            // undArt.appendChild(myp5Briefs);
            // undArt.appendChild(myp5Boxerbriefs);
            // undArt.appendChild(myp5Trunks);
            
            canvasContainer.appendChild(undies);
            undies.appendChild(undArt);
            undArt.appendChild(sketchBriefs);
            undArt.appendChild(sketchBoxerbriefs);
            undArt.appendChild(sketchTrunks);
            // undArt.appendChild(script);
            // canvasContainer.appendChild(undVisual);
            console.log(undName);
            // console.log(script);
            console.log(undType);

            // let underSqr = document.createElement("DIV");
            // underSqr.classList.add("undCanvas");
            // can = document.getElementsByClassName("undCanvas");

            // canvasContainer.appendChild();
            // canvasContainer.appendChild(underSqr);

        }
        console.log(dataArr);
        
        
    })
    .catch(function (err) {
        console.log("Something went wrong!", err);
    })

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