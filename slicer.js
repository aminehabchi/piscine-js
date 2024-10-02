function slice(ar,x,y){
    let a=[]
    if (y==null){
        
        if (x<0){
            x=ar.length+x
            if (x<0){
                return ar
            }
        }
       
        if (x>ar.length){
            return [];
        }

        for (let i=x;i<ar.length;i++){
            a.push(ar[i])
        }
        
        return a
    }else{
        if (x<0){
            x=ar.length+x
            if (x<0){
                x=0
            }
        }
        if (y<0){
            y=ar.length+y
            if (y<0){
                y=0
            }
            
        }
        for (let i=x;i<y;i++){
            a.push(ar[i])
        }
    }
    return a
}
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(slice(animals,-1,-5));