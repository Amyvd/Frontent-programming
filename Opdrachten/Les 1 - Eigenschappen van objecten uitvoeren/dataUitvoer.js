const uitvoer = document.getElementById('uitvoer')
let dataObject;


const uitvoeren = () => {
    // deze functie voert de data uit in d e div met de ID uitvoer
    uitvoer.innerHTML = `<div>${dataObject[0].tijd}</div>`;
    uitvoer.innerHTML = `<div>${dataObject[1].tempBuiten}</div>`;
}

const starten = () => {
    // de data array in onzez dataObject stoppen
    dataObject = EnergieData
    // data uitvoeren
    uitvoeren();
}

document.addEventListener('DOMContentLoaded', starten)