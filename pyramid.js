function pyramid(s,n){
    let o=""
    for (let i=0;i<n;i++){
        for (let j=0;j<n-i-1;j++){
            o=o+" "
        }
        for (let j=0;j<=i*2;j++){
            o=o+s
        }
        if (i!=n-1){
            o=o+"\n"
        }
        
    }
    return o
}