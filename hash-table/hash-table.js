//this function take any arr and turn into a hash table
const hashTable = (arr) => {
    const hashTable = new Map();
    for (let i = 0; i < arr.length; i++) {
        if(!hashTable.has(arr[i])) {
            hashTable.set(arr[i], 1);
        } else {
            hashTable.set(arr[i], hashTable.get(arr[i]) + 1);
        }
    }
    return hashTable;
}

const firstNonDuplicate = (arr) => {
    //create a hash table to store the value of the arr
    const table = hashTable(arr);
    for ( const [key, value] of table) {
        if(value === 1) {
            return key;
        }
    }
}

const arr = [1, 2, 3, 4, 5, 1, 2, 3];
const arr2 = 'hello world';
console.log(firstNonDuplicate(arr2));

