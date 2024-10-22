function letterSpaceNumber(s) {
    const myregex = /[a-zA-Z]\s\d(?!\w)/g
   const m=s.match(myregex)
   if (m==null){
    return []
   }
    return  m
}