export const hashTable = (arr: number[]) => {
    const hashTable: number[] = new Array(arr.length).fill(0);
    for (let i = 0; i < arr.length; i++) {
        hashTable[arr[i]] = 1;
    }
    return hashTable;
}



