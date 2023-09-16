var cancellable = function(fn, args, t) {
    fn(...args);
    let intervalId = setInterval(() => fn(...args), t)
    return () => clearInterval(intervalId)
};