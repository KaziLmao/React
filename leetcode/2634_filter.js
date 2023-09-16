var filter = function(arr, fn) {
    let a = []
    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i], i)){
            a.push(arr[i])
        }
    }
    return a
};