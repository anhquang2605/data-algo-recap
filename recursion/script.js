const countdown = (num) => {
    if(num === 0){
        return;
    } else {
        console.log(num);
        countdown(num - 1);
    }
}
const factorial = (num) => {
    if(num === 1){
        return num;
    } else {
        return num * factorial(num - 1);
    }
}

const printallNumber = (arr ) => {
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            printallNumber(arr[i]);
        } else {
            console.log(arr[i]);
        }
    }
}

const reverseString = (str) => {
    if(str.length === 1){
        return str;
    } else {
        return  reverseString(str.slice(1, str.length - 1)) + str[0];
    }
}

const sumOfArray = (arr) => {
    if(arr.length === 1){
        return arr[0];
    }
    return arr[0] + sumOfArray(arr.slice(1));
}

const arr = [1, 2, 3, 4, 5, [6, 7, 8, [10 , 20] ], 9, 10];
const arr2 = [1, 2, 3, 4, 5];
//printallNumber(arr);
console.log(reverseString('hello world'));
console.log(sumOfArray(arr2));