import pytest
from palindrome import isPalindrome


@pytest.mark.parametrize(
    "palindrome",
    [
        "aa",
        "bob",
        "Race Car",
        "A man, a plan, a canal. Panama",
        "Do geese see God?",
        "Never odd or even",
        "_eye",
        "1&$%!)*)@(*#$_eye1",
        "My age is 0, 0 si ega ym.",
        "0_0 (: /- :) 0-0",
    ],
)
def test_isPalindrome(palindrome):
    assert isPalindrome(palindrome) == True


@pytest.mark.parametrize(
    "not_palindrome",
    [
        "a",
        "0",
        "29857239857",
        "*!(#@!)(!@)(&$&*@*",
        "Not a Palindrome",
        "almostomla",
    ],
)
def test_is_not_isPalindrome(not_palindrome):
    assert isPalindrome(not_palindrome) == False
