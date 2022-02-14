function flat(arr) {
    // 验证arr中有没有深层数组
    const isDeep = arr.some((item) => item instanceof Array);

    if (!isDeep) {
        return arr;
    }
    const res = Array.prototype.concat.apply([], arr);
    return flat(res);
}

const res = [1, 2, [3, 4, [10, 20, [3, 4, [56, 78]]]], 5];
console.log(flat(res));
