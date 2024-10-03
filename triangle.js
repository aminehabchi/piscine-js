function triangle(s,n){
    let o=""
    for (let i=0;i<n;i++){
        for (let j=0;j<=i;j++){
            o=o+s
        }
        if (i!=n-1){
            o=o+"\n"
        }
    }
    return o
}