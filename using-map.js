citiesOnly([
    {
      city: 'Los Angeles',
      temperature: '  101 °F   ',
    },
    {
      city: 'San Francisco',
      temperature: ' 84 ° F   ',
    },
  ])

function citiesOnly(citys){
    let m= new Map()
    for (let i=0;i<citys.length;i++){
        m.set(citys[i].city,true)
    }
    let arr =[]
    for (let [key, _] of m) {
        arr.push(key)
    }
    return arr
}
function upperCasingStates(arr){
    let m= new Map()
    for (let i=0;i<arr.length;i++){
        m.set(arr[i],true)
    }
    let ar =[]
    for (let [key, _] of m) {
        ar.push(capitalize(key))
    }
    return ar
}
function capitalize(s){
    return s[0].toUpperCase()+s.slice(1)
}




