function split(s,sub){
    const ar=[]
    let a=""
    for (let i=0;i<=s.length-sub.length;i++){
        let ss="";
        let j=i;
        while(ss.length<sub.length){
            ss=ss+s[j];
            j++;
        }
        // console.log(ss)
        if (ss==sub){
            ar.push(a)
            a=""
           i=i+sub.length-1
           if (i==s.length){
            ar.push(a)
           }
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
//console.log(split('rrrr', 'rr'))