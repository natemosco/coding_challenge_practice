def arrayManipulation(n, queries):
    array = [0] * (n+2)

    for query in queries:
        start, stop, summand = query
        array[start] += summand
        array[stop + 1] -= summand

    runningHighest = 0
    accumulator = 0

    for num in array:
        accumulator += num
        if runningHighest < accumulator:
            runningHighest = accumulator

    return runningHighest
