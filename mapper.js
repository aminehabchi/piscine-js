function map(arr,func){
    if (arr==null){
        return []
    }
    return arr.map((a)=>func(a))
}
const flatMap = (arr,fn) => {
    return [].concat(...map(arr,fn))
}