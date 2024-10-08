function isValid(date){
    if (date-10===NaN){
        return false
    }
    return true
}
console.log((new Date('')-10))

function isAfter(d1,d2){
    if (d1-1<d2-1){
        return true
    }
    return false
}

function isBefore(d1,d2){
    if (d1-1>d2-1){
        return true
    }
    return false
}
function isPast(date){
    const n = Date.now()
    if (n-date>0){
        return true
    }
    return false
}
