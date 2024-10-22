function sameAmount(s,r1,r2){
    if (letterSpaceNumber(s,r1).length==letterSpaceNumber(s,r2).length){
        return true
    }
    return false
}
function letterSpaceNumber(s,r) {
    const myregex=new RegExp (r,"g")
    const m=s.match(myregex)
    if (m==null){
     return []
    }
     return  m
 }
