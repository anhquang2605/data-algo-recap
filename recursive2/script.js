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
}