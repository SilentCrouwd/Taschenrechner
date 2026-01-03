
const display = document.getElementById('display');
const contextMenue = document.getElementById('operator');
const contextAuswahl = document.getElementById('operator');
const cheatAuswahl = document.getElementById('cheating')
const cheatMenue = document.getElementById('cheating')
function appendToDisplay(input) {

    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function summery() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = 'fehler';
    }
}
contextMenue.addEventListener('change', function () {
    const choosed = contextAuswahl.value;



    if (choosed === '%') {
        try {
            // Erst das aktuelle Ergebnis ausrechnen, dann durch 100 teilen
            let currentVal = eval(display.value);
            display.value = currentVal / 100;
        } catch (e) {
            display.value = 'Fehler';
        }
    }
    else if (choosed === '?') {
        display.value = display.value;
    }
    else {
        display.value = 'Fehler';

    }
});
cheatMenue.addEventListener('change', function () {
    const cheatChoosed = cheatAuswahl.value;

    if (cheatChoosed === 'rechteck') {

        display.value = 'u=2xa+2xb';
    }
    else if (cheatChoosed === 'kreis') {
        display.value = 'd=2xr';
    }
    else if (cheatChoosed === 'quadrat') {
        display.value = 'u=4xa';
    }
    else {
        display.value = '';
    }

});
function backgroundchange(input) {
    let chossedImg = input;

    const meinContainer = document.getElementById('taschenrechner');
    if (chossedImg === '1') {
        meinContainer.style.backgroundImage = "url('img/winter.jpg')";
        meinContainer.style.backgroundSize = 'cover';
              meinContainer.style.backgroundPosition = 'center';
              meinContainer.style.backgroundRepeat = 'no-repeat';
    }
    else if (chossedImg === '2') {
        meinContainer.style.backgroundImage = "url('img/mounton.jpg')";
          meinContainer.style.backgroundSize = 'cover';
          meinContainer.style.backgroundPosition = 'center';
          meinContainer.style.backgroundRepeat = 'no-repeat';
    }
    else if (chossedImg === '3') {
        meinContainer.style.backgroundImage = "url('img/stone.jpg')";
          meinContainer.style.backgroundSize = 'cover';
          meinContainer.style.backgroundPosition = 'center';
          meinContainer.style.backgroundRepeat = 'no-repeat';
    }
    else {

        alert('Fehler Standart wird hergestellt ');
        meinContainer.style.backgroundImage = "url('img/dragon.jpg')";


    }
}
