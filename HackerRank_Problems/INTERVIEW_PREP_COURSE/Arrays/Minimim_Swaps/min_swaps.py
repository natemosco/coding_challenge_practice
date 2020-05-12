def minimumSwaps(arr):
    biggest = len(arr)
    lastIndex = biggest - 1
    swap = 0

    ref = {}
    for i in range(len(arr)):
        ref[arr[i]] = i

    while biggest > 0:
        if lastIndex == ref[biggest]:
            print('hit?', biggest)
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
