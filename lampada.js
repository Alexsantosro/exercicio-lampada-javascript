const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = "./imgs/acesa.jpg";
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = "./imgs/normal.jpg";
    }
}

function lampbroke() {
    lamp.src = "./imgs/quebrada.jpg";
}
turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseout', lampOff);
lamp.addEventListener('dblclick', lampbroke);