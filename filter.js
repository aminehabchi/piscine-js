function filter(arr,func){
    let a=[]
    for (let i=0;i<arr.length;i++){
        if (func(arr[i],i,arr)){
            a.push(arr[i])
        }
    }
    return a
}
function reject(arr,func){
    let a=[]
    for (let i=0;i<arr.length;i++){
        if (!func(arr[i],i,arr)){
            a.push(arr[i])
        }
    }
    return a
}

function partition(arr,func){
    let a=[]
    let b=[]
    for (let i=0;i<arr.length;i++){
        if (!func(arr[i],i,arr)){
            a.push(arr[i])
        }else{
            b.push(arr[i])
        }
    }
    return [b,a]
}

