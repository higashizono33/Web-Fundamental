// Print each array value and the sum so far
// The expected output will be: 

var testArr = [6,3,5,1,2,4]
var sum = 0;

for(var i=0; i<testArr.length; i++) {
    sum = sum + testArr[i];
    console.log('Num ' + testArr[i] + ',' + ' Sum ' + sum);
}

// Multiply each value in the array by its array position
// The expected output will be:

var result = []; //value * position

for(var i=0; i<testArr.length; i++) {
    result.push(testArr[i] * i);
    // console.log(result);
}

console.log(result);