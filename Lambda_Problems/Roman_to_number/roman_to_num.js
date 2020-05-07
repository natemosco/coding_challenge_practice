/**
 * Convert a roman numeral to a number
 * X = 10
 * XX = 20
 * II = 2
 * IV = 4
 * VI = 6
 * XM = 990
 * IDM = 501
 */

const ref = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

function convertNumeralToNum(string) {
    let runningTotal = 0;
    lastValue = 0;
    for (let i = 0; i < string.length; i++) {
        if()
        if (ref[string[i]] < lastValue) {
            runningTotal += ref[string[i]];
        } else {
            runningTotal -= ref[string[i]];
        }

        lastValue = ref[string[i]];
    }
    return runningTotal;
}

console.log(convertNumeralToNum("CDXXXVII")); // should output 437
console.log(convertNumeralToNum("MDII")); // should ouput 1501
