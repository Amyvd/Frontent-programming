const uitvoer = document.getElementById('uitvoer')
let dataObject;

const geefDagWeek = (num) => {
    switch (num) {
        case 0: return 'zondag'; break;
        case 1: return 'maandag'; break;
        case 2: return 'dinsdag'; break;
        case 3: return 'woensdag'; break;
        case 4: return 'donderdag'; break;
        case 5: return 'vrijdag'; break;
        case 6: return 'zaterdag'; break;
        default: return num;
    }
}
const maandnaam = (num) => {
    switch(num) {
        case 0: return 'januari'; break;
        case 1: return 'februari'; break;
        case 2: return 'maart'; break;
        case 3: return 'april'; break;
        case 4: return 'mei'; break;
        case 5: return 'juni'; break;
        case 6: return 'juli'; break;
        case 7: return 'augustus'; break;
        case 8: return 'september'; break;
        case 9: return 'oktober'; break;
        case 10: return 'november'; break;
        case 11: return 'december'; break;
        default: return num;
    }
}

const maakDatum = (num) => {
    // zet de string van de JS datum om in een betere vorm 
    let datum = new Date(num);

    let dagWeek = datum.getDay();
    let dagMaand = datum.getDate();
    let maand = datum.getMonth();
    let jaar = datum.getFullYear();
    let uren = datum.getHours();
    let minuten = datum.getMinutes();
    return `${geefDagWeek(dagWeek)} <br>
    ${dagMaand} ${maandNaam(maand)} ${jaar} ${uren}:${minuten} `;
}

const uitvoeren = () => {
    let html = "";
    dataObject.forEach( obj => {
        html += `<div class="rij">`;
        html += `<div>${obj.tijd}</div>`;
        html += `<div>${obj.tempBuiten}</div>`;
        html += `</div>`;
    })
    uitvoer.innerHTML = html;
}

const starten = () => {
    // de data array in onzez dataObject stoppen
    dataObject = EnergieData;
    // data uitvoeren
    uitvoeren();
}


document.addEventListener('DOMContentLoaded', starten);