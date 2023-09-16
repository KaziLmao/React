var map = function(an, fn) {
    let a = [];
    for(let i = 0; i < an.length; i++){
        a.push(fn(an[i], i));
    }
    return a
};