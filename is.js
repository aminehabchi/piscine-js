const is={
    num:Number.isInteger,
    nan:isNaN,
    str:isString,
    bool:isBool,
    fun:isfunc,
    truthy:istruthy,
    obj:isobj,
    arr:isarr,
    def:isdef,
    undef:isUndef,
}
function isfalsy(s){
    if (typeof(s)=='falsy'){
        return true
    }
    return false
}
function istruthy(s){
    if (typeof(s)=='truthy'){
        return true
    }
    return false
}
function isfunc(s){
    if (typeof(s)=='function'){
        return true
    }
    return false
}
function isobj(s){
    if (typeof(s)==Object){
        return true
    }
    return false
}
function isarr(s){
    if (typeof(s)==Array){
        return true
    }
    return false
}
function isdef(s){
    if (typeof(s)=='defined'){
        return true
    }
    return false
}
function isUndef(s){
    if (typeof(s)==undefined){
        return true
    }
    return false
}
function isString(s){
    if (typeof(s)==String){
        return true
    }
    return false
}
function isBool(s){
    if (typeof(s)==Boolean){
        return true
    }
    return false
}