// Example 1:Input: [12, 3, 1, 2, -6, 5, -8, 6], 0
// Expected Output: [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]

// ! Note two versions of this attempted in JS The first uses an object where the second uses a Set to solve

function threeNumberSumA(arr, target) {
    let referenceObj = {};
    let totalArr = [];
    let triplet = [];
    // populate reference object with key:value of difference:indexOfActualValue
    // algebra says if a+b+c = total
    // then a+b = total - c
    for (const [index, num] of arr.entries()) {
        let difference = target - num;
        referenceObj[difference] = index;
    }

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let currentTotal = arr[i] + arr[j];
            let compliment_index = referenceObj[currentTotal];
            if (compliment_index == undefined) {
                continue;
            }
            if (compliment_index != i && compliment_index != j) {
                triplet = [arr[i], arr[j], arr[compliment_index]];
                triplet.sort((a, b) => a - b);

                if (referenceObj[`${triplet}`] === undefined) {
                    referenceObj[`${triplet}`] = triplet;
                    totalArr.push(triplet);
                } else {
                    continue;
                }
            }
        }
    }
    totalArr.sort((a, b) => {
        if (a[0] < b[0]) {
            return -1;
        } else if (a[0] > b[0]) {
            return 1;
        } else if (a[1] < b[1]) {
            return -1;
        } else if (a[1] > b[1]) {
            return 1;
        } else if (a[2] < b[2]) {
            return -1;
        } else if (a[2] > b[2]) {
            return 1;
        } else {
            return 0;
        }
    });
    return totalArr;
}

function threeNumberSumB(arr, target) {
    let referenceObj = {};
    let totalTriplets = new Set();
    let tempArr = [];
    // populate reference object with key:value of difference:indexOfActualValue
    // algebra says if a+b+c = total
    // then a+b = total - c
    for (const [index, num] of arr.entries()) {
        let difference = target - num;
        referenceObj[difference] = index;
    }

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let currentTotal = arr[i] + arr[j];
            let compliment_index = referenceObj[currentTotal];
            if (compliment_index == undefined) {
                continue;
            }
            if (compliment_index != i && compliment_index != j) {
                tempArr = [arr[i], arr[j], arr[compliment_index]];
                tempArr.sort((a, b) => a - b);

                if (totalTriplets.has(tempArr) == false) {
                    totalTriplets.add(tempArr);
                }
            }
        }
    }
    let totalArr = [...totalTriplets];
    totalArr.sort((a, b) => a - b);
    return totalArr;
}

// A successful
console.log(threeNumberSumA([12, 3, 1, 2, -6, 5, -8, 6], 0));
// B fails to filter using a set but returns the correct answer with 3 multiples of the correct answer
console.log(threeNumberSumB([12, 3, 1, 2, -6, 5, -8, 6], 0));
