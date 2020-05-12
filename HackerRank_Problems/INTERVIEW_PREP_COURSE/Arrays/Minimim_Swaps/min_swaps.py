def minimumSwaps(arr):
    biggest = len(arr)
    lastIndex = biggest - 1
    swap = 0

    ref = {}
    for i in range(len(arr)):
        ref[arr[i]] = i

    while biggest > 0:
        if lastIndex == ref[biggest]:
            biggest -= 1
            lastIndex = biggest - 1
            continue

        index_largest_came_from = ref[biggest]
        currently_in_last_slot = arr[lastIndex]

        arr[lastIndex], arr[ref[biggest]] = arr[ref[biggest]], arr[lastIndex]

        ref[arr[lastIndex]] = lastIndex
        ref[currently_in_last_slot] = index_largest_came_from

        swap += 1
        biggest -= 1
        lastIndex = biggest - 1

    return swap


def minSwaps(arr):
    index = len(arr) - 1
    swap_count = 0

    while index >= 0:
        target_index = arr[index] - 1
        if target_index != index:
            arr[index], arr[target_index] = arr[target_index], arr[index]
            swap_count += 1
        else:
            index -= 1

    return swap
