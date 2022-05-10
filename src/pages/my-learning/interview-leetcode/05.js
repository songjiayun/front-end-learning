var maximumGap = function (nums) {
    let len = nums.length;
    if (len < 2) {
        return 0;
    }
    // nums.sort((a,b)=>{return a-b})
    var max = 0;
    // for(let i = 0, temp; i < len-1; i++){
    //     max=Math.max(max,nums[i+1]-nums[i])
    // }
    for (let i = nums.length - 1, temp; i > 0; i--) {
        for (let j = 0; j < i; i++) {
            if (nums[j + 1] < nums[j]) {
                temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
            max = Math.max(max, nums[i] - nums[j]);
        }
    }
    return max;
};

console.log(maximumGap([3, 6, 9, 1]));
