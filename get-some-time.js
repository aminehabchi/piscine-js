function firstDayWeek(n,s){
    n=n*7 
    const m=[31,28,31,30,31,30,31,31,30,31,30,31]
    if (isLeapYear(s)){
        m[1]=29
    }
    let j=0
    while (n>m[j]){
        n=n-m[j]
        j++
    }
    if (n<0){
        n*=-1
    }
    j+=1
    const date=new Date()
    date.setDate(n)
    date.setMonth(j)
    date.setFullYear(s)
   let day =n-date.getDay()-3
    if (day<0){
        if (j==1){
            n=1
        }else{
            j--
            n=m[j]+n
        }
    }else{
        n=day
    }
    if (n<10){
        n="0"+n
    }
    if (j<10){
        j="0"+j
    }
    return n+"-"+j+"-"+s
}
//  console.log(firstDayWeek(2, '0001')) //8
// console.log(firstDayWeek(52, '1000')) //'22-12-1000'













function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  }
