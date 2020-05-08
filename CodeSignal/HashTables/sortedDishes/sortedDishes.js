function groupingDishes(dishes) {
    let hash = {};

    for (let i = 0; i < dishes.length; i++) {
        for (let j = 1; j < dishes[i].length; j++) {
            if (hash[dishes[i][j]]) {
                let dishArray = hash[dishes][i][j];
                let dish = dishes[i][0];
                if (dishArray.includes(dish)) {
                    continue;
                } else {
                    dishArray.push(dish);
                }
            } else {
                hash[dishes[i][j]] = [dish];
            }
        }
    }

    let keys = Object.keys(hash);
    let answerArray = [];
    for (key of keys) {
        if (hash[key].length < 2) {
            continue;
        }
        let sorted = hash[key].sort();
        answerArray.push([key, ...sorted]);
    }

    answerArray = answerArray.sort();
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
