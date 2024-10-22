
const debounce = (func, time = 100) => {
    let timeout
    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            func(...args)
        }, time)
    }

}


const opDebounce = (func, time = 100, leading = false) => {
    let timeout
  
    return (...args) => {
        if (leading) {
            func.apply(this, args)
            leading  = false
        }
    
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            func.apply(this, args)
        }, time)
    }

}

