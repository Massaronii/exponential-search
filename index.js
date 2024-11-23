function binarySearch(nums, target, l, r) {
    while (l <= r) {
        var mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) {
            return mid;
        }
        else if (nums[mid] < target) {
            l = mid + 1;
        }
        else {
            r = mid - 1;
        }
    }
    return -1;
}

function exponentialSearch(arr, n) {
    if (arr[0] === n) {
        return 0;
    }
    var size = arr.length;
    var i = 1;

    while (i < size && arr[i] < n) {
        i *= 2;
    }

    if(arr[i] === n){
        return i
    }

    return binarySearch(arr, n, i/2, Math.min(i, size - 1));
}
var arr = [1, 2, 3, 4, 5, 10, 20, 40, 80];
console.log(exponentialSearch(arr, 10)); // Saída: 5
console.log(exponentialSearch(arr, 7)); // Saída: -1
var arr1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29];
console.log(exponentialSearch(arr1, 19)); // Saída: 9 (índice do elemento 19)
console.log(exponentialSearch(arr1, 4)); // Saída: -1 (não encontrado)
