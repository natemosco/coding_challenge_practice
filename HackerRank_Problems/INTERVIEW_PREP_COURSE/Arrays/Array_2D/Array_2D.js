function hourglassSum(map) {
    let currentValue = -100;

    for (let array = 0; array < map.length - 2; array++) {
        for (let index = 0; index < map[array].length - 2; index++) {
            let topLeft = map[array][index];
            let topMid = map[array][index + 1];
            let topRight = map[array][index + 2];

            let stem = map[array + 1][index + 1];

            let baseLeft = map[array + 2][index];
            let baseMid = map[array + 2][index + 1];
            let baseRight = map[array + 2][index + 2];

            let currentHourglass =
                topLeft + topMid + topRight + stem + baseLeft + baseMid + baseRight;

            if (currentValue < currentHourglass) currentValue = currentHourglass;
        }
    }

    return currentValue;
}
