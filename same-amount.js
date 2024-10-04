function sameAmount(s,r1,r2){
    if (typeof(s)!='string'){
        return false
    }
    if (letterSpaceNumber(s,r1).length==letterSpaceNumber(s,r2).length){
        return true
    }
    return false
}
function letterSpaceNumber(s,myregex) {
    const m=s.match(myregex)
    if (m==null){
     return []
    }
     return  m
 }
//  const data=[]
//  console.log(sameAmount(data, /q /, /qqqqqqq/))