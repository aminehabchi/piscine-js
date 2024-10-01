// Your function definitions
const arrToSet = (arr) => new Set(arr);
const arrToStr = (arr) => arr.join('');
const setToArr = (set) => Array.from(set);
const setToStr = (set) => Array.from(set).join('');
const strToArr = (str) => Array.from(str);
const strToSet = (str) => new Set(Array.from(str));
const mapToObj = (map) => {
    const obj = {};
    for (let [key, value] of map) {
        obj[key] = value;
    }
    return obj;
};
const objToArr = (obj) => Object.values(obj);
const objToMap = (obj) => new Map(Object.entries(obj));
const arrToObj = (arr) => {
    const obj = {};
    arr.forEach((value, index) => {
        obj[index] = value;
    });
    return obj;
};
const strToObj = (str) => {
    const obj = {};
    Array.from(str).forEach((char, index) => {
        obj[index] = char;
    });
    return obj;
};

const superTypeOf = (value) => {
    if (value === null) return 'null';
    if (Array.isArray(value)) return 'Array';
    return Object.prototype.toString.call(value).slice(8, -1);
};

// Example Test Function
const testSuperTypeOf = ({ eq }) => {
    eq(superTypeOf(new Map()), 'Map');
};

// Example of eq function for testing
const eq = (a, b) => a === b;

// Run the test
testSuperTypeOf({ eq });
