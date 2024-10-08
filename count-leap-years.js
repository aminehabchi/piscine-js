function countLeapYears(date){
    let years=date.getFullYear()
    return Math.floor(years/4)
}
// console.log(countLeapYears((new Date('0005-01-09'))))