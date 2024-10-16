function pronoun(str){
    let w=str.split(' ')
    let obj={}
    let pronoun=""
    for (let i=0;i<w.length;i++){
        
        if (check(w[i])){
            if (obj.hasOwnProperty(w[i])){
                obj[w[i]].count++
            }else{
                obj[w[i].toLowerCase()]={word:[],count:1}
            }
            pronoun=w[i]
        }
        if (pronoun!="" && !check(w[i])){
            obj[pronoun].word.push(w[i])
            pronoun=""
        }
    }
    return obj
}
function check(word){
    word=word.toLowerCase()
    let Pronouns=["i","you","he","she","it","they","we"]
    for (let i=0;i<Pronouns.length;i++){
        if (word==Pronouns[i]){
            return true
        }
    }
    return false
}
