// let apiData;
// let apiURL = 'https://api.airtable.com/v0/appsRDFKsY4qgBqMy/tblZlrHgf0X3En3KJ?api_key=keyRsJYzEsQrpUF9n';

// async function getData(url){
//   let response = await fetch(url);
//   let jsonData = await response.json();
//   return jsonData;
// }

let image = document.getElementById("imagecontainer");
let visual = document.getElementById("visualcontainer");
// let text = document.getElementById("text");

let keyspressed = [];

document.addEventListener('keydown', function(evt){
  console.log(evt.code, evt.key);
  // text.innerHTML += evt.code;
  keyspressed.push(evt.key);
})

document.addEventListener('keyup', function(evt){
  switch(evt.key){
    case 'a':
      image.src = "../assets/img/squillytype/KeyA.png";
      break;
    case 'b':
      image.src = "../assets/img/squillytype/KeyB.png";
      break;
    case 'c':
      image.src = "../assets/img/squillytype/KeyC.png";
      break;
    case 'd':
      image.src = "../assets/img/squillytype/KeyD.png";
      break;
    case 'e':
      image.src = "../assets/img/squillytype/KeyE.png";
      break;
    case 'f':
      image.src = "../assets/img/squillytype/KeyF.png";
      break;
    case 'g':
      image.src = "../assets/img/squillytype/KeyG.png";
      break;
    case 'h':
      image.src = "../assets/img/squillytype/KeyH.png";
      break;
    case 'i':
      image.src = "../assets/img/squillytype/KeyI.png";
      break;
    case 'j':
      image.src = "../assets/img/squillytype/KeyJ.png";
      break;
    case 'k':
      image.src = "../assets/img/squillytype/KeyK.png";
      break;
    case 'l':
      image.src = "../assets/img/squillytype/KeyL.png";
      break;
    case 'm':
      image.src = "../assets/img/squillytype/KeyM.png";
      break;
    case 'n':
      image.src = "../assets/img/squillytype/KeyN.png";
      break;
    case 'o':
      image.src = "../assets/img/squillytype/KeyO.png";
      break;
    case 'p':
      image.src = "../assets/img/squillytype/KeyP.png";
      break;
    case 'q':
      image.src = "../assets/img/squillytype/KeyQ.png";
      break;
    case 'r':
      image.src = "../assets/img/squillytype/KeyR.png";
      break;
    case 's':
      image.src = "../assets/img/squillytype/KeyS.png";
      break;
    case 't':
      image.src = "../assets/img/squillytype/KeyT.png";
      break;
    case 'u':
      image.src = "../assets/img/squillytype/KeyU.png";
      break;
    case 'v':
      image.src = "../assets/img/squillytype/KeyV.png";
      break;
    case 'w':
      image.src = "../assets/img/squillytype/KeyW.png";
      break;
    case 'x':
      image.src = "../assets/img/squillytype/KeyX.png";
      break;
    case 'y':
      image.src = "../assets/img/squillytype/KeyY.png";
      break;
    case 'z':
      image.src = "../assets/img/squillytype/KeyZ.png";
      break;
  }
})

document.addEventListener('keyup', function(evt){
    switch(evt.key){
        case 'a':
            visual.src = "../assets/img/visuals/august.jpg";
            break;
        case 'b':
            visual.src = "../assets/img/visuals/beaches.jpg";
            break;
        case 'c':
            visual.src = "../assets/img/visuals/chobani.jpg";
            break;
        case 'd':
            visual.src = "../assets/img/visuals/dumb.jpg";
            break;
        case 'e':
            visual.src = "../assets/img/visuals/elevators.jpg";
            break;
        case 'f':
            visual.src = "../assets/img/visuals/froyos.jpg";
            break;
        case 'g':
            visual.src = "../assets/img/visuals/gay.jpg";
            break;
        case 'h':
            visual.src = "../assets/img/visuals/hating.jpg";
            break;
        case 'i':
            visual.src = "../assets/img/visuals/indomie.jpg";
            break;
        case 'j':
            visual.src = "../assets/img/visuals/justin.jpg";
            break;
        case 'k':
            visual.src = "../assets/img/visuals/kaohsiung.jpg";
            break;
        case 'l':
            visual.src = "../assets/img/visuals/latte.jpg";
            break;
        case 'm':
            visual.src = "../assets/img/visuals/music.jpg";
            break;
        case 'n':
            visual.src = "../assets/img/visuals/nail.jpg";
            break;
        case 'o':
            visual.src = "../assets/img/visuals/orca.jpg";
            break;
        case 'p':
            visual.src = "../assets/img/visuals/psychology.jpg";
            break;
        case 'q':
            visual.src = "../assets/img/visuals/quarantine.jpg";
            break;
        case 'r':
            visual.src = "../assets/img/visuals/raw.jpg";
            break;
        case 's':
            visual.src = "../assets/img/visuals/skyrats.jpg";
            break;
        case 't':
            visual.src = "../assets/img/visuals/taiwan.jpg";
            break;
        case 'u':
            visual.src = "../assets/img/visuals/up.jpg";
            break;
        case 'v':
            visual.src = "../assets/img/visuals/versace.jpg";
            break;
        case 'w':
            visual.src = "../assets/img/visuals/west.jpg";
            break;
        case 'x':
            visual.src = "../assets/img/visuals/xmas.jpg";
            break;
        case 'y':
            visual.src = "../assets/img/visuals/yummy.jpg";
            break;
        case 'z':
            visual.src = "../assets/img/visuals/zombie.jpg";
            break;
    }
})