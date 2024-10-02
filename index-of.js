function indexOf(arr,v ,j){
    if (typeof(j)==="undefined"){
        j=0
    }
    for (let i=j;i<arr.length;i++){
        if (arr[i]==v){
            return i
        }
    }
    return -1;
}
function lastIndexOf(arr,v ,j){
    if (typeof(j)==="undefined"){
        j=0
    }
    let index=-1;
    for (let i=j;i<arr.length;i++){
        if (arr[i]==v){
            index=i;
        }
    }
    return index;
}
function includes(arr,v,j){
    if (typeof(j)==="undefined"){
        j=0
    }
    for (let i=j;i<arr.length;i++){
        if (arr[i]==v){
            return true;
        }
    }
    return false;
}
//console.log(indexOf([1, 2, 3, 4, 5, 4, 3, 2, 1], 2))