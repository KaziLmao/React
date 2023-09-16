var chunk = function(arr, size) {
    const chunks = new Array(Math.ceil(arr.length / size)).fill(0)
    return chunks.map((_, index) => arr.slice(index * size, (index + 1) * size))
};