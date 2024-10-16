function defaultCurry(obj) {
    return function (a) {
        return Object.assign({}, obj, a)
    }
}
function mapCurry(func) {
    return function (obj) {
        let arr=Object.entries(obj).map(([key, value]) => func([key, value]))
        let newobj={}
        for (let i=0;i<arr.length;i++){
            newobj[arr[i][0]]=arr[i][1]
        }
        return newobj
    }
}

function reduceCurry(func) {
    return function (obj, acc) {
        if (acc == 'undefined') {
            acc = ""
        }  
        return Object.entries(obj).reduce((a, [key, v]) => func(a, [key, v]), acc)
    }
}
