const map = (a, f) => {
    let result = []
    for (let i = 0; i < a.length; i++) {
        result.push(f(a[i],i,a))

    }
    return result
}

const flatMap = (arr,fn) => {
    return [].concat(...map(arr,fn))
}