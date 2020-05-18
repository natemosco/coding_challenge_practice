function closeNums(nums, k) {
    let hash = {};

    for (let [index, num] of nums.entries()) {
        if (hash[num] === undefined) {
            hash[num] = [index];
        } else {
            if (Math.abs(hash[num][0] - index) <= k) {
                return true;
            } else {
                hash[num] = [index];
            }
        }
    }

    return false;
}

console.log(closeNums([1, 0, 1, 1], 1));
