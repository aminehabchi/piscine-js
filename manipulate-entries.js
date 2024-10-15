function filterValues(nutrients, [k,v]) {
    let obj = {}
    Object.keys(nutrients).forEach(key => {
        if (k==key && v==nutrients[key]) {
            obj[key] 
        }
    });
    return obj
}




// function mapValues(nutrients, func) {
//     let obj = {}
//     Object.keys(nutrients).forEach(key => {
//         obj[key] = func(nutrients[key], key, nutrients)
//     });
//     return obj
// }
// function reduceValues(nutrients,func,acc=0){
//     Object.keys(nutrients).forEach(key => {
//         acc= func(acc,nutrients[key])
//     });
//     return acc
// }