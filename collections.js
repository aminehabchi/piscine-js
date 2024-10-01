

const arrToSet=(a) => new Set(a)
const arrToStr=(a) => a.join('')
const setToArr=(a) => [...a]

const setToStr=(a) => [...a].join('')
const strToArr=(a) => a.split('')

const strToSet=(a) => new Set(a)

const objToArr=(a) => Object.entries(obj)

const objToMap=(a) => new Map(Object.entries(obj));




// Convert Array to Object
function arrToObj(arr) {
    let obj = {};
    arr.forEach((item, index) => {
        obj[index] = item;
    });
    return obj;
}

// Convert String to Object
function strToObj(str) {
    let obj = {};
    str.split('').forEach((char, index) => {
        obj[index] = char;
    });
    return obj;
}

function mapToObj(map) {
    let obj = {};
    map.forEach((value, key) => {
        obj[key] = value;
    });
    return obj;
}