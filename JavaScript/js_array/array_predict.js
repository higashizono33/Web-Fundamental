var arr = [8,6,7,5,3,0,9]
for(var i = 0; i < arr.length; i++){    
    console.log(arr[i]);
}

// i=0, 8
// i=1, 6
// i=2, 7
// i=3, 5
// i=4, 3
// i=5, 0
// i=6, 9

var arr = [7,3,8,4,2,0,1];
for(var i = 0; i < arr.length; i++){ 
    if(arr[i] % 2 == 0){
        console.log(arr[i]);
    } 
    else{
        console.log("That is odd!");
    }
}

// i=0, false "That is odd!"
// i=1, false "That is odd!"
// i=2, true 8
// i=3, true 4
// i=4, true 2
// i=5, true 0
// i=6, false "That is odd!"

var arr = [1,3,8,-5,0,-2,4,-1];
var newArr = [];
for(var i = 0; i< arr.length; i++){
    if(arr[i] < 0){
        newArr.push(arr[i]);
        arr[i] = arr[i] * -1;
    }
    else if(arr[i] == 0){
        arr[i] = "Zero";
    }
    else{
        arr[i] = arr[i] * -1;
    }
}
console.log(arr);
console.log(newArr);

// i=0, else:true arr[0]=-1
// i=1, else:true arr[1]=-3
// i=2, else:true arr[2]=-8
// i=3, if:true newArr[0]=-5 arr[3]=5, 
// i=4, else if:true arr[4]="Zero"
// i=5, if:true newArr[1]=-2 arr[5]=2, 
// i=6, else:true arr[6]=-4, 
// i=7, if:true newArr[2]=-1 arr[7]=1,

// arr[-1, -3, -8, 5, "Zero", 2, -4, 1]
// newArr[-5, -2, -1]
