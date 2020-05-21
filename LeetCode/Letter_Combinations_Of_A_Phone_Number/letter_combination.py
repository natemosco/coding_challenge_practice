def letterCombination(self, digits: str) -> List[str]:
    phone = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    }
    results = []
    if not digits:
        return results

    def helper(digit, combo=''):
        if digit:
            for letter in phone[digit[0]]:
                helper(digit[1:], combo + letter)
        else:
            results.append(combo)
    helper(digits)
    return results
