function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function firstDayWeek(n, s) {
    if (n==1){
        return '01-01-'+s
    }
    const year = parseInt(s);
    const m = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (isLeapYear(year)) {
        m[1] = 29;
    }

    const d = new Date(year, 0, 1); 
    let firstWeekDay = d.getDay(); 

    
    if (firstWeekDay !== 0) {
        n -= 1;
        m[0] -= firstWeekDay; 
    }

    n *= 7; 

    let month = 0;
    while (n > m[month]) {
        n -= m[month]; 
        month++;
    }

    d.setDate(n);
    d.setMonth(month); 
    d.setFullYear(year);

    const day = d.getDate().toString().padStart(2, '0');
    const formattedMonth = (month + 1).toString().padStart(2, '0'); 

    return `${day}-${formattedMonth}-${s}`;
}
//  console.log(firstDayWeek(1, '1000')); //'01-01-1000'
// console.log(firstDayWeek(2, '0001')); //'08-01-0001'
// console.log(firstDayWeek(52, '1000')); //'22-12-1000'
// console.log(firstDayWeek(43, '1983')); //'17-10-1983'
