import { calculateHandler } from './handlers.js';
// ***Un-comment the import below if you want to undo the 'calculateHandle refractor***
// import { mySumButton, mySubButton, myDivButton, myMultButton, calculateHandler } from './handlers.js';
import { getSum, beDifferent, getDivision, getProduct } from '/modules/mathUtils.js';
// initialize state

// set event listeners to updatse state and DOM
const additionField1 = document.getElementById('additionBox1');
const additionField2 = document.getElementById('additionBox2');
const summationButton = document.getElementById('sumButton');
const addResults = document.getElementById('add-results');

const subtractField1 = document.getElementById("subtractionBox1");
const subtractField2 = document.getElementById("subtractionBox2");
const subButton = document.getElementById("subtractionButton");
const subResults = document.getElementById("sub-results");

const divField1 = document.getElementById("divisionBox1");
const divField2 = document.getElementById("divisionBox2");
const divisionButton = document.getElementById("divButton");
const divyResults = document.getElementById("divResults");
   

const multiField1 = document.getElementById("multiplyBox1");
const multiField2 = document.getElementById("multiplyBox2");
const multiplyButton = document.getElementById("multiButton");  
const multiplyResults = document.getElementById("multiResults");


summationButton.addEventListener('click', () => {

    calculateHandler(additionField1, additionField2, getSum, addResults);

    // mySumButton(additionField1, additionField2, addResults);
});
subButton.addEventListener('click', () => {
    calculateHandler(subtractField1, subtractField2, beDifferent, subResults);
    // mySubButton(subtractField1, subtractField2, subResults);
});
divisionButton.addEventListener('click', () => {
    calculateHandler(divField1, divField2, getDivision, divyResults);
    // myDivButton(divField1, divField2, divyResults);
});
multiplyButton.addEventListener('click', () => {
    calculateHandler(multiField1, multiField2, getProduct, multiplyResults);
    // myMultButton(multiField1, multiField2, multiplyResults);
});


