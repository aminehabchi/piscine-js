function invert(obj) {
    let newObj = {}
    for (const key in obj) {
        newObj[obj[key]]=key
    }
    return newObj
}
// console.log(invert({ language: 'english' }));