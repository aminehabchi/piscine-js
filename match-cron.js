function matchCron(s,date){
    s=s.split(" ")
   if (s[0]!="*" && Number(s[0])!=date.getMinutes()){
    return false
   }
   if (s[1]!="*" && Number(s[0])!=date.getHours()){
    return false
   }
   if (s[2]!="*" && Number(s[0])!=date.getDate()){
    return false
   }
   if (s[3]!="*" && Number(s[0])!=date.getMonth()){
    return false
   }
   if (s[4]!="*" && Number(s[0])!=date.getDay()){
    return false
   }
   return true
}
// console.log(matchCron('9 * * * *', new Date('2020-05-30 19:09:00')))
// console.log(matchCron('9 * * * *', new Date('2020-05-30 19:09:00')))
// console.log(matchCron('9 * * * *', new Date('2020-05-30 19:21:00')))