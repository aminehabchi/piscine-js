function deepCopy(obj,copy=[]){
    if (obj instanceof RegExp){
        return copy.push(new RegExp(obj))
    }
    if (Array.isArray(obj)){
        for (let i=0;i<obj.length;i++){
            if (typeof obj[i]=="object"){
                copy=deepCopy(obj[i],copy)
            }else{
                copy[copy.length]=obj[i]
            }
        }
        return copy
    }
    if (Array.isArray(copy)){
        copy={}
    }
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
