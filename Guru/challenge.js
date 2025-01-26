// 1. Implement a LRU Cache
//    Description: Write a class for an LRU (Least Recently Used) cache with `get()` and `put()` methods.
//    Tips: Use a doubly linked list and a hashmap for efficient access.
//    Expected Output:
//      const lruCache = new LRUCache(2);
//      lruCache.put(1, 1);
//      lruCache.put(2, 2);
//      lruCache.get(1); // 1
//      lruCache.put(3, 3); // evicts key 2
//      lruCache.get(2); // -1

// 2. Find the Longest Increasing Subsequence
//    Description: Write a function to find the longest increasing subsequence in an array.
//    Tips: Use dynamic programming.
//    Expected Output:
//      longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18]); // 4 ([2, 3, 7, 101])

// 3. Solve the N-Queens Problem
//    Description: Write a function that returns all possible solutions to the N-Queens puzzle.
//    Tips: Use backtracking to explore the possibilities.
//    Expected Output:
//      solveNQueens(4); // [[[".Q..", "...Q", "Q...", "..Q."]], [["..Q.", "Q...", "...Q", ".Q.."]]]

// 4. Design a Min Heap
//    Description: Implement a min-heap with insert and extract-min methods.
//    Tips: Understand heap properties and how to maintain the heap after insertion or extraction.
//    Expected Output:
//      const minHeap = new MinHeap();
//      minHeap.insert(5);
//      minHeap.insert(3);
//      minHeap.insert(8);
//      minHeap.extractMin(); // 3

// 5. Find All Paths in a Directed Graph
//    Description: Write a function that finds all paths from the start node to the end node in a directed graph.
//    Tips: Use Depth-First Search (DFS).
//    Expected Output:
//      findPaths(graph, "A", "D"); // [["A", "B", "D"], ["A", "C", "D"]]
