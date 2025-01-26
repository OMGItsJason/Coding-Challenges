# Coding Challenges

This repository contains a collection of coding challenges categorized by difficulty level. The challenges span multiple programming languages and topics, allowing developers to improve their problem-solving skills. Create a new branch for specific languages (e.g., JavaScript, Python, Java, etc.). This challenges are AI generated.

## Table of Contents

- [Newbie Level](#newbie-level)
- [Junior Level](#junior-level)
- [Intermediate Level](#intermediate-level)
- [Advanced Level](#advanced-level)
- [Guru Level](#guru-level)

## Newbie Level

1. **Reverse a String**

   - **Description:** Write a function that takes a string and returns it reversed.
   - **Tips:** Use a loop or array methods like `.split()`, `.reverse()`, and `.join()`.
   - **Expected Output:**
     ```
     reverseString("hello"); // "olleh"
     ```

2. **Check for Palindrome**

   - **Description:** Write a function to check if a string is a palindrome (it reads the same forwards and backwards).
   - **Tips:** Consider the case where the string may include spaces or punctuation.
   - **Expected Output:**
     ```
     isPalindrome("madam"); // true
     isPalindrome("hello"); // false
     ```

3. **Count Occurrences of a Character**

   - **Description:** Write a function that counts how many times a character appears in a string.
   - **Tips:** Use a loop or `Array.prototype.filter()`.
   - **Expected Output:**
     ```
     countOccurrences("hello world", "o"); // 2
     ```

4. **Sum of Numbers in an Array**

   - **Description:** Write a function that sums all the numbers in an array.
   - **Tips:** Use a loop or the `.reduce()` method.
   - **Expected Output:**
     ```
     sumArray([1, 2, 3, 4]); // 10
     ```

5. **Find the Largest Number**
   - **Description:** Write a function that returns the largest number in an array.
   - **Tips:** Use the `.Math.max()` method.
   - **Expected Output:**
     ```
     findLargest([5, 7, 2, 8, 1]); // 8
     ```

## Junior Level

1. **FizzBuzz**

   - **Description:** Write a function that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz".
   - **Tips:** Use conditionals and loops.
   - **Expected Output:**
     ```
     fizzBuzz(); // "1", "2", "Fizz", "4", "Buzz", "Fizz", ...
     ```

2. **Find the Missing Number**

   - **Description:** Given an array with numbers from 1 to N, where one number is missing, return the missing number.
   - **Tips:** Use the sum formula or XOR to solve this problem efficiently.
   - **Expected Output:**
     ```
     findMissingNumber([1, 2, 4, 5, 6]); // 3
     ```

3. **Find the Second Largest Number**

   - **Description:** Write a function that finds the second largest number in an array.
   - **Tips:** Sort the array, or use a single pass through the array.
   - **Expected Output:**
     ```
     secondLargest([3, 5, 7, 2, 8]); // 7
     ```

4. **Remove Duplicates from an Array**

   - **Description:** Write a function that removes duplicate values from an array.
   - **Tips:** Use a Set or a loop to compare items.
   - **Expected Output:**
     ```
     removeDuplicates([1, 2, 2, 3, 4, 4]); // [1, 2, 3, 4]
     ```

5. **Flatten a Nested Array**
   - **Description:** Write a function that flattens a nested array of any depth.
   - **Tips:** Consider using recursion or the `.flat()` method.
   - **Expected Output:**
     ```
     flatten([1, [2, [3, 4], 5], 6]); // [1, 2, 3, 4, 5, 6]
     ```

## Intermediate Level

1. **Deep Clone an Object**

   - **Description:** Write a function that deep clones an object (including nested objects and arrays).
   - **Tips:** Use recursion or JSON methods (`JSON.parse()` and `JSON.stringify()`).
   - **Expected Output:**
     ```
     deepClone({ a: 1, b: { c: 2 } }); // {a: 1, b: {c: 2}}
     ```

2. **Merge Two Sorted Arrays**

   - **Description:** Write a function that merges two sorted arrays into one sorted array.
   - **Tips:** Use two pointers to iterate over the arrays.
   - **Expected Output:**
     ```
     mergeSortedArrays([1, 3, 5], [2, 4, 6]); // [1, 2, 3, 4, 5, 6]
     ```

3. **Find Anagram**

   - **Description:** Write a function that checks if two strings are anagrams (contain the same characters with the same frequencies).
   - **Tips:** Sort the strings or use a frequency count.
   - **Expected Output:**
     ```
     isAnagram("listen", "silent"); // true
     isAnagram("hello", "world"); // false
     ```

4. **Rotate an Array**

   - **Description:** Write a function that rotates an array by `k` positions to the right.
   - **Tips:** Use the `.slice()` and `.concat()` methods.
   - **Expected Output:**
     ```
     rotateArray([1, 2, 3, 4, 5], 2); // [4, 5, 1, 2, 3]
     ```

5. **Find the Most Frequent Element**
   - **Description:** Write a function that returns the most frequent element in an array.
   - **Tips:** Use an object to count occurrences.
   - **Expected Output:**
     ```
     mostFrequent([1, 2, 3, 2, 4, 2, 5]); // 2
     ```

## Advanced Level

1. **Generate All Subsets of a Set**

   - **Description:** Write a function that generates all subsets of a given set.
   - **Tips:** Use recursion or the binary representation of subsets.
   - **Expected Output:**
     ```
     generateSubsets([1, 2, 3]); // [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
     ```

2. **Find Longest Substring Without Repeating Characters**

   - **Description:** Write a function to find the longest substring without repeating characters.
   - **Tips:** Use the sliding window technique.
   - **Expected Output:**
     ```
     longestSubstring("abcabcbb"); // 3 ("abc")
     ```

3. **Find All Prime Numbers Up to N**

   - **Description:** Write a function that finds all prime numbers up to a given number N.
   - **Tips:** Use the Sieve of Eratosthenes for efficient prime generation.
   - **Expected Output:**
     ```
     primesUpTo(10); // [2, 3, 5, 7]
     ```

4. **Group Anagrams**

   - **Description:** Write a function that groups anagrams from an array of strings.
   - **Tips:** Use sorting or a frequency count for grouping.
   - **Expected Output:**
     ```
     groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]); // [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
     ```

5. **Find the Maximum Sum Subarray of Size K**
   - **Description:** Write a function that returns the maximum sum of a subarray of size `k`.
   - **Tips:** Use the sliding window technique.
   - **Expected Output:**
     ```
     maxSumSubarray([2, 1, 5, 1, 3, 2], 3); // 9 (subarray [5, 1, 3])
     ```

## Guru Level

1. **Implement a LRU Cache**

   - **Description:** Write a class for an LRU (Least Recently Used) cache with `get()` and `put()` methods.
   - **Tips:** Use a doubly linked list and a hashmap for efficient access.
   - **Expected Output:**
     ```
     const lruCache = new LRUCache(2);
     lruCache.put(1, 1);
     lruCache.put(2, 2);
     lruCache.get(1); // 1
     lruCache.put(3, 3); // evicts key 2
     lruCache.get(2); // -1
     ```

2. **Find the Longest Increasing Subsequence**

   - **Description:** Write a function to find the longest increasing subsequence in an array.
   - **Tips:** Use dynamic programming.
   - **Expected Output:**
     ```
     longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18]); // 4 ([2, 3, 7, 101])
     ```

3. **Solve the N-Queens Problem**

   - **Description:** Write a function that returns all possible solutions to the N-Queens puzzle.
   - **Tips:** Use backtracking to explore the possibilities.
   - **Expected Output:**
     ```
     solveNQueens(4); // [[[".Q..", "...Q", "Q...", "..Q."]], [["..Q.", "Q...", "...Q", ".Q.."]]]
     ```

4. **Design a Min Heap**

   - **Description:** Implement a min-heap with insert and extract-min methods.
   - **Tips:** Understand heap properties and how to maintain the heap after insertion or extraction.
   - **Expected Output:**
     ```
     const minHeap = new MinHeap();
     minHeap.insert(5);
     minHeap.insert(3);
     minHeap.insert(8);
     minHeap.extractMin(); // 3
     ```

5. **Find All Paths in a Directed Graph**
   - **Description:** Write a function that finds all paths from the start node to the end node in a directed graph.
   - **Tips:** Use Depth-First Search (DFS).
   - **Expected Output:**
     ```
     findPaths(graph, "A", "D"); // [["A", "B", "D"], ["A", "C", "D"]]
     ```

---
