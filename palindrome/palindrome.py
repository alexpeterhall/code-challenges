import sys, re


def isPalindrome(inputString):
    match = re.findall(r"[a-z0-9]+", inputString.lower())
    cleanString = "".join(match)
    if len(cleanString) < 2:
        return False
    elif cleanString == cleanString[::-1]:
        return True
    else:
        return False


def main():
    if len(sys.argv) != 2:
        print('usage: ./palindrome.py "String"')
        sys.exit(1)
    else:
        print(f"{sys.argv[1]} is Palindrome? - {isPalindrome(sys.argv[1])}")


if __name__ == "__main__":
    main()
