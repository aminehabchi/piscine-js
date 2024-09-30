is.num=isInteger
is.nan=isNaN
is.str=isString
is.bool=isBool
is.undef=isUndef
is.def=isdef
is.arr=isarr
is.obj=isobj
is.fun=isfunc
is.truthy=istruthy
is.falsy=isfalsy

function isInteger(s){
   
    return Number.isInteger
}

function isNaN(s){
    if (typeof(s)==NaN){
        return true
    }
    return false
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