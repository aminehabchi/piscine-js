function fold(arr,func,acc=0){
    for (let i=0;i<arr.length;i++){
        acc=func(acc,arr[i])
    }
    return acc
}

function foldRight(arr,func,acc=0){
    for (let i=arr.length-1;i>=0;i--){
        acc=func(acc,arr[i])
    }
    return acc
}


function reduce(arr,func,acc){
    if (arr.length==0){
        return 'Error'
    }
    let j=0
    if (acc==undefined){
        acc=arr[0]
        j=1
    }
    for (let i=j;i<arr.length;i++){
        acc=func(acc,arr[i])
    }
    return acc
}
function reduceRight(arr,func,acc){
    if (arr.length==0){
        return 'Error'
    }
    let j=0
    if (acc==undefined){
        acc=arr[arr.length-1]
        j=arr.length-2
    }
    for (let i=j;i>=0;i--){
        acc=func(acc,arr[i])
    }
    return acc
}



