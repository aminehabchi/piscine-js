function letterSpaceNumber(s) {
    const myregex = /[a-zA-Z]\s\d(?=\W)/g
   const m=s.match(myregex)
   if (m==null){
    return []
   }
    return  m
}
// console.log(letterSpaceNumber("I like 7up."))