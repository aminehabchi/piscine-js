function isFriday(date){
    if (date.getDay()==5){
        return true
    }
    return false
}
 function isWeekend(date){
    if (date.getDay()==5 || date.getDay()==6){
        return true
    }
    return false
}
function isLeapYear(date){
    let year=date.getYear()+1900
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return true
    }
    return false
}
function isLastDayOfMonth(date){
    let def= date.getDate()
   

    const m = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (isLeapYear(date)) {
        m[1] = 29;
    }
    if (m[date.getMonth()]==def){
        return true
    }
    return false
}
// console.log(isLastDayOfMonth(new Date('2024-10-31')))