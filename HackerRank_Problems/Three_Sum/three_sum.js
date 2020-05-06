// Example 1:Input: [12, 3, 1, 2, -6, 5, -8, 6], 0
// Expected Output: [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

function threeNumberSum(arr, target) {
    let referenceObj = {};
    let totalArr = new Set();
    // populate reference object with key:value of difference:indexOfActualValue
    // algebra says if a+b+c = total
    // then a+b = total - c
    for (const [index, num] of arr.entries()) {
        let difference = target - num;
        referenceObj[difference] = index;
    }

    for (leti = 0; i < arr.length - 1; i++) {
        for (letj = i + 1; j < arr.length; j++) {
            let currentTotal = arr[i] + arr[j];
            let compliment_index = referenceObj[currentTotal];
            if (compliment_index != i && compliment_index != j) {
                let tempArr = [arr[i], arr[j], arr[compliment_index]];
                tempArr.sort((a, b) => a - b);
                totalArr.add(tempArr);
            }
        }
    }
    //    totalArr.sort(a,b)returntotalArr
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));
