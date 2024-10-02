function get(src, path) {
    const paths = path.split('.');
    let result = src;
    
    for (const key of paths) {
      if (result === null || result === undefined || typeof result !== 'object') {
        return undefined;
      }
      result = result[key];
    }
    
    return result;
}
