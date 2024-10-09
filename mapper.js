function map(arr,func){
    for (let i=0;i<arr.length;i++){
        arr[i]=func(arr[i],i,arr)
    }
    return arr
}

function flatMap(arr, func) {
    for (let i=0;i<arr.length;i++){
        arr[i]=func(arr[i],i,arr)
    }
    return arr.flat();
}
