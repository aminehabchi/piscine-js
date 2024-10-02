function split(s,sub){
    if (s==sub){
        return ['']
    }
    const arr=[]
    let a=""
    while (s.length!==0){
        if (s.length>=sub.length && keepFirst(s,sub.length)==sub){
            arr.push(a)
            s=remove(s,sub.length)
            a=""
            if (s===''){
                arr.push(a)
            }
            
        }else{
            a=a+s[0]
            s=remove(s,1)
        }
    }
    if (a!==""){
        arr.push(a)
    }
    return arr
}
//console.log(split('ee,ff,g,', ','))
function remove(s,k){
    let ss=""
    for (let i=k;i<s.length;i++){
        ss=ss+s[i]
    }
    return ss
}
function keepFirst(s,j){
    if (j>s.length){
        return ''
    }
    let ss=""
    for (let i=0;i<j;i++){
        ss=ss+s[i]
    }
    return ss
}
function join(s,sub){
    let ss="";
    for (let i=0;i<s.length;i++){
        ss=ss+s[i];
        if (i!==s.length-1){
            ss=ss+sub;
        }
    }
    return ss;
}