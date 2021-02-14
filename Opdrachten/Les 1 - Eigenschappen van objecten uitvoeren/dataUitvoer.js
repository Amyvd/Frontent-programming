const uitvoer = document.getElementById('uitvoer')
let dataObject;


const uitvoeren = () => {
    let html = "";
    dataObject.forEach( obj=> {
        html += `<div class="rij">`;
        html += `<div>${obj.tijd}</div>`;
        html += `<div>${obj.tempBuiten}</div>`;
        html += `</div>`;
    })
    uitvoer.innerHTML = html;
}

const starten = () => {
    // de data array in onzez dataObject stoppen
    dataObject = EnergieData
    // data uitvoeren
    uitvoeren();
}


document.addEventListener('DOMContentLoaded', starten)