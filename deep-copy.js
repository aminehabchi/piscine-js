function deepCopy(obj,copy={}){
    if (Array.isArray(obj)){
        if (copy.length==0){
            copy=[]
        }
        for (let i=0;i<obj.length;i++){
            if (typeof obj[i]=="object"){
                copy=deepCopy(obj[i],copy)
            }else{
                copy.push(obj[i])
            }
        }
        return copy
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