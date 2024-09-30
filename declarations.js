var escapeStr='\`\\/"\''

const arr =[4,'2']
Object.freeze(arr)

const obj={
     str:'',
     num:0,
     bool:false,
     undef:undefined,
};
Object.freeze(obj);
const obj1={
    str:'',
    num:0,
    bool:false,
};

Object.freeze(obj1)

const nested={
    arr:[4,undefined,'2'],
     obj:obj1
};



Object.freeze(nested.arr);

Object.freeze(nested.obj);

Object.freeze(nested);