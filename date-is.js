function isValid(date){
    if (isNaN(date) || typeof(date)=='string'){
        return false
    }
    return true
}
console.log(isValid(''))

function isAfter(d1,d2){
    if (!isValid(d1) || !isValid(d2)){
        return false
    }
    if (d1>d2){
        return true
    }
    return false
}

function isBefore(d1,d2){
    if (!isValid(d1) || !isValid(d2)){
        return false
    }
    if (d1<d2){
        return true
    }
    return false
}
function isFuture(date){
    if (!isValid(date)){
        return false
    }
    const n = Date.now()
    if (n-date<0){
        return true
    }
    return false
}
function isPast(date){
    if (!isValid(date)){
        return false
    }
    const n = Date.now()
    if (n-date>0){
        return true
    }
    return false
}

