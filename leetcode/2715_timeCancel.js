var cancellable = function(fn, args, t) {
    let isCancelled = false;
    setTimeout(() => {
        if(!isCancelled){
            fn(...args)
        }
    }, t);

    return function(){
        isCancelled = true
    }
};