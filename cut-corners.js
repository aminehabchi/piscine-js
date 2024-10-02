
// const nums = [3.7, -3.7, 3.1, -3.1]
// console.log(nums.map(round))
// console.log(nums.map(floor))
// console.log(nums.map(trunc))
// console.log(nums.map(ceil))

function ceil(n){
    if (get(n)==0){
        return n
    }
    if (n<0){
        return n+get(n)
    }
    return n-get(n)+1
}
function floor(n){
    if (get(n)==0){
        return n
    }
    if (n<0){
        return n+get(n)-1
    }
    return n-get(n)
}

function round(n){
    if (n<0){
        let a=get(n)
        if (a*-1>=-0.5){
            return trunc(n)
        }
        return trunc(n)-1
    }
    if (get(n)>=0.5){
        return trunc(n)+1
    }
    return trunc(n)
}
//console.log(get(-3.7))
function trunc(a) {
    if (a>-1 && a<1){
        return 0
    }
    if (a<0){
        return a+get(a)
    }
    return a-get(a)
}
function get(a){
    if (a>-1 && a<1){
        return a
    }
    if (a<0){
        a=a*-1
    }
    while (a/10<0){
        a/=10
    } 
    while (a>0){
        if (a-1<0){
            break
        }
        a-=1
    } 
    return a
}