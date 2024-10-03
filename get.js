function get(src, path) {
    const paths = path.split('.');
    let result = src;
    
    for (let i=0;i<paths.length;i++) {
      if (typeof(result[paths[i]])!==undefined){
        result=result[paths[i]]
      }else{
        return undefined
      }
    }
    return result;
  }
  