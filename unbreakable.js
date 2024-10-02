function split(s, sub) {
    if (s === ''){
        return [''];
    } 
    if (sub === ''){
       return [s];  
    } 
    
    const arr = [];
    let currentSegment = '';
    let index = 0;

    while (index < s.length) {
        if (s.slice(index, index + sub.length) === sub) {
            arr.push(currentSegment);
            currentSegment = '';
            index += sub.length; 
        } else {
            currentSegment += s[index]; 
            index++;
        }
    }
    
    if (currentSegment) {
        arr.push(currentSegment);
    }
    return arr;
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