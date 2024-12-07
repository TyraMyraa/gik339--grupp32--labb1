// Bakgrundsfärg för hemsidan
document.body.style.backgroundColor = '#0e1424'; 

// 4.1, Hämtar checkboxen med namn.
const checkbox = document.getElementsByName('divStyle')[0];

// Ändrar färg på checkboxen.
checkbox.style.outline = '3px solid #25555f';

// 4.2, Hämta alla textfält
const textFieldsCollection = document.querySelectorAll('input.textfield');

// 4.3, Hämtar och deklarerar btn från HTML till button i JS
const button = document.querySelector('.btn'); 
console.log(button); 
button.style.backgroundColor = '#d39f63';

// Loopar igenom alla text element och ändrar färg och stil
textFieldsCollection.forEach(textField => {
    textField.style.color = '#0e1424';
    textField.style.border = '2px solid #25555f';
    textField.style.borderRadius = '4px';
}); 

// 4.4, Hämtar DIV med class namn, lägger myDiv i JS i samlingen myDivs.
const myDivs = document.getElementsByClassName('myDiv');
if (myDivs.length > 0) {
    const myDiv = myDivs[0];
    myDiv.textContent = 'Text för text';
}

// 5, Skapar funktion för eventlyssnare
function writeInConsole(event) {
    console.log(event.target);
    const inputName = event.target.name;

    if (inputName === 'content') {
        const myDiv = document.querySelector('.myDiv');
        myDiv.innerHTML = event.target.value;
    }
}

// Eventlyssnaren till varje textfält
textFieldsCollection.forEach(textField => {
    textField.addEventListener('input', writeInConsole);
});

// 6, 
// Eventlyssnare till checkboxen
checkbox.addEventListener('change', function() {
    const colorInput = document.querySelector('input#color');
    const color = colorInput.value;
     
    // Hämtar myDiv
    const myDiv = document.querySelector('.myDiv');
    
    // Ändra bakgrundsfärgen på text till valfri färg
    if (checkbox.checked) {
        myDiv.style.backgroundColor = color;
    // Tar bort bakgrundsfärgen på texten
    } else {
        myDiv.style.backgroundColor = '';
    }
});

// Eventlyssnare till knappen
button.addEventListener('click', function() {
    const myDiv = document.querySelector('.myDiv');
    if (myDiv) {
        myDiv.remove();
    }
});

// Skapa en container div och gör sidan fin
const container = document.createElement('div');
container.style.display = 'flex';
container.style.flexDirection = 'column';
container.style.alignItems = 'center';
container.style.justifyContent = 'center';
container.style.border = '5px solid #25555f';
container.style.padding = '20px';
container.style.backgroundColor = '#b3bdb2';
container.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
container.style.borderRadius = '10px';
container.style.width = 'fit-content';
container.style.margin = 'auto';
container.style.position = 'absolute';
container.style.top = '50%';
container.style.left = '50%';
container.style.transform = 'translate(-50%, -50%)';

// Flytta allt innehåll till containern
const header = document.querySelector('header');
header.style.fontFamily = 'Arial, sans-serif'; 
header.style.fontSize = '24px'; 
header.style.color = '#25555f';

const main = document.querySelector('main');
container.appendChild(header);
container.appendChild(main);

// Lägg till containern i body
document.body.appendChild(container);
