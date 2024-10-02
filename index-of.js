function indexOf(arr,v ,j){
    for (let i=j;i<arr.length;i++){
        if (arr[i]==v){
            return i
        }
    }
    return -1;
}
function lastIndexOf(arr,v ,j){
    let index=-1;
    for (let i=j;i<arr.length;i++){
        if (arr[i]==v){
            index=i;
        }
    }
    return index;
}
function includes(arr,v){
    for (let i=0;i<arr.length;i++){
        if (arr[i]==v){
            return true;
        }
    }
    return false;
}