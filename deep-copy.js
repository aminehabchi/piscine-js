function deepCopy(obj,copy={}){
    let keys=Object.keys(obj)
    for (let i=0;i<keys.length;i++){
        if (typeof obj[keys[i]]=="object"){
            copy=deepCopy(obj[keys[i]],copy)
        }else{
            copy[keys[i]]=obj[keys[i]]
        }
    }
    return copy
}