function invert(obj) {
    let newObj = {}
    for (const key in obj) {
        newObj.push({ key: obj[key] })
    }
    return newObj
}