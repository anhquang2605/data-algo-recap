class SortableArray {
    constructor(arr) {
        this.arr = arr;
    }
    partition = (low, high) => {
        const pivotIndex = high;
        const pivotValue = this.arr[pivotIndex];
        high --;
        while (true){
            while (this.arr[low] < pivotValue) {
                low++;
            }
            while (this.arr[high] > pivotValue) {
                high--;
            }
            if (low >= high) {
                break;
            } else {
                let temp = this.arr[low];
                this.arr[low] =  this.arr[high];
                this.arr[high] = temp;
            }
            low++;
        }
        let temp = this.arr[low];
        this.arr[low] = this.arr[pivotIndex];
        this.arr[pivotIndex] = temp;
        return low;
    }
    quickSort = (low, high) => {
        if (high - low <= 0){
            return;
        }
        const pivotIndex = this.partition(low, high);
        this.quickSort(low, pivotIndex - 1);
        this.quickSort(pivotIndex + 1, high);
    }
    quickSelect = (low, high, k) => {
        if(high - low <= 0){//base case when there is only one element left in the array, return that element
            return this.arr[low];
        }
        const pivotIndex = this.partition(low, high);
        if(k < pivotIndex){
            return this.quickSelect(low, pivotIndex - 1, k);
        } else if (k > pivotIndex) {
            return this.quickSelect(pivotIndex + 1, high, k);
        } else {
            return this.arr[pivotIndex];    
        }
    }
}

const greatestProductOFThree = (arr) => {
    const sortableArray = new SortableArray(arr);
    const length = arr.length;
    const sortedArr = sortableArray.quickSort(0, arr.length - 1);
    const greatestProduct = sortedArr[length - 1] * sortedArr[length - 2] * sortedArr[length - 3];
    return greatestProduct;
}

let arr = [1, 10, 2, 6, 5, 3];
console.log(greatestProductOFThree(arr));