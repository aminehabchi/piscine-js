function invert(obj) {
     let newObj = {}
   
    let keys=Object.keys(obj);
    let values=Object.values(obj);

    for (let i=0;i<keys.length && i<values.length;i++){
   
        newObj[values[i]]=keys[i]

    }


    return newObj
}

// console.log(invert({ language: 'english' }));
// console.log(invert({ f: 5, __proto__: { d: 6 } }));