const countdown = (num) => {
    if(num === 0){
        return;
    } else {
        console.log(num);
        countdown(num - 1);
    }
}

countdown(10);