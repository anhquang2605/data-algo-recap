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

countdown(10);