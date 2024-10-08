function firstDayWeek(n,s){
    n=n*7 -6
    const m=[31,28,31,30,31,30,31,31,30,31,30,31]
    if (isLeapYear(s)){
        m[1]=29
    }
    let j=0
    while (n>m[j]){
        n=n-m[j]
        j++
    }
    if (n<0){
        n*=-1
    }
    j+=1
    if (j<10){
        j="0"+j
    }
    if (n<10){
        n="0"+n
    }
    //console.log(n,j)
    return n+"-"+j+"-"+s
}
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  }
// console.log(firstDayWeek(2, '0001'))