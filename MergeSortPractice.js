function merge(arr, l, r, m) {
    let leftArr = arr.slice(l, m+1); // left included and right excluded index
    let rightArr = arr.slice(m+1, r+1); 

    let li = 0, ri = 0, i = l;
    while (li < leftArr.length && ri < rightArr.length) {
        if (leftArr[li] < rightArr[ri]) {
            arr[i++] = leftArr[li++];
        } else {
            arr[i++] = rightArr[ri++];
        }
    }

    while (li < leftArr.length) {
        arr[i++] = leftArr[li++];
    }

    while (ri < rightArr.length) {
        arr[i++] = rightArr[ri++];
    }
    console.log(`L: ${leftArr} and R: ${rightArr}, arr: ${arr}, l: ${l}, r: ${r}, m: ${m} ----`);

    return arr;
}

function mergeSortPartition(arr, l, r) {
    if (l >= r) { return; }
    let m = l + parseInt((r - l) / 2);

    mergeSortPartition(arr, l, m);
    mergeSortPartition(arr, m+1, r);
    return merge(arr, l, r, m);
}


let arr = [3, 4, 1, 5, 2];
console.log(`before: ${arr}`);
mergeSortPartition(arr, 0, arr.length - 1);
console.log(`after: ${arr}`);