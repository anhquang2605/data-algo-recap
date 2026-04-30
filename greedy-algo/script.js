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

const findMissingNumber = (arr) => {
   let i = 0;
   let j = 1;
   if(arr[0] !== 0) {
       return 0;
   }
    while (j < arr.length) {
        let current = arr[i];
        let next = arr[j];
        if (current + 1 === next) {
            i++;
            j++;
        } else {
            return current + 1;
        }
    } 
}
const arr2 = [1, 2, 3, 5, 6];
const arr3 = [0, 1, 2, 3, 4, 5, 6];
console.log(findMissingNumber(arr2));
console.log(findMissingNumber(arr3));
const greatestProfitStock = (prices) => {
    let minPrice = prices[0];
    let greatestProfit = 0;
    let currentProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        currentProfit = prices[i] - minPrice;
        if (currentProfit > greatestProfit) {
            greatestProfit = currentProfit;
        }
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
    }
    return greatestProfit;
}
const stockPrices = [10, 7, 5, 2, 8, 11, 9];
console.log(greatestProfitStock(stockPrices));
const findGreatestProduct = (arr) => {
    let greatestProduct = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let product = arr[i] * arr[j];
            if (product > greatestProduct) {
                greatestProduct = product;
            }
        }
    }
    return greatestProduct;
}
const findGreatestProductOptimized = (arr) => {
    let greatestProduct = 0;
    let greatestNum = 0;
    let secondGreatestNum = 0;
    let smallestNum = 0;
    let secondSmallestNum = 0;
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        if (current > greatestNum) {
            secondGreatestNum = greatestNum;
            greatestNum = current;
        } else if (current > secondGreatestNum) {
            secondGreatestNum = current;
        } else if (current < smallestNum) {
            secondSmallestNum = smallestNum;
            smallestNum = current;
        } else if (current < secondSmallestNum) {
            secondSmallestNum = current;
        }
    }
    greatestProduct = Math.max(greatestNum * secondGreatestNum, smallestNum * secondSmallestNum);
    return greatestProduct;
}
const sortTempReading = (temps) => {
    let tempStore = new Array(20);
    let maxDiff = 0;
    let result = [];
    for (let i = 0; i < temps.length; i++) {
        let current = temps[i];
     
        let diff = Math.round((current - 97) * 10);
        if(maxDiff < diff){
            maxDiff = diff;
        }
        if(tempStore[diff]){
            tempStore[diff] += 1;
        } else {
            tempStore[diff] = 1;
        }
        
    }
    for(let i = 0; i <= maxDiff; i += 1){
        let currentCount = tempStore[i];
        if(currentCount){
            for (let j = 0; j < currentCount; j += 1){
                result.push(97 +  i / 10);
            }
        }
    }
    return result;
}
const longestConsecutiveSequence = (arr) => {
    let longestSequence = 1;
    arr.sort((a, b) => a - b);
    //after sorting
    for(let i = 0; i < arr.length; i++){
        let current = arr[i];
        let next = arr[i + 1];
        if(current + 1 === next){
            longestConsecutiveSequence++;
        }
    }
    if (longestSequence === 1) {
        return 0;
    } 
    return longestSequence;
}

const arr4 = [1, 4, -5, -8 , 2];

const temp = [97.0, 99.0, 98.0 , 99.0, 98.9, 97.9, 98.1, 97.2]; //range from 97.0 to 99.0

console.log(sortTempReading(temp));

