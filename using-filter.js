function Vowels(s){
    if (s=='a' || s=='e' || s=='i' || s=='o' || s=='u'){
        return true
    }
    if (s=='A' || s=='E' || s=='I' || s=='O' || s=='U'){
        return true
    }
    return false
}
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
function filterShortStateName(arr){
    return arr.filter((s)=>s.length<7)
}
function filterStartVowel(arr){
    return arr.filter((s) => Vowels(s[0]))
}

function filter5Vowels(arr){
    return arr.filter((s)=>countV(s,5))
}


function filter1DistinctVowel(arr){
    return arr.filter((s)=> duplicate(s))
}


function multiFilter(arr) {
    arr = arr.filter((item) => {
        let capital = item.capital.length >= 8;
        let name = !/^[aeiou]/i.test(item.name);
        let tag = /[aeiou]/i.test(item.tag);
        let region = item.region !== "South";
        return capital && name && tag && region;
    });
    return arr;
}