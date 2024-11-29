const button = document.querySelector('.btn'); console.log(button); //Hämtar och deklarerar btn från HTML till button i JS
button.style.backgroundColor = "hotpink"; // Sätter färg på knappen
document.body.style.backgroundColor = "pink"; // Bakgrundsfärg för hemsidan

const textFieldsCollection = document.querySelectorAll('input.textfield'); // Hämta alla textfält
textFieldsCollection.forEach(textField => { textField.style.color = 'blue'; }); //Loopar igenom alla text element och ändrar färg

const myDivs = document.getElementsByClassName('myDiv'); // Hämtar DIV med class namn, lägger myDiv i JS i samlingen myDivs.
if (myDivs.length > 0) {  //kollar efter element i myDivs.
     const myDiv = myDivs[0];  // Tar första elementet i div samlingen.
     myDiv.textContent = 'Text för text'; //Ändrar eller sätter texten till vald text
}