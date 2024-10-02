function chunk(myar,size){
    if (size<=0){
        return [myar]
    }
    let arr=[]
    let a=[]
    for (let i=0;i<myar.length;i++){
        if (a.length==size){
            arr.push(a)
            a=[myar[i]]
        }else{
            a.push(myar[i])
        }
    }
    if (a.length!=0){
        arr.push(a)
    }
    return arr
}
