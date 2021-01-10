// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getSum, beDifferent, getDivision, getProduct} from '../modules/mathUtils.js';



const test = QUnit.test;

test('time to test a function', (expect) => {
    //This function should take two variables "fieldValue1" and "fieldValue2" and add them together to receive a sum as the result.
    const firstNumber = 9;
    const secondNumber = 4;
    const expected = 13;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getSum(firstNumber, secondNumber);

    //Expect
    // What is expected is that the actual result should equal the expected result, which is 13.
    expect.equal(actual, expected);
});

test('lets test the subtraction function', (expect) => {
    //This function should take two variable "fieldValue1" and "fieldValue2" and subtract them to receive a difference.  
    const firstNumber = 20;
    const secondNumber = 5;
    const expected = 15; 

    const actual = beDifferent(firstNumber, secondNumber);

    // What is expected is that the actual result should equal the expected result, which is 15.
    expect.equal(actual, expected);
});
test('lets test the division function', (expect) => {
    // This function should take two variables "fieldValue1" and "fieldValue2" and divide them to receive a quotient.
    const firstNumber = 81;
    const secondNumber = 9; 
    const expected = 9;

    const actual = getDivision(firstNumber, secondNumber);
// What is expected is that the actual result should equal the expeced result, which is 9.  
    expect.equal(actual, expected);
});
test('lets test the multiplication function', (expect => {
    // This function should take two variables "fieldValue1" and "fieldValue2" and multiply them to receive a product.
    const firstNumber = 8;
    const secondNumber = 7; 
    const expected = 56; 

    const actual = getProduct(firstNumber, secondNumber);
// What is expected is that the actual result should equal the expected result, which is 56.
    expect.equal(actual, expected);
}));
