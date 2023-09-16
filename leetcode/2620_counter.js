var createCounter = function(n) {
    return function() {
        for(let i = 0; i<3; i++){
          return n++
        }
    };
};