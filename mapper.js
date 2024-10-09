function map(arr,func){
    if (arr==null){
        return []
    }
    let a=[]
    for (let i=0;i<arr.length;i++){
        a.push(func(arr[i]),i,arr)
    }
    return a
}
const flatMap = (arr,fn) => {
    return [].concat(...map(arr,fn))
}