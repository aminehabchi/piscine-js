function letterSpaceNumber(s) {
    const myregex = /[a-zA-Z]\s\d\D/
    const m=s.match(myregex) 
    return m
}