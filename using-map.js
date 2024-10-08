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

function fahrenheitToCelsius(arr){
    for (let i=0;i<arr.length;i++){
        console.log((arr[i].slice(0,arr[i].length-2)-32))
        arr[i]=Math.floor((arr[i].slice(0,arr[i].length-2)*5-32*5)/9)
    }
    return arr
}

// console.log(fahrenheitToCelsius(['68°F', '59°F', '25°F'])) // -> ['20°C', '15°C', '-4°C']);

function trimTemp(obj){
    for (let i=0;i<obj.length;i++){
        obj[i].temperature=trim(obj[i].temperature)
    }
    return obj
}

function trim(s){
    let ss=''
    s=s.split('')
    for (let i=0;i<s.length;i++){
        if (s[i]!=' '){
            ss=ss+s[i]
        }
    }
    return ss
}
function tempForecasts(obj){
    let arr=[]
    for (let i=0;i<obj.length;i++){
        let t=trim(obj[i].temperature)
        t=Math.floor((t.slice(0,t.length-2)*5-32*5)/9)

        arr.push(t+'°Celsius in '+obj[i].city+' '+obj[i].state)
    }
    return arr
}
// console.log(tempForecasts([
//     {
//       city: 'Pasadena',
//       temperature: ' 101 °F',
//       state: 'california',
//       region: 'West',
//     },
//   ]));