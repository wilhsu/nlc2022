let apiURL = "https://api.airtable.com/v0/appfdVgryCpn9yfZX/imported?api_key=keyRsJYzEsQrpUF9n";
let apiData;
let selectBlocks = document.querySelectorAll(".bblocks");
// let blockz = document.querySelectorAll("#block1");


async function getData(url){
    let response = await fetch(url);
    let jsonData = await response.json()
    return jsonData;
}

async function main(){
    apiData = await getData(apiURL);
    console.log(apiData);

    for(let i=0; i<apiData.records.length; i++){
        let per = apiData.records[i].fields.percentage;
        let percentageSize = (apiData.records[i].fields.percentage)*5000 + "px";
        console.log(per);
        console.log(percentageSize);

        const blockDiv = document.getElementById("blocks");
        const blockblock = document.createElement("div");
        blockblock?.setAttribute('id', 'block'+i);
        blockblock?.setAttribute('class', 'bblocks');
        // document.querySelector('#block13').style
        // blockblock?.setAttribute('class', 'row');
            blockblock.innerHTML = per;
            blockDiv.appendChild(blockblock);
            blockblock.style.width = percentageSize;
            blockblock.style.height = percentageSize;

    }

    // for (let block of selectBlocks){
    //     block.style.transform = "scale(2)";
    // }
}




main();

