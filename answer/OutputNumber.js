const { generateRandomArray, separateTheArray, totalValue, averageValue } = require('./function');

const theArray = generateRandomArray(100);
console.log("Answer for Expected Output Number 1");
console.log("Array with 100 index : ", theArray, "\n");

const { evenIndexarr, oddIndexarr } = separateTheArray(theArray);

console.log("Answer for Expected Output Number 2 & 3");
console.log("Even Index Array : ", evenIndexarr);
console.log("Odd Index Array : ", oddIndexarr, "\n");

evenIndexarr.sort((a, b) => a - b);
oddIndexarr.sort((a, b) => a - b);

const minNumber1 = evenIndexarr[0];
const maxNumber1 = evenIndexarr[evenIndexarr.length - 1];
const minNumber2 = oddIndexarr[0];
const maxNumber2 = oddIndexarr[oddIndexarr.length - 1];

console.log("Answer for Expected Output Number 4 & 5");
if (minNumber1 > minNumber2) {
    console.log("Even Array minimum value is bigger than Odd Array with comparison :"
    , minNumber1, ">", minNumber2, "\n");
} else if (minNumber1 < minNumber2) {
    console.log("Odd Array minimum value is bigger than Even Array with comparison :"
    , minNumber2, ">", minNumber1, "\n");
} else {
    console.log("Both minimum value of Array is same with", minNumber1, "Value\n");
}

if (maxNumber1 > maxNumber2) {
    console.log("Even Array maximum value is bigger than Odd Array with comparison :"
    , maxNumber1, ">", maxNumber2, "\n");
} else if (maxNumber1 < maxNumber2) {
    console.log("Odd Array maximum value is bigger than Even Array with comparison :"
    , maxNumber2, ">", maxNumber1, "\n");
} else {
    console.log("Both maximum value of Array is same with", maxNumber1, "Value\n");
}

const averageEvenarray = averageValue(evenIndexarr);
const averageOddarray = averageValue(oddIndexarr);

if (averageEvenarray > averageOddarray) {
    console.log("Even Array average value is :", averageEvenarray, 
    "\nOdd Array average value is :", averageOddarray, 
    "\nSo Even Array average value is Bigger\n");
} else if (averageEvenarray < averageOddarray) {
    console.log("Even Array average value is :", averageEvenarray, 
    "\nOdd Array average value is :", averageOddarray, 
    "\nSo Odd Array average value is Bigger\n");
} else {
    console.log("Even Array average value is :", averageEvenarray, 
    "\nOdd Array average value is :", averageOddarray, 
    "\nSo Both Array average value is equal\n");
}

const totalEvenarray = totalValue(evenIndexarr);
const totalOddarray = totalValue(oddIndexarr);

if (totalEvenarray > totalOddarray) {
    console.log("Even Array Total value is :", totalEvenarray, 
    "\nOdd Array Total value is :", totalOddarray, 
    "\nSo Even Array Total value is Bigger");
} else if (totalEvenarray < totalOddarray) {
    console.log("Even Array Total value is :", totalEvenarray, 
    "\nOdd Array Total value is :", totalOddarray, 
    "\nSo Odd Array Total value is Bigger");
} else {
    console.log("Even Array Total value is :", totalEvenarray, 
    "\nOdd Array Total value is :", totalOddarray, 
    "\nSo Both Array Total value is equal");
}