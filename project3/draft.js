let table = ["nov21", "dec21", "jan22", "feb22", "mar22", "apr22", "may22", "jun22", "jul22", "aug22", "sep22", "oct22"];
let counter = 0;
// counter++;
let tableName = table[counter];

let apiURL = `https://api.airtable.com/v0/appfdVgryCpn9yfZX/${tableName}?api_key=keyRsJYzEsQrpUF9n`;
let apiData;

function buttonClick(){
    // counter++;
    // location.reload();
    // counter = 0;
    if (counter < table.length){
    //    tableName[counter++];
        counter++;
        // tableName
    }else if (counter == 12){
        counter = 0;
    }

    tableName = table[counter];
    console.log("counter = " + counter)
    console.log(tableName);
    apiURL = `https://api.airtable.com/v0/appfdVgryCpn9yfZX/${tableName}?api_key=keyRsJYzEsQrpUF9n`;

    main();
    // return tableName;
}


let selectBlocks = document.querySelectorAll(".bblocks");
let blocks = [];

var month = [];
var monthInput = document.getElementById("inputValue");
var monthArray = []

async function getData(url){
    let response = await fetch(url);
    let jsonData = await response.json()
    return jsonData;
}

async function main(){
    apiData = await getData(apiURL);
    // console.log(apiURL);
    // console.log(apiData);

    blocks = document.getElementsByClassName("bblocks");

    for (let j = 0; j < blocks.length; j++){
        // console.log("blocks = " + blocks[j].clientWidth);
        // console.log("percentage = " + apiData.records[j].fields.percentage);
        scaleFactor = (apiData.records[j].fields.percentage) * 40;
        // console.log(scaleFactor);

        // console.log(j);
        blocks[j].style.transform = `scale(${scaleFactor})`;
        opacity = (apiData.records[j].fields.percentage) * 25;
        // console.log(opacity);
        // blocks[j].style.backgroundColor = `hsla(208.7, 86.8%, 20.8%, ${opacity})`;
        blocks[j].style.backgroundColor = `hsla(0, 0%, 100%)`;
    //     blocks[j].addEventListener('click', () =>{
    //         let company = document.createElement("h3");
    //         company.innerHTML = name;
    //         company.src = apiData.records[j].fields.name;
    //         console.log(company);
    //         document.querySelector(".bblocks").append(company);
    //         company.style.fontFamily = "helvetica";
    //         // company.style.float = "right";
    //   })


    }
}

main();
