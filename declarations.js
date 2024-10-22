const escapeStr="\`\\/\"\'";

const arr =Object.freeze([4,'2']);

const obj=Object.freeze({
     str:'',
     num:0,
     bool:false,
     undef:undefined,
});



const nested={
    arr:Object.freeze([4,undefined,'2']),
    obj:Object.freeze({
        str:'',
        num:0,
        bool:false,
    }),
};

Object.freeze(nested);
