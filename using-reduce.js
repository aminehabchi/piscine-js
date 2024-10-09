function adder(arr, st = 0) {
    return arr.reduce((s, n) => s + n, st)
}
function sumOrMul(arr, sum) {
    if (typeof(sum) != 'undefined') {
        if (arr[0] % 2 == 0) {
            arr[0] *= sum
        } else {
            arr[0] += sum
        }
    }
    return arr.reduce((s, n) => {
        if (n % 2 == 0) {
            s *= n
        } else {
            s += n
        }
        return s
    })
}
// const funcExec = (arr, i) => arr.reduce((a, c) => c(a), i??0)
