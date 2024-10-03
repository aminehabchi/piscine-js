function pyramid(s,n){
    let o=""
    let k=1
    for (let i=0;i<n;i++){
        for (let j=0;j<n-i-1;j++){
            for (let k=0;k<s.length;k++){
                 o=o+" "
            }

        }
        for (let j=0;j<k;j++){
            o=o+s
        }
       if (i!=n-1){
            o=o+"\n"
       }
       k+=2
    }
    
    return o
}