

const result = []
function sums(n,arr=[],k=1) {
    let l = arr.length
    let a=[]
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < l; j++) {
            if (calcule(arr[j]) <= n) {
                let copiedArray = [...arr[j]]
                copiedArray.push(i)
                if (calcule(arr[j]) == n){
                    arr[j].sort()
                    result.push(arr[j])
                }else{
                    a.push(copiedArray)
                }
            }
        }
        a.push([i])
    }
    arr=a
    //console.log(a)
    if (k<n*n) {
        sums(n,arr,k+1)
    }
    return removeDuplicateSubarrays(result)
}
function calcule(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
// console.log(sums(5))
function removeDuplicateSubarrays(arr) {
    const uniqueSubarrays = new Set(arr.map(subArray => JSON.stringify(subArray)));
    return Array.from(uniqueSubarrays).map(subArray => JSON.parse(subArray));
}

