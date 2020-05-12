def minimumBribes(q):
    bribes = 0
    indexing = [num - 1 for num in q]
    for index, number in enumerate(indexing):
        if number - index > 2:
            print("Too chaotic")
            return
        for j in range(max(number-1, 0), index):
            if indexing[j] > number:
                bribes += 1
    print(bribes)
