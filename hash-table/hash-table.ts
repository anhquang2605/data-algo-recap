//this function take any arr and turn into a hash table
export const hashTable = (arr: any[]) => {
    const hashTable: number[] = new Array(arr.length).fill(0);
    for (let i = 0; i < arr.length; i++) {
        hashTable[arr[i]] = 1;
    }
    return hashTable;
}

export const firstNonDuplicate = (arr: any[]) => {
    //create a hash table to store the value of the arr
    const table = hashTable(arr);
    for (let i = 0; i < arr.length; i++) {
        if(table[arr[i]] === 1) {

        }
    }

}



