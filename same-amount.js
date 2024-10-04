function sameAmount(s,r1,r2){
    if (typeof(s)!='string'){
        return false
    }
    const m=s.match(r1)
    const m1=s.match(r2)
    if (m.length==m.length){
        return true
    }
    return false
}

