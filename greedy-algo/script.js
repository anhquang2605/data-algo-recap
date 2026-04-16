const greatestSumInArray = (arr) => {
    let latestSum = 0;
    let greatestSum = 0;
    for (let i = 0; i < arr.length; i++) {
        latestSum = latestSum + arr[i];
        if (latestSum < 0) {
            latestSum = 0;
        } else if (latestSum > greatestSum) {
            greatestSum = latestSum;
        }
    }
    return greatestSum;
}
const arr = [3, -4, 4, -3,5,-9];
console.log(greatestSumInArray(arr));