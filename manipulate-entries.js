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

     let res = {};
    for (let key in obj) {
        res[obj[key][0]] = obj[key][1];
    }
    return res;
}
function reduceEntries(nutrients, func, acc) {
    const keys = Object.keys(nutrients);
    if (typeof acc ==="undefined") {
        acc=keys[0]
    }else{
        acc = func(acc, [keys[0],nutrients[keys[0]]])
    }
    for (let i = 1; i < keys.length; i++) {
        acc = func(acc, [keys[i],nutrients[keys[i]]])
    }
    return acc
}
