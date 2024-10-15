function filterEntries(nutrients, func) {
    let obj = {}
    Object.keys(nutrients).forEach(key => {
        if (func([key,nutrients[key]])) {
            obj[key]=nutrients[key] 
        }
    });
    return obj
}

function mapEntries(nutrients, func) {
    let obj = {}
    Object.keys(nutrients).forEach(key => {
        obj[key] = func([key, nutrients[key]])
    });
    return obj
}
// function reduceValues(nutrients,func,acc=0){
//     Object.keys(nutrients).forEach(key => {
//         acc= func(acc,nutrients[key])
//     });
//     return acc
// }