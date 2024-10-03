const result = [];

function sums(n, arr = [], k = 1) {
    let a = [];
    
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (calcule(arr[j]) <= n) {
                let copiedArray = [...arr[j]];
                copiedArray.push(i);
                
                copiedArray.sort((a, b) => a - b)
                
                if (calcule(copiedArray) === n) {
                    result.push(copiedArray);
                } else if (calcule(copiedArray) < n) {
                    a.push(copiedArray);
                }
            }
        }
        a.push([i]);
    }
    
    arr = a;
    
    if (k < n) {
        sums(n, arr, k + 1);
    }

    return removeDuplicateSubarrays(result);
}


function calcule(arr) {
    return arr.reduce((sum, value) => sum + value, 0);
}


function removeDuplicateSubarrays(arr) {
    const uniqueSubarrays = new Set(arr.map(subArray => JSON.stringify(subArray)));
    return Array.from(uniqueSubarrays).map(subArray => JSON.parse(subArray));
}


//console.log(sums(6));  
