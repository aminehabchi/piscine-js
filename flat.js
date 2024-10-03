function flat(arr, j = 1) {
    let myarr = []
    for (let i = 0; i < arr.length; i++) {
        if (i in arr) {
            if (Array.isArray(arr[i])) {
                if (j > 0) {
                    let c = flat(arr[i], j - 1)
                    myarr.push(...c)
                } else {
                    myarr.push(arr[i])
                }
            } else if (arr[i] !== undefined) {
                myarr[myarr.length] = arr[i]
            }
        }
    }
    return myarr
}

// const b = [1, , 3, ["a", , ["d", , "e"]]];
// console.log(flat(b)); // [ 1, 3, "a", ["d", empty, "e"] ]
// console.log(flat(b, 2)); // [ 1, 3, "a", "d", "e"]
