
var myarr=[]
function flat(arr){
    for (let i=0;i<arr.length;i++){
        if (Array.isArray(arr[i])){
            myarr=flat(arr[i])
        }else{
            myarr.push(arr[i])
        }
    }
    return myarr
}