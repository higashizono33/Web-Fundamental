for(var num = 0; num < 15; num++){
    console.log(num);
}

//num = 0
//num = 1
//num = 2
//num = 3
//num = 4
//num = 5
//num = 6
//num = 7
//num = 8
//num = 9
//num = 10
//num = 11
//num = 12
//num = 13
//num = 14

for(var i = 1; i < 10; i+=2){
    if(i % 3 == 0){
        console.log(i);
    }
}

//i = 1 False
//i = 3 True
//i = 5 False
//i = 7 False
//i = 9 True

//i = 3, i = 9 

for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}

// j = 1 False
// j = 2 if:True j + 2
// j = 5 False
// j = 6 True j + 2
// j = 9 else if:True j++
// j = 11 False
// j = 12 True j + 2
// j = 15 else if:True j++

// j = 1
// j = 4
// j = 5
// j = 8
// j = 10
// j = 11
// j = 14
// j = 16