function countV(s,k){
    let c=0
    s=s.split('')
    for (let i=0;i<s.length;i++){
        if (Vowels(s[i])){
            c++
        }
    }
    if (c>=k){
        return true
    }
    return false
}
function duplicate(s){
    if (s==''){
        return false
    }
    let v=''
    for (let i=0;i<s.length;i++){
        if (v!='' && Vowels(s[i]) && s[i].toLowerCase()!=v){
            return false
        }
        if (Vowels(s[i])){
            v=s[i].toLowerCase()
        }
    }
    return true
}
function isValid(obj){
    if (obj.capital.length<8){
        return false
    }
    if (Vowels(obj.name[0])==false){
        return false
    }
    let bl=false
    for (let i=0;i<obj.tag;i++){
        if (Vowels(obj.tag[i])){
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

function filterShortStateName(arr){
    return arr.filter((s)=>s.length<=7)
}
function filterStartVowel(arr){
    return arr.filter((s) => Vowels(s[0]))
}

function filter5Vowels(arr){
    return arr.filter((s)=>countV(s,5))
}
function Vowels(s){
    if (s=='a' || s=='e' || s=='i' || s=='o' || s=='u'){
        return true
    }
    if (s=='A' || s=='E' || s=='I' || s=='O' || s=='U'){
        return true
    }
    return false
}

function filter1DistinctVowel(arr){
    return arr.filter((s)=> duplicate(s))
}

function multiFilter(arr){
    return arr.filter((o)=>isValid(o))
}

