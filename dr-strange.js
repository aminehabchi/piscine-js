function addWeek(date) {
    const weekdays = [
        'Monday',    
        'Tuesday',   
        'Wednesday', 
        'Thursday',  
        'Friday',    
        'Saturday',  
        'Sunday',    
        'secondMonday',   
        'secondTuesday', 
        'secondWednesday',
        'secondThursday',  
        'secondFriday',    
        'secondSaturday',  
        'secondSunday'     
    ];
    
    const nw = new Date('0001-01-01')
    const def = date-nw

    const day = Math.floor(def / (1000 * 60 * 60 * 24))
    return weekdays[day%14];
}

// console.log(addWeek(new Date('0001-01-01')))
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