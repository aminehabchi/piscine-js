const opThrottle = (func, delay, leading = false, trailing = false) => {
    let shouldWait = false;
    let waitingArgs;
    let timeoutId;

    const executeFunc = (args) => {
        func(...args);
        shouldWait = true;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            if (trailing && waitingArgs) {
                func(...waitingArgs);
                waitingArgs = null;
            }
            shouldWait = false;
        }, delay);
    };

    return (...args) => {
        if (shouldWait) {
            waitingArgs = args;
            return;
        }

        if (leading) {
            executeFunc(args);
        } else {
            shouldWait = true;
            waitingArgs = args;
            timeoutId = setTimeout(() => {
                executeFunc(waitingArgs);
                waitingArgs = null;
            }, delay);
        }
    };
};
const throttle = (func,delay)=>{
    let shouldwait = false
    let waitingargs
    return (...args) =>{
        if (shouldwait) {
            waitingargs = args
            return
        } 
        func(...args)
        shouldwait = true
        setTimeout (()=>{
            shouldwait = false
           func(waitingargs)
        },delay)
    }
}