// Bakgrundsfärg för hemsidan
document.body.style.backgroundColor = "pink"; 

// 4.1, Hämtar checkboxen med namn.
const checkbox = document.getElementsByName('divStyle')[0];

// Ändrar färg på checkboxen.
if (checkbox) {
    checkbox.style.outline = '3px solid hotpink';
}

// 4.2, Hämta alla textfält
const textFieldsCollection = document.querySelectorAll('input.textfield'); // Hämta alla textfält

// 4.3, Hämtar och deklarerar btn från HTML till button i JS
const button = document.querySelector('.btn'); 
console.log(button); 
button.style.backgroundColor = "hotpink"; // Sätter färg på knappen

// Loopar igenom alla text element och ändrar färg
textFieldsCollection.forEach(textField => { 
    textField.style.color = 'blue'; 
}); 

// 4.4, Hämtar DIV med class namn, lägger myDiv i JS i samlingen myDivs.
const myDivs = document.getElementsByClassName('myDiv'); 
if (myDivs.length > 0) {  // Kollar efter element i myDivs.
    const myDiv = myDivs[0];  // Tar första elementet i div samlingen.
    myDiv.textContent = 'Text för text'; // Ändrar eller sätter texten till vald text
}

// 5, Skapar funktion för eventlyssnare
function writeInConsole(event) {
    // Skriv till konsollen
    console.log(event.target);
    const inputName = event.target.name;

    if (inputName === "content") {
        // Hämta div-elementet
        const myDiv = document.querySelector('.myDiv');
        myDiv.innerHTML = event.target.value;
    }
}
// Hämta alla textfält
const inputFields = document.querySelectorAll('input.textfield');

// Eventlyssnaren till varje textfält
inputFields.forEach(textField => {
    textField.addEventListener('input', writeInConsole);
});

// Eventlyssnare till checkboxen
checkbox.addEventListener('change', function() {
     // Byter färg på bakgrunden på texten till den du skriver
     const colorInput = document.querySelector('input#color');
     const color = colorInput.value;
     
     // Hämtar div
     const myDiv = document.querySelector('.myDiv');
     
     if (checkbox.checked) {
         // Ändra bakgrundsfärgen på text till valfri färg
         myDiv.style.backgroundColor = color;
     } else {
         // Tar bort bakgrundsfärgen på texten
         myDiv.style.backgroundColor = '';
     }
 });
 
// Eventlyssnare till knappen
button.addEventListener('click', function() {
     alert('Button clicked');
 });