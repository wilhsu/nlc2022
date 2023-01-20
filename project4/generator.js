function imgchange() {

  var myImages1 = new Array();
      myImages1[1] = "assets/ck1.jpeg";
      myImages1[2] = "assets/ck2.jpeg";
      myImages1[3] = "assets/ck3.jpeg";
      myImages1[4] = "assets/ck4.jpeg";
    var rnd = Math.floor(Math.random() * myImages1.length);
      if (rnd == 0) {
              rnd = 1;
      }
  
    document.getElementById("bgImg").src = myImages1[rnd];
  
  }

function waistbandchange() {
    var img = new Array();
        img[1] = "assets/wb1.png";
        img[2] = "assets/wb2.png";
        img[3] = "assets/wb3.png";
        img[4] = "assets/wb4.png";
        img[5] = "assets/wb5.png";
      var random = Math.floor(Math.random() * img.length);
        if (random == 0) {
                random = 1;
        }
    
      document.getElementById("waistbandDisplay").src = img[random];
    
    }

  document.getElementById('undName').addEventListener('keyup', copyToDiv);

  function copyToDiv() {
    document.getElementById("undNameDisplay").innerHTML = document.getElementById("undName").value;
  }

  document.getElementById('undMat').addEventListener('keyup', copyToDivv);

  function copyToDivv() {
    document.getElementById("undMatDisplay").innerHTML = document.getElementById("undMat").value;
  }

  // function underwearType(){
  //   var 
  // }
  

  function underwearMaterial() {
    var um = document.getElementById("undMat").value;
    console.log(um);
    // document.getElementById("demo").innerHTML = x;

    let undies = document.getElementById("undie");
    undies.src = `assets/${um}.png`;
}

const briefs = document.getElementById("briefs");
const boxerbriefs = document.getElementById("boxerbriefs");
const trunks = document.getElementById("trunks");

function underwearType(){
  console.log(event.target.value);
  ut = event.target.value;

  let undietype = document.getElementById("undie");
  undietype.style.maskImage = `url(assets/${ut}.png)`;
  undietype.style.webkitMaskImage = `url(assets/${ut}.png)`;
}


// var type = document.getElementById("undie").style.maskImage;
// var typew = document.getElementById("undie").style.webkitMaskImage;


// briefs.addEventListener('click', () => {
//   type = "url(assets/briefs.png)";
//   typeW = "url(assets/briefs.png)";
// });

// boxerbriefs.addEventListener('click', () => {
//   type = "url(assets/boxerbriefs.png)";
//   typeW = "url(assets/boxerbriefs.png)";
// });

// trunks.addEventListener('click', () => {
//   type = "url(assets/trunks.png)";
//   typeW = "url(assets/trunks.png)";
// });




// function underwearType(){
//     if (briefs == true){
//     document.getElementById("undie").style.maskImage = "url(assets/briefs.png)"
//     document.getElementById("undie").style.webkitMaskImage = "url(assets/briefs.png)"
//     } else if (boxerbriefs == true){
//       document.getElementById("undie").style.maskImage = "url(assets/boxerbriefs.png)"
//       document.getElementById("undie").style.webkitMaskImage = "url(assets/boxerbriefs.png)"
//       } else {
//         document.getElementById("undie").style.maskImage = "url(assets/trunks.png)"
//         document.getElementById("undie").style.webkitMaskImage = "url(assets/trunks.png)"
//       }
// }

// function underwearType(){
//   var ut = document.getElementById("undType").value;
//   console.log(ut);

//   let type = document.getElementById("undie").style.maskImage;
//   let typeW = document.getElementById("undie").style.webkitMaskImage;
//   type = `url(assets${ut}.png)`;
//   typeW = `url(assets${ut}.png)`;
// }