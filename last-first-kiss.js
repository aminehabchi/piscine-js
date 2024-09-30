function first(s){
    if (s.length==0){
        return '';
    }
    return s[0]
}
function last(s){
    if (s.length==0){
        return '';
    }
    return s[s.length-1];
}
function kiss(s){
    if (s.length==0){
        return '';
    }
    if (s.length==1){
        return [s[0]];
    }
    var arr=[s[0],s[s.length-1]]
    return arr;
}