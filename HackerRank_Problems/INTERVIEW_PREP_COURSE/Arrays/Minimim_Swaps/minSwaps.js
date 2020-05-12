function minSwaps(arr) {
    let swaps = 0;
    let i = 0;

    while (i < arr.length) {
        let position_of_number = arr[i] - 1;

        if (position_of_number != i) {
            let temp = arr[i];
            arr[i] = arr[position_of_number];
            arr[position_of_number] = temp;
            swaps++;
        } else {
            i++;
        }
    }

    return swaps;
}
