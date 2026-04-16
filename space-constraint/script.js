const reverseArray = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        // Swap elements at left and right indices
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    return arr;
}