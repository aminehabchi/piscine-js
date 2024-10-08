function isFriday(date){
    if (date.day==4){
        return true
    }
    return false
}
function isWeekend(date){
    if (date.day==5 || date.day==6){
        return true
    }
    return false
}
function isLeapYear(date){
    let year=date.getYear()
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return true
    }
    return false
}
function isLastDayOfMonth(date){
    let d=new Date(date.getYear(),date.getMonth(),1)
    let def=d-date
    def=def/(1000*60*60*24)
    const m = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (isLeapYear(year)) {
        m[1] = 29;
    }
    if (m[date.getMonth()]==def){
        return true
    }
    return false
}