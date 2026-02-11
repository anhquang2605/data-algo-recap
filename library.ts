export const selectionSort = (arr: number[]): number[] => {
    const len = arr.length;
    
    for (let i = 1; i < len - 1; i++) {
        let temp: number = arr[i];
        let left: number = i - 1;
        let gap: number = i;
        while(left >= 0) {
            
            if(temp < arr[left]) {
                //move the value at left to the right
                arr[left + 1] = arr[left];
                gap = left;
                left--;
                
            } else {
                break;
            }
        }

    }
    return arr;
}

//when gap is 0 or when the value compared is less than the value at the temp, end phase and insert the temp value at the correct position.