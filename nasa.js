function nasa(N){
    let o=""
    for (let i=1;i<=N;i++){
        if (i%3==0 && i%5==0){
            o=o+"NASA"
        }else if (i%3==0){
            o=o+"NA"
        }else if (i%5==0){
            o=o+"SA"
        }else{
            o=o+i
        }
        if (i!=N){
            o=o+" "
        }
    }
    return o
}