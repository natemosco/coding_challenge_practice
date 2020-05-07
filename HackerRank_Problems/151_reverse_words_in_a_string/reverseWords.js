var reverseWords = function (s) {
    let arr = s.split(" ");
    arr.reverse();
    string = arr.join(" ").trim();
    let length;
    for (let i = 0; i < string.length - 1; i++) {
        if (string[i] === " " && string[i + 1] === " ") {
            string = string.slice(0, i) + string.slice(i + 1 - string.length);
            i--;
        }
    }
    let noSpaceArr = arr.map((e) => {
        if (e != "") {
            return e;
        }
    });
    return string;
};

// Second Approach

var reverseWords = function (s) {
    let arr = s.split(" ");
    arr.reverse();
    let string = arr.filter((item) => item != "").join(" ");

    return string;
};

// Using REGEX: Cheating? Maybe? it was the third approach after all
var reverseWords = function(s) {
    let arr = s.split(” “)
    arr.reverse()
    string = arr.join(” “)
    string = string.replace(/\s+/g, ' ')
    return string.trim()
}