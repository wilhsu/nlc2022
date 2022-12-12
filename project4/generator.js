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

  document.getElementById('undName').addEventListener('keyup', copyToDiv);

  function copyToDiv() {
    document.getElementById("undNameDisplay").innerHTML = document.getElementById("undName").value;
  }

  document.getElementById('undMat').addEventListener('keyup', copyToDivv);

  function copyToDivv() {
    document.getElementById("undMatDisplay").innerHTML = document.getElementById("undMat").value;
  }

  function showHide(boxers){
    let x = document.getElementById(boxers);
    if (x.style.display == "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function showHide(boxerBriefs){
    let x = document.getElementById(boxerBriefs);
    if (x.style.display == "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function showHide(trunks){
    let x = document.getElementById(trunks);
    if (x.style.display == "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }