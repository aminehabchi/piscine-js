function reverse(ar){
    if (Array.isArray(ar)){
        let a=[]
        for (let i=ar.length-1;i>=0;i--){
            a.push(ar[i])
        }
        return a
    }
    let a=""
    for (let i=ar.length-1;i>=0;i--){
          a=a+ar[i]
    }
    return a
}