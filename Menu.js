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
const button = document.querySelector('.btn'); console.log(button); button.style.backgroundColor = "hotpink"; // Sätter färg på knappen


//Loopar igenom alla text element och ändrar färg
textFieldsCollection.forEach(textField => { textField.style.color = 'blue'; }); 

// 4.4, Hämtar DIV med class namn, lägger myDiv i JS i samlingen myDivs.
const myDivs = document.getElementsByClassName('myDiv'); 
if (myDivs.length > 0) {  //kollar efter element i myDivs.
     const myDiv = myDivs[0];  // Tar första elementet i div samlingen.
     myDiv.textContent = 'Text för text'; //Ändrar eller sätter texten till vald text
}

//5, Skapar funktion för eventlyssnare
// Definiera funktionen som ska fungera som eventlyssnare
function writeInConsole(event) {
     // Skriv ut avsändaren (target) till konsolen
     console.log(event.target);
 
     // Ta reda på inputfältets (target) name-attribut
     const inputName = event.target.name;
 
     // Kontrollera om name-attributet är "content"
     if (inputName === "content") {
         // Hämta div-elementet
         const myDiv = document.querySelector('.myDiv');
 
         // Sätt innehållet (value) från inputfältet till div-elementet
         myDiv.innerHTML = event.target.value;
     }
 }
 
 // Hämta alla textfält
 const inputFields = document.querySelectorAll('input.textfield');
 
 // Lägg till eventlyssnaren till varje textfält
 textFieldsCollection.forEach(textField => {
     textField.addEventListener('input', inputFields);
 });
 
