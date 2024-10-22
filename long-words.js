const checkLen=(s)=>s.length>=5;

function longWords(arr){
    return arr.every(checkLen)
}

const checkLen2=(s)=>s.length>=10;
function oneLongWord(arr){
    return arr.some(checkLen2)
}

const checkLen1=(s)=>s.length<7;
function noLongWords(arr){
    return arr.every(checkLen1)
}
