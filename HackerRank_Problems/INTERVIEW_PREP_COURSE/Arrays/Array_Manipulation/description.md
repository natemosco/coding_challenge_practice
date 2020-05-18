# Problem Desctiption

Starting with a 1-indexed array of zeroes and a list of operations, for each operation add value to each of the array element between two given indicies, indclusive. Once all operations have been performed, return the maximum value in your array.

-   example: the length of array of zeros n=10

```
list of queries:
a b k
1 5 3
4 8 7
6 9 1
```

Add the values of <i>k</i> between the indices <i>a</i> and <i>b</i> inclusive

```
index ->  1,  2,  3,  4,  5,  6,  7,  8,  9,  10
        [ 0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
        [ 3,  3,  3,  3,  3,  0,  0,  0,  0,  0]
        [ 3,  3,  3, 10, 10,  7,  7,  7,  0,  0]
        [ 3,  3,  3, 10, 10,  8,  8,  8,  1,  0]

```

Here the largest value is 10 after all operations performed
