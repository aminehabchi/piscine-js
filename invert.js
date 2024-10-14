function invert(obj) {
    let newObj = {}
    for (const key in obj) {
        newObj[key]=obj[key]
    }
    return newObj
}