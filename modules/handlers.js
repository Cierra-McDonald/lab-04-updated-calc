import { beDifferent, getDivision, getSum, getProduct } from './mathUtils.js';

export function mySumButton(additionField1, additionField2, addResults){
    const fieldValue1 = Number(additionField1.value);
    const fieldValue2 = Number(additionField2.value);
    const sum = getSum(fieldValue1, fieldValue2);
    addResults.textContent = sum;
    return;
}

export function mySubButton(subtractField1, subtractField2, subResults){
    const fieldValue1 = Number(subtractField1.value);
    const fieldValue2 = Number(subtractField2.value);
    const difference = beDifferent(fieldValue1, fieldValue2);
    subResults.textContent = difference;
    return;
}
export function myDivButton(divField1, divField2, divyResults) {
    const fieldValue1 = Number(divField1.value);
    const fieldValue2 = Number(divField2.value);
    const quotient = getDivision(fieldValue1, fieldValue2);
    divyResults.textContent = quotient;
    return;
}
export function myMultButton(multiField1, multiField2, multiplyResults) {
    const fieldValue1 = Number(multiField1.value);
    const fieldValue2 = Number(multiField2.value);
    const product = getProduct(fieldValue1, fieldValue2);
    multiplyResults.textContent = product;
    return;
}