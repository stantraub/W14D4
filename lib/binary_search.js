function binarySearch(array, target) {
    if (array.length === 0) {
        return false;
    }

    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid + 1);

    if (target < array[mid]) {
        return binarySearch(left, target);
    } else if (target > array[mid]) {
        return binarySearch(right, target)
    } else {
        return true;
    }
}

function binarySearchIndex(array, target) {
    if (array.length === 0) return -1;

    const mid = Math.floor(array.length / 2);
    if (array[mid] > target) {
        return binarySearchIndex(array.slice(0, mid), target);
    } else if (array[mid] < target) {
        let res = binarySearchIndex(array.slice(mid + 1), target);
        return res === -1 ? -1 : res + mid + 1;
    } else {
        return mid;
    }
}


module.exports = {
    binarySearch,
    binarySearchIndex
};