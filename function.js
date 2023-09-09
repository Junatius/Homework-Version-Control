function generateRandomArray(length) {
    const theArray = Array.from({ length : length }, () => 
        Math.floor(Math.random() * 50)+ 1);

    return theArray;
}

function separateTheArray(ArrayNumber) {
    const evenIndexarr = [];
    const oddIndexarr = [];

    for (let i = 0; i < ArrayNumber.length; i++) {
        if (i%2 === 0) {
            evenIndexarr.push(ArrayNumber[i]);
        } else {
            oddIndexarr.push(ArrayNumber[i]);
        }
    }

    return {
        evenIndexarr, oddIndexarr
    };
}

function totalValue(array) {
    var total = 0;

    for (value of array) {
        total += value;
    }

    return total;
}

function averageValue(array) {
    var average = 0;
    var total = 0;

    for (value of array) {
        total += value;
    }
    average = total/array.length;

    return average;
}

module.exports = { generateRandomArray, separateTheArray, totalValue, averageValue };
