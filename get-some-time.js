function firstDayWeek(weekNum, yearNum) {

    let year = new Date(yearNum, 0, 1);
    let adj = (year.getDay() === 0 ? 6 : year.getDay() - 1); 
    year.setDate(year.getDate() - adj);
    let firsOfWeek = new Date(year);
    firsOfWeek.setDate(firsOfWeek.getDate() + 7 * (weekNum - 1));
    if (firsOfWeek.getFullYear() < yearNum) {
        return '01-01-' + yearNum;
    }
    return firsOfWeek.getDate().toString().padStart(2, '0') + '-' +
        (firsOfWeek.getMonth() + 1).toString().padStart(2, '0') + '-' +
        firsOfWeek.getFullYear().toString().padStart(4, '0');
}