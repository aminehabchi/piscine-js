function filterKeys(nutrients, func) {
    let obj = {}
    Object.keys(nutrients).forEach(key => {
        if (func( key)) {
            obj[key] = nutrients[key]
        }
    });
    return obj
}
function mapKeys(nutrients, func) {
    let obj = {}
    Object.keys(nutrients).forEach(key => {
        obj[key] = func( key)
    });
    return obj
}
function reduceKeys(nutrients,func,acc=""){
    Object.keys(nutrients).forEach(key => {
        acc= func(acc,nutrients[key])
    });
    return acc
}
