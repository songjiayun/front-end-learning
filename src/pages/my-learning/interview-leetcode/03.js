// 统计字符串 `aaaabbbccccddfgh`中字母的个数
// function TestCount(params) {
//     var obj = {};
//     for (var i = 0; i < params.length; i++) {
//         if (obj[params[i]]) {
//             obj[params[i]]++;
//         } else {
//             obj[params[i]] = 1;
//         }
//     }
//     return obj;
// }

// var count = TestCount('aaaabbbccccddfgh');
// for (var key in count) {
//     console.log(key + '出现了' + count[key] + '次');
// }

/**
 * 不区分大小写，统计字符串 `AAaaabbbDDccccddfFghH`中字母的个数
 */
function TestCount(params) {
    // params = params.toLowerCase();
    var obj = {};
    for (var i = 0; i < params.length; i++) {
        if (obj[params[i]]) {
            obj[params[i]]++;
        } else {
            obj[params[i]] = 1;
        }
    }
    return obj;
}

var count = TestCount('AAaaabbbDDccccddfFghH');
for (var key in count) {
    console.log(key + '出现了' + count[key] + '次');
}
