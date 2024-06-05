'use strict'
const buttonClick = document.querySelector('button');
const changeColor = document.querySelector('body');

if(buttonClick) {
    let isOn = true;

function switcher() {
    let switchOn = new Date();
    let formattedDate = switchOn.toLocaleString();
    let date = document.createElement('p');

    if (isOn) {
        changeColor.style.backgroundColor = '#9595e5';
        buttonClick.textContent = "Turn on";
        date.innerHTML = "Last turn off: " + formattedDate;
    } else {
        changeColor.style.backgroundColor = '#e9e4ef';
        buttonClick.textContent = "Turn off";
        date.innerHTML = "Last turn on: " + formattedDate;
    }
   
    buttonClick.insertAdjacentElement('afterend', date);  
    localStorage.setItem(buttonClick.textContent, formattedDate);

    isOn = !isOn;
 }
buttonClick.addEventListener('click', switcher);
}
