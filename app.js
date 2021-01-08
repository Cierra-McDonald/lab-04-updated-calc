import {getSum, beDifferent, getDivision, getProduct} from './mathUtils.js';

// initialize state

// set event listeners to update state and DOM


const additionField1 = document.getElementById("additionBox1");
const additionField2 = document.getElementById("additionBox2");
const summationButton = document.getElementById("sumButton");
const addResults = document.getElementById("add-results");

const subtractField1 = document.getElementById("subtractionBox1");
const subtractField2 = document.getElementById("subtractionBox2");
const subButton = document.getElementById("subtractionButton");
const subResults = document.getElementById("sub-results");

const divField1 = document.getElementById("divisionBox1")
const divField2 = document.getElementById("divisionBox2")
const divisionButton = document.getElementById("divButton")
const divyResults = document.getElementById("divResults")
   

const multiField1 = document.getElementById("multiplyBox1");
const multiField2 = document.getElementById("multiplyBox2");
const multiplyButton = document.getElementById("multiButton");  
const multiplyResults = document.getElementById("multiResults");
    

summationButton.addEventListener('click', () => {
     const fieldValue1 = Number(additionField1.value)
     const fieldValue2 = Number(additionField2.value)
     const results = fieldValue1+ fieldValue2;
         console.log(results)
    
        const sum = getSum(fieldValue1, fieldValue2);

    addResults.textContent = results;
})

subButton.addEventListener('click', () => {
     const subValue1 = Number(subtractField1.value)
     const subValue2 = Number(subtractField2.value)
     const resultsResults = subValue1- subValue2;
        console.log(resultsResults)

        const diff = beDifferent(subValue1, subValue2)

    subResults.textContent = resultsResults;
})
divisionButton.addEventListener('click', () => {
     const divValue1 = Number(divField1.value)
     const divValue2 = Number(divField2.value)
     const resultsRResults = divValue1/ divValue2
        console.log(resultsRResults)
    
        const quotient = getDivision(divValue1, divValue2);

        divyResults.textContent = resultsRResults;
})
multiplyButton.addEventListener('click', () => {
     const mutValue1 = Number(multiField1.value)   
     const mutValue2 = Number(multiField2.value) 
     const multipleResults = mutValue1* mutValue2
        console.log(multipleResults)

        const product = getProduct(mutValue1, mutValue2);

        multiplyResults.textContent = multipleResults;
    })
