function firstDayWeek(n,s){
    n=n*7 -6
    const m=[31,28,31,30,31,30,31,31,30,31,30,31]
    let j=0
    while (n>m[j]){
        n=n-m[j]
        j++
    }
    j+=1
    if (j<10){
        j="0"+j
    }
    if (n<10){
        n="0"+n
    }
    return n+"-"+j+"-"+s
}

console.log(firstDayWeek(5,'2020'))