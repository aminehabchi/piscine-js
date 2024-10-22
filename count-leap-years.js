function countLeapYears(date){
    let years=date.getFullYear()
    let c=0;
    for (let i=1;i<years;i++){
        if (isLeapYear(i)){
            c++
        }
    }
    return c
}
function isLeapYear(year){
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return true
    }
    return false
}
//  console.log(countLeapYears(new Date('1664-08-09')))