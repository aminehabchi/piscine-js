function dayOfTheYear(date){
    let y=date.getFullYear()
    if (y==0){
        y++
    }
    let d=new Date(y,0,1)
    let def=date-d
    return Math.abs(Math.floor(def/(1000*60*60*24)+1))
}
