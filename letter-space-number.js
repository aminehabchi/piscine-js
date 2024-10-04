function letterSpaceNumber(s) {
    const myregex = /[a-zA-Z]\s\d(?=\W)/g
   
    return s.match(myregex) 
}
//onsole.log(letterSpaceNumber("He is 8 or 9 years old, not 10."))