function adder(arr){
    return arr.reduce((s,n)=>s+n,0)
}
function sumOrMul(arr,sum){
    if (arr[0]%2==0){
        arr[0]*=sum
    }else{
        arr[0]+=sum
    }
    return arr.reduce((s,n)=>{
        if (n%2==0){
            s*=n
        }else{
            s+=n
        }
        return s
    })
}
function funcExec(arr){
    return 0
}