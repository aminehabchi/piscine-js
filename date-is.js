function isValid(date){
    if (isNaN(date)){
        return false
    }
    return true
}
console.log(isValid(new Date('')))

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
