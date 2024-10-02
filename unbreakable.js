function split(s,sub){
    let ar=[]
    let a=""
    for (let i=0;i<=s.length-sub.length;i++){
        let ss=""
        for (let j=i;j<sub.length+i;j++){
            ss=ss+s[j]
        }
        if (ss==sub){
            ar.push(a)
            a=""
        }else{
            a=a+s[i]
        }
    }
    if (a!=""){
        ar.push(a)
    }
    return ar
}
function join(s,sub){
    let ss=""
    for (let i=0;i<s.length;i++){
        ss=ss+s[i]
        if (i!=s.length-1){
            ss=ss+sub
        }
    }
    return ss
}
//console.log(split('ggg - ddd - b', ' - '))