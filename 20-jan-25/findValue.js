//given a array with infinite elements and a target element, find the index of the target element in the array
//if the target element is not present return -1
 const binarySearch = (array, target, low, high) => {
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);  
        if (array[mid] === target) {
            console.log(`Value found at index ${mid}`);
            return mid;
        } else if (array[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;  
}

const findTarget = (array, target) => {
    let low = 0;
    let high = 1;
    
    // Finding the range for binary search
    while (target > array[high]) {
        low = high;
        high = 2 * high;
    }
    
    return binarySearch(array, target, low, high);
}



let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 10; 
let result = findTarget(array, target);

if (result === -1) {
    console.log("Target not found in the array.");
}