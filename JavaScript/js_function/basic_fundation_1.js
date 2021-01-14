// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function to255() {
    var numbers = [];
    for(var i=1; i<=255; i++) {
        numbers.push(i);
    }

    return numbers
}
to255();

// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
function evenTo1000Sum() {
    var sum = 0;
    for(var i=1; i<=1000; i++) {
        if(i % 2 == 0) {
            // console.log(i);
            sum = sum + i;
        }
    }

    return sum;
}
evenTo1000Sum();

// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function oddTo5000Sum() {
    var sum = 0;
    for(var i=1; i<=5000; i++) {
        if(i % 2 != 0) {
            console.log(i);
            sum = sum + i;
        }
    }

    return sum;
}
oddTo5000Sum();

// Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function sumArr(arr) {
    var sum = 0;
    for(var i=0; i<arr.length; i++) {
        sum = sum + arr[i];
    }

    return sum;
}
var arr = [1,2,3,4,5];
sumArr(arr);

// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function maxArr(arr) {
    var max;
    for(var i=0; i<arr.length-1; i++) {
        if(arr[i] > arr[i+1]) {
            max = arr[i];
        } else {
            max = arr[i+1];
        }
        console.log(max);
    }

    return max;
}
var arr = [-3,3,5,7]
maxArr(arr);

// Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function avgArr(arr) {
    var sum = 0;
    for(var i=0; i<arr.length; i++) {
        sum = sum + arr[i];
    }

    var avg = sum / arr.length;
    
    return avg;
}
var arr = [1,3,5,7,20];
avgArr(arr);

// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function oddTo50Arr() {
    var arr = [];
    for(var i=1; i<=50; i++) {
        if(i % 2 != 0) {
            arr.push(i);
        }
    }

    return arr;
}
oddTo50Arr();
// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function greaterY(Y, arr) {    
    console.log(arr);
    var count = 0;
    for(var i=0; i<arr.length; i++) {
        if(arr[i] > Y) {
            count++;
        }
    }

    return count;
}
var Y = 3;
var arr = [1,3,5,7]
greaterY(Y, arr);

// Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
function square(arr) {
    var square = [];

    for(var i=0; i<arr.length; i++) {
        square.push(arr[i] * arr[i]);
    }

    return square;
}
var arr = [1,3,5,10]
square(arr);

// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function negativeTo0(arr) {
    var newArr = [];
    for(var i=0; i<arr.length; i++) {
        if(arr[i] < 0) {
            newArr.push(0);
        } else {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}
var arr = [1,3,5,-2];
negativeTo0(arr);

// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
function maxMinAvg(arr) {
    var max;
    for(var i=0; i<arr.length-1; i++) {
        if(arr[i] > arr[i+1]) {
            max = arr[i];
        } else {
            max = arr[i+1];
        }
    }
    var min;
    for(var i=0; i<arr.length-1; i++) {
        if(arr[i] < arr[i+1]) {
            min = arr[i];
        } else {
            min = arr[i+1];
        }
    }
    var sum = 0;
    for(var i=0; i<arr.length; i++) {
        sum = sum + arr[i];
    }
    var avg = sum / arr.length;
    
    newArr = [max, min, avg];
    return newArr;
}
var arr = [1,3,5,7,20];
maxMinAvg(arr);

// Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function swap(arr) {
    if(arr.length > 1) {
        var x = arr[0];
        arr[0] = arr[arr.length-1];
        arr[arr.length-1] = x;
    }

    return arr;
}
var arr = [1,3,5,7,20];
swap(arr);

// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function numToStr(arr) {
    for(var i=0; i<arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    return arr;
}
var arr = [1,3,-5,7,-20];
numToStr(arr);