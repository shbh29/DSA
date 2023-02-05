//the method creates two separate array and merges to them in sorted manner.
function merge(arr, l, r, m) {

    // copy array elements in separate array
    let L = arr.slice(l, m+1);
    let R = arr.slice(m+1, r+1);
    
    
    let li = 0, ri = 0, i = l;
    while (li < L.length && ri < R.length) {
        if (L[li] < R[ri]) {
            arr[i++] = L[li++];
        } else {
            arr[i++] = R[ri++];
        }
    }

    while(li < L.length) {
        arr[i++] = L[li++];
    }

    while(ri < R.length) {
        arr[i++] = R[ri++];
    }
    console.log(`L: ${L} and R: ${R}, arr: ${arr}, l: ${l}, r: ${r}, m: ${m} ----`);

    return arr;
}

// this method partitions the merge sort.
function partition(arr, l, r) {
    if (l >= r) { return; }
    let m = l + parseInt((r-l)/2);

    partition(arr, l, m);
    partition(arr, m+1, r);
    return merge(arr, l, r, m);
}


let arr = [5,2,4,1,3];
console.log(`before: ${arr}`);
arr = partition(arr, 0, arr.length -1);
console.log(`after: ${arr}`);