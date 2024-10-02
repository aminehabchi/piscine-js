function RNA(s){
    let ss=""
    for (let i=0;i<s.length;i++){
        if (s[i]=='G'){
            ss=ss+'C'
        }else if (s[i]=='C'){
            ss=ss+'G'
        }else if (s[i]=='T'){
            ss=ss+'A'
        }else if (s[i]=='A'){
            ss=ss+'U'
        }
    }
    return ss
}
function DNA(s){
    let ss=""
    for (let i=0;i<s.length;i++){
        if (s[i]=='C'){
            ss=ss+'G'
        }else if (s[i]=='G'){
            ss=ss+'C'
        }else if (s[i]=='A'){
            ss=ss+'T'
        }else if (s[i]=='U'){
            ss=ss+'A'
        }
    }
    return ss
}