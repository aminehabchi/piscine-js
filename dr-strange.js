function addWeek(date) {
    let day = Number(date.getDate())%14;
    let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    if (day<7){
        return week[day]
    }else{
        return "second"+week[day-7]
    }
}
// console.log(addWeek(new Date('0001-03-01')))
// console.log(addWeek(new Date('0001-01-02')))
// console.log(addWeek(new Date('0001-01-07')))
// console.log(addWeek(new Date('0001-01-08')))
// console.log(addWeek(new Date('0001-01-09')))

function timeTravel(obj){
    obj.date.setHours(obj.hour);      
    obj.date.setMinutes(obj.minute);      
    obj.date.setSeconds(obj.second);
    return obj.date
}
// console.log(timeTravel({
//     date: new Date('2020-05-29 23:25:22'),
//     hour: 21,
//     minute: 22,
//     second: 22,
//   }).toString())