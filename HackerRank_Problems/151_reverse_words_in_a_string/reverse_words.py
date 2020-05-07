def reverseWords(self, s: str) -> str:
    array = s.split(' ‘)
    array = list(reversed(array))
    string = ’ ’.join(array)
    stripped_string = ” “.join(string.split())
    return stripped_string
