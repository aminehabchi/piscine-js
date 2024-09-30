function first(s){
    if (s.length==0){
        return undefined;
    }
    return s[0]
}
function last(s){
    if (s.length==0){
        return undefined;
    }
    return s[s.length-1];
}
function kiss(s){
    if (s.length==0){
        return undefined;
    }
    if (s.length==1){
        return [s[0]];
    }
    var arr=[s[s.length-1],s[0]]
    return arr;
}