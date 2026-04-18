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
const stockPredictor = (prices) => {
    let minLowPrice = prices[0];
    let middleLowPrice = Infinity;
    let largeLowPrice = Infinity;
    for (let i = 1; i < prices.length; i++) {
        let current = prices[i];
        if (current < minLowPrice) {
            minLowPrice = current;
        } else if (current > minLowPrice && current < middleLowPrice) {
            middleLowPrice = current;
        } else if (current > middleLowPrice && current < largeLowPrice) {
            largeLowPrice = current;
        }
    }
    if(largeLowPrice === Infinity || minLowPrice === Infinity) {
        return [];
    }
    return [minLowPrice, middleLowPrice, largeLowPrice];
}

const prices = [5, 10, 4, 6, 8];
console.log(stockPredictor(prices));

const playersPlayMoreThanTwoSports = (sport1, sport2) => {
    const hashMap = {};
    const result = [];
    for (let i = 0; i < sport1.length; i++) {
        const thePlayer = sport1[i];
        const playerName = thePlayer.first + thePlayer.last;
        hashMap[playerName] = 1;
    }
    for (let i = 0; i < sport2.length; i++) {
        const thePlayer = sport2[i];
        const playerName = thePlayer.first + thePlayer.last;
        if (hashMap[playerName]) {
            hashMap[playerName]++;
            result.push(thePlayer);
        }
    }
    
    return result;
}
const sport1 = [
    {first: 'John', last: 'Smith'},
    {first: 'Jane', last: 'Doe'},
    {first: 'John', last: 'Doe'},
    {first: 'Jane', last: 'Smith'},
    {first: 'John', last: 'Doe'},
    {first: 'Jane', last: 'Doe'},
];
const sport2 = [
    {first: 'John', last: 'Smith'},
    {first: 'Jane', last: 'Doe'},
];
console.log(playersPlayMoreThanTwoSports(sport1, sport2));