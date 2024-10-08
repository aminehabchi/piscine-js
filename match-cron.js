function matchCron(s,date){
    s=s.split(" ")
   if (s[0]!="*" && Number(s[0])!=date.getMinutes()){
    return false
   }
   if (s[1]!="*" && Number(s[1])!=date.getHours()){
    return false
   }
   if (s[2]!="*" && Number(s[2])!=date.getDate()){
    return false
   }
   if (s[3]!="*" && Number(s[3])!=date.getMonth()){
    return false
   }
   if (s[4]!="*" && Number(s[4])!=date.getDay()){
    return false
   }
   return true
}
// console.log(matchCron('9 * * * *', new Date('2020-05-30 19:09:00')))
// console.log(matchCron('9 * * * *', new Date('2020-05-30 19:09:00')))
// console.log(matchCron('9 * * * *', new Date('2020-05-30 19:21:00')))
// console.log(matchCron('* * * * 1', new Date('2020-06-01 00:00:00')))