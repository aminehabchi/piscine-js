function dayOfTheYear(date){
    let y=date.getFullYear()
    if (y==0){
        y++
    }
    let d=new Date()
    d.setFullYear(y)
    d.setMonth(0)
    d.setDate(0)
    console.log(d)
    let def=date-d
    return Math.abs(Math.floor(def/(1000*60*60*24)+1))
}