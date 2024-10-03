function get(src, path) {
    let p = path.split('.');
    let result = src;
    for (let i=0;i<p.length;i++) {
      if (result[p[i]]!==undefined){
        result=result[p[i]]
      }else{
        return undefined
      }
    }
    return result;
  }