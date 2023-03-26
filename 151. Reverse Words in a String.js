/*
Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 

Constraints:

1 <= s.length <= 104
s contains English letters (upper-case and lower-case), digits, and spaces ' '.
There is at least one word in s.
*/

function reverseWords(s) {
  let reversedWords = [];
  let currentWord = "";
  console.log(reversedWords);

 
  // Iterate over each character in the input string
  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    // If the current character is a space, add the current word to the reversed words array
    if (char === " ") {
      if (currentWord !== "") {
       console.log(reversedWords);
        reversedWords.unshift(currentWord);
        console.log(currentWord);
        currentWord = "";
        console.log(currentWord);
      } 

     
    } else {
      // Otherwise, append the character to the current word
      currentWord += char;
      console.log(currentWord);
    }
  }
  console.log(reversedWords);

  // Add the last word to the reversed words array
  if (currentWord !== "") {
    reversedWords.unshift(currentWord);
    console.log(currentWord);
  }

  // Join the reversed words with a single space
  console.log(reversedWords);
  return reversedWords.join(" ");
 
}

console.log(reverseWords("the sky is blue"));
