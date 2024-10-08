function firstDayWeek(weekNum, yearNum) {

    let yearStart = new Date(yearNum, 0, 1);

    let dayOfWeek = (yearStart.getDay() === 0 ? 6 : yearStart.getDay() - 1); 

    yearStart.setDate(yearStart.getDate() - dayOfWeek);

    let firstOfWeek = new Date(yearStart);
    firstOfWeek.setDate(firstOfWeek.getDate() + 7 * (weekNum - 1));

    if (firstOfWeek.getFullYear() < yearNum) {
        return '01-01-' + yearNum;
    }

    return firstOfWeek.getDate().toString().padStart(2, '0') + '-' +
           (firstOfWeek.getMonth() + 1).toString().padStart(2, '0') + '-' +
           firstOfWeek.getFullYear();
}
