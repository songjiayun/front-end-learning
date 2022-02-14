// 数组去重

// function unique(arr) {
//     const res = [];

//     arr.forEach((item) => {
//         if (res.indexOf(item) < 0) {
//             res.push(item);
//         }
//     });
//     return res;
// }

//Set(无序、不能重复)
function unique(arr) {
    const set = new Set(arr);
    return [...set];
}

console.log(unique([1, 1, 2, 3, 4, 4, 5]));
