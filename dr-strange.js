function addWeek(date) {


    let day = date.getDate()%31;
   
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    //console.log(day)
    if (day<7){
        return days[day]
    }else{
        return "second"+days[day-7]
    }
}

//console.log(addWeek(new Date('0001-01-01')))
// console.log(addWeek(new Date('0001-01-02')))
// console.log(addWeek(new Date('0001-01-07')))
// console.log(addWeek(new Date('0001-01-08')))
// console.log(addWeek(new Date('0001-01-09')))

function timeTravel(obj) {
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