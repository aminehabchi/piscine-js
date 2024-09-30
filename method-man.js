function words(s){
    return s.split(" ")
}
function sentence(s){
    return s.join(" ")
}
function yell(s){
    return s.toUpperCase()
}
function whisper(s){
    return "*"+toLowerCase()+"*"
}
function capitalize(s){
    let ss=""
    for (let i=0;i<s.length;i++){
        if (i==0){
            ss=ss+s[i].toUpperCase()
        }else{
            ss=ss+s[i].toLowerCase()
        }
    }
    return ss
}