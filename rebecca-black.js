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
// function isLastDayOfMonth(date){
//     let d=new Date(date.getYear(),date.getMonth(),1)
//     let def=d
//     def=def/(1000*60*60*24)
//     console.log(def)
//     const m = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     if (isLeapYear(date)) {
//         m[1] = 29;
//     }
//     if (m[date.getMonth()]==def){
//         return true
//     }
//     return false
// }
// console.log(isFriday(new Date('2024-10-11')))