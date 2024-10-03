
var myarr=[]
function flat(arr,j){
    if (j===undefined){
        j=Infinity
    }
    for (let i=0;i<arr.length;i++){
        if (Array.isArray(arr[i]) && j!=0){
            myarr=flat(arr[i],j-1)
        }else{
            myarr.push(arr[i])
        }
    }
    return myarr
}
//console.log(flat([1, [2]]))