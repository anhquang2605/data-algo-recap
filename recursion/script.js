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
        return  reverseString(str.slice(1)) + str[0];
    }
}

const sumOfArray = (arr) => {
    if(arr.length === 1){
        return arr[0];
    }
    return arr[0] + sumOfArray(arr.slice(1));
}

const countX = (str) => {
    const currentChar = str[0];
    if(str.length === 0){
        return 0;
    }
    if(currentChar === 'x'){
        return 1 + countX(str.slice(1));
    } else {
        return countX(str.slice(1));
    }

}
// for N = 9, consider sub problems that will includes step from N = 8, but also step from N = 7 (since someone can jump 2 steps), and step from N = 6 (since someone can jump 3 steps)
// requirement say that some one can jump 1, 2, 3 steps 
const stairCase = (steps) => {
    if(steps < 0){
        return 0;
    }
    if(steps === 0 || steps === 1){
        return 1;
    }
    return stairCase(steps - 1) + stairCase(steps - 2) + stairCase(steps - 3);

}

const subString = (str) => {
    if (str.length === 1){
        return [str[0]];
    }
    const firstChar = str[0];
    let remainingSubString = subString(str.slice(1));
    let result = [];
    for(let i = 0; i < remainingSubString.length; i++){
        let subString = remainingSubString[i];
        for(let j = 0; j < subString.length; j++){
            let copy = [...subString];
            result.push(
                copy.splice(j, 0, firstChar).join('')            );
            console.log(result);
        }
    }
    return result
}


const arr = [1, 2, 3, 4, 5, [6, 7, 8, [10 , 20] ], 9, 10];
const arr2 = [1, 2, 3, 4, 5];
const str = 'xoxoxoxoxoxoxoxoxo';
const str2 = 'abc';
const str3 = [...str2]
//printallNumber(arr);
console.log(reverseString('hello world'));
console.log(sumOfArray(arr2));
console.log(countX(str))
console.log(subString(str2));
console.log(str3.splice(1, 0, 'a'));