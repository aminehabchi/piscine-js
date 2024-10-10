function every(arr,func){
    for (let i=0;i<arr.length;i++){
        if (!func(arr[i],i,arr)){
            return false
        }
    }
    return true
}
function some(arr,func){
    let bl=false
    for (let i=0;i<arr.length;i++){
        if (func(arr[i],i,arr)){
            bl=true
        }
    }
    return bl
}
function none(arr,func){
    let bl=true
    for (let i=0;i<arr.length;i++){
        if (func(arr[i],i,arr)){
            bl=false
        }
    }
    return bl
}
