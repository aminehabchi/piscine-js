function filterShortStateName(arr){
    return arr.filter((s)=>s.length<=7)
}
function filterStartVowel(arr){
    return arr.filter((s) => checkV(s[0]))
}

function filter5Vowels(arr){
    return arr.filter((s)=>check(s,5))
}
function checkV(s){
    if (s=='a' || s=='e' || s=='i' || s=='o' || s=='u'){
        return true
    }
    if (s=='A' || s=='E' || s=='I' || s=='O' || s=='U'){
        return true
    }
    return false
}
function check(s,k){
    let c=0
    s=s.split('')
    for (let i=0;i<s.length;i++){
        if (checkV(s[i])){
            c++
        }
    }
    if (c>=k){
        return true
    }
    return false
}
function filter1DistinctVowel(arr){
    return arr.filter((s)=> check2(s))
}
function check2(s){
    if (s==''){
        return false
    }
    let v=''
    for (let i=0;i<s.length;i++){
        if (v!='' && checkV(s[i]) && s[i].toLowerCase()!=v){
            return false
        }
        if (checkV(s[i])){
            v=s[i].toLowerCase()
        }
    }
    return true
}
function multiFilter(arr){
    return arr.filter((o)=>check3(o))
}
function check3(obj){
    if (obj.capital.length<8){
        return false
    }
    if (checkV(obj.name[0])==false){
        return false
    }
    let bl=false
    for (let i=0;i<obj.tag;i++){
        if (checkV(obj.tag[i])){
            bl=true
        }
    }
    if (bl==false){
        return false
    }

    if (obj.region=="South"){
        return false
    }
}

