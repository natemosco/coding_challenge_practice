# Problem description:

-   given a 6 x 6 2D array <i>arr</i>

```
[1 1 1 0 0 0]
[0 1 0 0 0 0]
[1 1 1 0 0 0]
[0 0 0 0 0 0]
[0 0 0 0 0 0]
[0 0 0 0 0 0]
```

We define an hourglass in A to be a subset of values with indices falling in this pattern in <i>arr</i>'s graphical representation:

```
a b c
  d
e f g
```

There are 16 hourglasses in <i>arr</i>, and an hourglass is the sum of an hourglass' values. Calculate the hourglass sum for every hourglass in <i>arr</i>, then print the maximum hourglass sum.

For example, given the 2D array:

```
-9 -9 -9  1  1  1
 0 -9  0  4  3  2
-9 -9 -9  1  2  3
 0  0  8  6  6  0
 0  0  0 -2  0  0
 0  0  1  2  4  0
```

We calculate the following 16 hourglass values:

```
-63, -34, -9 ,12,
-10, 0, 28, 23,
-27, -11, -2, -10,
9, 17, 25, 18
```

Our highest hourglass value is 28 from the hourglass:

```
0 4 3
  1
8 6 6
```

## Task:

Complete the function hourglassSum. It should return an integer, the maximum hourglass sum in the array.

hourglassSum has the following parameter(s):

arr: an array of integers

### Input Format:

Each of the 6 lines of inputs <i>arr[i]</i> contains 6 space-separated integers <i>arr[i][j]</i> .

### Constraints:

```
-9 <= arr[i][j] <= 9
0 <= i, j <= 5
```

### Output Format

Print the largest (maximum) hourglass sum found in <i>arr</i>.

    Input
    1 1 1 0 0 0
    0 1 0 0 0 0
    1 1 1 0 0 0
    0 0 2 4 4 0
    0 0 0 2 0 0
    0 0 1 2 4 0

    Output
    19
