var escapeStr="\`\\/\"\'";

const arr =[4,'2'];
Object.freeze(arr)

const obj={
     str:'',
     num:0,
     bool:false,
     undef:undefined,
};
Object.freeze(obj);


const nested={
    arr:[4,undefined,'2'],
    obj:{
        str:'',
        num:0,
        bool:false,
    },
};

Object.freeze(nested);

Object.freeze(nested.obj);

Object.freeze(nested.arr);



