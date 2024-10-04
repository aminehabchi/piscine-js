function letterSpaceNumber(s) {
    const myregex = /[a-zA-Z]\s\d(?![^a-zA-Z])/g
    return s.match(myregex) 
}