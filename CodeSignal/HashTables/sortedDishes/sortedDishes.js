function groupingDishes(dishes) {
    let hash = {};

    for (let i = 0; i < dishes.length; i++) {
        for (let j = 1; j < dishes[i].length; j++) {
            if (hash[dishes[i][j]]) {
                hash[dishes[i][j]].push(dishes[i][0]);
            } else {
                hash[dishes[i][j]] = [dishes[i][0]];
            }
        }
    }

    let keys = Object.keys(hash).sort();
    let answerArray = [];
    for (key of keys) {
        if (hash[key].length < 2) {
            continue;
        }
        let sorted = hash[key].sort();
        answerArray.push([key, ...sorted]);
    }

    return answerArray;
}

const dishes = [
    ["Pasta", "Tomato Sauce", "Onions", "Garlic"],
    ["Chicken Curry", "Chicken", "Curry Sauce"],
    ["Fried Rice", "Rice", "Onions", "Nuts"],
    ["Salad", "Spinach", "Nuts"],
    ["Sandwich", "Cheese", "Bread"],
    ["Quesadilla", "Chicken", "Cheese"],
];

console.log(groupingDishes(dishes));
