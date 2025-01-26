// 1. Reverse a String
//    Description: Write a function that takes a string and returns it reversed.
//    Tips: Use a loop or array methods like `.split()`, `.reverse()`, and `.join()`.
//    Expected Output:
//      reverseString("hello"); // "olleh"

// Solution 1
// const reverseString = () => {
//   const a = "hello"; Declare a string variable.
//   const b = a.split("").reverse().join(""); Declare a variable to store the b string.
//   console.log("Reversed String: ", b); Print the reversed string.
// };
// return reverseString(); "Output: Reversed String: olleh"

// 2. Check for Palindrome
//    Description: Write a function to check if a string is a palindrome (it reads the same forwards and backwards).
//    Tips: Consider the case where the string may include spaces or punctuation.
//    Expected Output:
//      isPalindrome("madam"); // true
//      isPalindrome("hello"); // false
// Solution 2
// const isPalindrome = () => {
//   const a = "madam"; Declare a string variable.
//   const b = "hello"; Declare a string variable.
//   const c = a.split("").reverse().join(""); Reverse the string.
//   const d = b.split("").reverse().join(""); Reverse the string.
//   if (a === c) { use if statement to check if the string is a palindrome.
//     console.log("True");
//   } else {
//     console.log("False");
//   }
//   if (b === d) { use if statement to check if the string is a palindrome.
//     console.log("True");
//   } else {
//     console.log("False");
//   }
// };
// return isPalindrome(); "Output: True, False"

// 3. Count Occurrences of a Character
//    Description: Write a function that counts how many times a character appears in a string.
//    Tips: Use a loop or `Array.prototype.filter()`.
//    Expected Output:
//      countOccurrences("hello world", "o"); // 2

// 4. Sum of Numbers in an Array
//    Description: Write a function that sums all the numbers in an array.
//    Tips: Use a loop or the `.reduce()` method.
//    Expected Output:
//      sumArray([1, 2, 3, 4]); // 10

// 5. Find the Largest Number
//    Description: Write a function that returns the largest number in an array.
//    Tips: Use the `.Math.max()` method.
//    Expected Output:
//      findLargest([5, 7, 2, 8, 1]); // 8
