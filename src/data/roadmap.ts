export type Difficulty = "easy" | "medium" | "hard";

export type Problem = {
  id: string;
  title: string;
  difficulty: Difficulty;
  link: string;
};

export type DayPlan = {
  day: number;
  week: number;
  pattern: string;
  patternDescription: string;
  problems: Problem[];
};

export const roadmap: DayPlan[] = [
  // ── Week 1: Arrays & Two Pointers ─────────────────────────────────────────
  {
    day: 1,
    week: 1,
    pattern: "HashMap",
    patternDescription:
      "Store seen values so you can find the missing complement in one pass.",
    problems: [
      {
        id: "two-sum",
        title: "Two Sum",
        difficulty: "easy",
        link: "https://leetcode.com/problems/two-sum/",
      },
      {
        id: "top-k-frequent",
        title: "Top K Frequent Elements",
        difficulty: "medium",
        link: "https://leetcode.com/problems/top-k-frequent-elements/",
      },
      {
        id: "lru-cache",
        title: "LRU Cache",
        difficulty: "hard",
        link: "https://leetcode.com/problems/lru-cache/",
      },
    ],
  },
  {
    day: 2,
    week: 1,
    pattern: "Running Minimum",
    patternDescription:
      "Track the lowest price so far and evaluate profit at each step.",
    problems: [
      {
        id: "best-time-stocks",
        title: "Best Time to Buy and Sell Stock",
        difficulty: "easy",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
      },
      {
        id: "best-time-stocks-ii",
        title: "Best Time to Buy and Sell Stock II",
        difficulty: "medium",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
      },
      {
        id: "best-time-stocks-iii",
        title: "Best Time to Buy and Sell Stock III",
        difficulty: "hard",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/",
      },
    ],
  },
  {
    day: 3,
    week: 1,
    pattern: "Two Pointers",
    patternDescription:
      "Compare both ends at the same time instead of rescanning everything.",
    problems: [
      {
        id: "valid-palindrome",
        title: "Valid Palindrome",
        difficulty: "easy",
        link: "https://leetcode.com/problems/valid-palindrome/",
      },
      {
        id: "valid-palindrome-ii",
        title: "Valid Palindrome II",
        difficulty: "medium",
        link: "https://leetcode.com/problems/valid-palindrome-ii/",
      },
      {
        id: "palindrome-pairs",
        title: "Palindrome Pairs",
        difficulty: "hard",
        link: "https://leetcode.com/problems/palindrome-pairs/",
      },
    ],
  },
  {
    day: 4,
    week: 1,
    pattern: "Two Pointers on Sorted Array",
    patternDescription:
      "Use sorted order to decide whether to move left or right.",
    problems: [
      {
        id: "two-sum-ii",
        title: "Two Sum II",
        difficulty: "easy",
        link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
      },
      {
        id: "3sum-closest",
        title: "3Sum Closest",
        difficulty: "medium",
        link: "https://leetcode.com/problems/3sum-closest/",
      },
      {
        id: "median-two-sorted-arrays",
        title: "Median of Two Sorted Arrays",
        difficulty: "hard",
        link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
      },
    ],
  },
  {
    day: 5,
    week: 1,
    pattern: "Two Pointers",
    patternDescription:
      "Keep the widest container and move only the wall that limits the water.",
    problems: [
      {
        id: "container-water",
        title: "Container With Most Water",
        difficulty: "medium",
        link: "https://leetcode.com/problems/container-with-most-water/",
      },
      {
        id: "move-zeroes-d5",
        title: "Move Zeroes",
        difficulty: "easy",
        link: "https://leetcode.com/problems/move-zeroes/",
      },
      {
        id: "trapping-rain-water-d5",
        title: "Trapping Rain Water",
        difficulty: "hard",
        link: "https://leetcode.com/problems/trapping-rain-water/",
      },
    ],
  },
  {
    day: 6,
    week: 1,
    pattern: "Sort + Two Pointers",
    patternDescription:
      "Sort first, fix one number, then search for the other two efficiently.",
    problems: [
      {
        id: "3sum",
        title: "3Sum",
        difficulty: "medium",
        link: "https://leetcode.com/problems/3sum/",
      },
      {
        id: "sort-colors",
        title: "Sort Colors",
        difficulty: "easy",
        link: "https://leetcode.com/problems/sort-colors/",
      },
      {
        id: "first-missing-positive",
        title: "First Missing Positive",
        difficulty: "hard",
        link: "https://leetcode.com/problems/first-missing-positive/",
      },
    ],
  },
  {
    day: 7,
    week: 1,
    pattern: "Week 1 Review",
    patternDescription:
      "Reinforce HashMap and Two Pointers until pattern recognition feels natural.",
    problems: [
      {
        id: "two-sum-review",
        title: "Review: Two Sum",
        difficulty: "easy",
        link: "https://leetcode.com/problems/two-sum/",
      },
      {
        id: "best-time-stocks-review",
        title: "Review: Best Time to Buy and Sell Stock",
        difficulty: "easy",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
      },
      {
        id: "valid-palindrome-review",
        title: "Review: Valid Palindrome",
        difficulty: "easy",
        link: "https://leetcode.com/problems/valid-palindrome/",
      },
      {
        id: "two-sum-ii-review",
        title: "Review: Two Sum II",
        difficulty: "easy",
        link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
      },
      {
        id: "container-water-review",
        title: "Review: Container With Most Water",
        difficulty: "medium",
        link: "https://leetcode.com/problems/container-with-most-water/",
      },
      {
        id: "3sum-review",
        title: "Review: 3Sum",
        difficulty: "medium",
        link: "https://leetcode.com/problems/3sum/",
      },
      {
        id: "contains-duplicate",
        title: "Extra: Contains Duplicate",
        difficulty: "easy",
        link: "https://leetcode.com/problems/contains-duplicate/",
      },
      {
        id: "valid-anagram",
        title: "Extra: Valid Anagram",
        difficulty: "easy",
        link: "https://leetcode.com/problems/valid-anagram/",
      },
      {
        id: "move-zeroes",
        title: "Extra: Move Zeroes",
        difficulty: "easy",
        link: "https://leetcode.com/problems/move-zeroes/",
      },
      {
        id: "remove-duplicates-sorted-array",
        title: "Extra: Remove Duplicates from Sorted Array",
        difficulty: "easy",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
      },
      {
        id: "group-anagrams",
        title: "Extra: Group Anagrams",
        difficulty: "medium",
        link: "https://leetcode.com/problems/group-anagrams/",
      },
      {
        id: "trapping-rain-water",
        title: "Extra: Trapping Rain Water",
        difficulty: "hard",
        link: "https://leetcode.com/problems/trapping-rain-water/",
      },
    ],
  },

  // ── Week 2: Sliding Window & HashMap ──────────────────────────────────────
  {
    day: 8,
    week: 2,
    pattern: "Kadane's Algorithm",
    patternDescription:
      "Keep a running sum and drop it the moment carrying it forward hurts you.",
    problems: [
      {
        id: "max-subarray",
        title: "Maximum Subarray",
        difficulty: "medium",
        link: "https://leetcode.com/problems/maximum-subarray/",
      },
      {
        id: "running-sum-1d",
        title: "Running Sum of 1d Array",
        difficulty: "easy",
        link: "https://leetcode.com/problems/running-sum-of-1d-array/",
      },
      {
        id: "max-sum-3-non-overlapping",
        title: "Maximum Sum of 3 Non-Overlapping Subarrays",
        difficulty: "hard",
        link: "https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/",
      },
    ],
  },
  {
    day: 9,
    week: 2,
    pattern: "Sliding Window + Set",
    patternDescription:
      "Expand the window when valid, shrink it the moment a duplicate breaks the rule.",
    problems: [
      {
        id: "longest-substring",
        title: "Longest Substring Without Repeating Characters",
        difficulty: "medium",
        link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      },
      {
        id: "contains-duplicate-ii",
        title: "Contains Duplicate II",
        difficulty: "easy",
        link: "https://leetcode.com/problems/contains-duplicate-ii/",
      },
      {
        id: "substring-concat-all-words",
        title: "Substring with Concatenation of All Words",
        difficulty: "hard",
        link: "https://leetcode.com/problems/substring-with-concatenation-of-all-words/",
      },
    ],
  },
  {
    day: 10,
    week: 2,
    pattern: "Dynamic Sliding Window",
    patternDescription:
      "Grow until the window is valid, then shrink to find the smallest valid answer.",
    problems: [
      {
        id: "min-subarray-len",
        title: "Minimum Size Subarray Sum",
        difficulty: "medium",
        link: "https://leetcode.com/problems/minimum-size-subarray-sum/",
      },
      {
        id: "max-average-subarray-d10",
        title: "Maximum Average Subarray I",
        difficulty: "easy",
        link: "https://leetcode.com/problems/maximum-average-subarray-i/",
      },
      {
        id: "minimum-window-substring",
        title: "Minimum Window Substring",
        difficulty: "hard",
        link: "https://leetcode.com/problems/minimum-window-substring/",
      },
    ],
  },
  {
    day: 11,
    week: 2,
    pattern: "Sliding Window + Frequency Map",
    patternDescription:
      "Track counts in the window and shrink when fixing the window would cost too many replacements.",
    problems: [
      {
        id: "char-replacement",
        title: "Longest Repeating Character Replacement",
        difficulty: "medium",
        link: "https://leetcode.com/problems/longest-repeating-character-replacement/",
      },
      {
        id: "max-consecutive-ones",
        title: "Max Consecutive Ones",
        difficulty: "easy",
        link: "https://leetcode.com/problems/max-consecutive-ones/",
      },
      {
        id: "sliding-window-max-d11",
        title: "Sliding Window Maximum",
        difficulty: "hard",
        link: "https://leetcode.com/problems/sliding-window-maximum/",
      },
    ],
  },
  {
    day: 12,
    week: 2,
    pattern: "Fixed Window + Frequency Match",
    patternDescription:
      "Use a fixed-size window and compare character counts instead of comparing whole strings.",
    problems: [
      {
        id: "permutation-string",
        title: "Permutation in String",
        difficulty: "medium",
        link: "https://leetcode.com/problems/permutation-in-string/",
      },
      {
        id: "ransom-note",
        title: "Ransom Note",
        difficulty: "easy",
        link: "https://leetcode.com/problems/ransom-note/",
      },
      {
        id: "smallest-range-k-lists",
        title: "Smallest Range Covering Elements from K Lists",
        difficulty: "hard",
        link: "https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/",
      },
    ],
  },
  {
    day: 13,
    week: 2,
    pattern: "Prefix Sum + HashMap",
    patternDescription:
      "Count matching past prefix sums to find how many subarrays hit the target.",
    problems: [
      {
        id: "subarray-sum-k",
        title: "Subarray Sum Equals K",
        difficulty: "medium",
        link: "https://leetcode.com/problems/subarray-sum-equals-k/",
      },
      {
        id: "range-sum-query",
        title: "Range Sum Query - Immutable",
        difficulty: "easy",
        link: "https://leetcode.com/problems/range-sum-query-immutable/",
      },
      {
        id: "count-of-range-sum",
        title: "Count of Range Sum",
        difficulty: "hard",
        link: "https://leetcode.com/problems/count-of-range-sum/",
      },
    ],
  },
  {
    day: 14,
    week: 2,
    pattern: "Week 2 Review",
    patternDescription:
      "Reinforce Kadane, sliding window, and prefix-sum thinking before week 3.",
    problems: [
      {
        id: "max-subarray-review",
        title: "Review: Maximum Subarray",
        difficulty: "medium",
        link: "https://leetcode.com/problems/maximum-subarray/",
      },
      {
        id: "longest-substring-review",
        title: "Review: Longest Substring Without Repeating Characters",
        difficulty: "medium",
        link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      },
      {
        id: "min-subarray-len-review",
        title: "Review: Minimum Size Subarray Sum",
        difficulty: "medium",
        link: "https://leetcode.com/problems/minimum-size-subarray-sum/",
      },
      {
        id: "char-replacement-review",
        title: "Review: Longest Repeating Character Replacement",
        difficulty: "medium",
        link: "https://leetcode.com/problems/longest-repeating-character-replacement/",
      },
      {
        id: "permutation-string-review",
        title: "Review: Permutation in String",
        difficulty: "medium",
        link: "https://leetcode.com/problems/permutation-in-string/",
      },
      {
        id: "subarray-sum-k-review",
        title: "Review: Subarray Sum Equals K",
        difficulty: "medium",
        link: "https://leetcode.com/problems/subarray-sum-equals-k/",
      },
      {
        id: "max-average-subarray",
        title: "Extra: Maximum Average Subarray I",
        difficulty: "easy",
        link: "https://leetcode.com/problems/maximum-average-subarray-i/",
      },
      {
        id: "find-all-anagrams",
        title: "Extra: Find All Anagrams in a String",
        difficulty: "medium",
        link: "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
      },
      {
        id: "fruit-into-baskets",
        title: "Extra: Fruit Into Baskets",
        difficulty: "medium",
        link: "https://leetcode.com/problems/fruit-into-baskets/",
      },
      {
        id: "continuous-subarray-sum",
        title: "Extra: Continuous Subarray Sum",
        difficulty: "medium",
        link: "https://leetcode.com/problems/continuous-subarray-sum/",
      },
      {
        id: "sliding-window-maximum",
        title: "Extra: Sliding Window Maximum",
        difficulty: "hard",
        link: "https://leetcode.com/problems/sliding-window-maximum/",
      },
    ],
  },

  // ── Week 3: Stack & Binary Search ─────────────────────────────────────────
  {
    day: 15,
    week: 3,
    pattern: "Stack",
    patternDescription:
      "Use last-in-first-out order when the latest unfinished item must be resolved first.",
    problems: [
      {
        id: "valid-parentheses",
        title: "Valid Parentheses",
        difficulty: "easy",
        link: "https://leetcode.com/problems/valid-parentheses/",
      },
      {
        id: "min-stack",
        title: "Min Stack",
        difficulty: "medium",
        link: "https://leetcode.com/problems/min-stack/",
      },
      {
        id: "largest-rectangle-histogram",
        title: "Largest Rectangle in Histogram",
        difficulty: "hard",
        link: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
      },
    ],
  },
  {
    day: 16,
    week: 3,
    pattern: "Monotonic Stack",
    patternDescription:
      "Keep unresolved indexes in stack order so a new greater value can answer old questions immediately.",
    problems: [
      {
        id: "daily-temperatures",
        title: "Daily Temperatures",
        difficulty: "medium",
        link: "https://leetcode.com/problems/daily-temperatures/",
      },
      {
        id: "baseball-game",
        title: "Baseball Game",
        difficulty: "easy",
        link: "https://leetcode.com/problems/baseball-game/",
      },
      {
        id: "maximal-rectangle",
        title: "Maximal Rectangle",
        difficulty: "hard",
        link: "https://leetcode.com/problems/maximal-rectangle/",
      },
    ],
  },
  {
    day: 17,
    week: 3,
    pattern: "Binary Search",
    patternDescription:
      "Use sorted order to eliminate half of the remaining search space every step.",
    problems: [
      {
        id: "binary-search",
        title: "Binary Search",
        difficulty: "easy",
        link: "https://leetcode.com/problems/binary-search/",
      },
      {
        id: "find-peak-element",
        title: "Find Peak Element",
        difficulty: "medium",
        link: "https://leetcode.com/problems/find-peak-element/",
      },
      {
        id: "median-two-sorted-arrays-w3",
        title: "Median of Two Sorted Arrays",
        difficulty: "hard",
        link: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
      },
    ],
  },
  {
    day: 18,
    week: 3,
    pattern: "Binary Search on Rotated Array",
    patternDescription:
      "Find the sorted half first, then keep only the half that could still contain the target.",
    problems: [
      {
        id: "search-rotated",
        title: "Search in Rotated Sorted Array",
        difficulty: "medium",
        link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
      },
      {
        id: "search-insert-position",
        title: "Search Insert Position",
        difficulty: "easy",
        link: "https://leetcode.com/problems/search-insert-position/",
      },
      {
        id: "find-min-rotated-ii",
        title: "Find Minimum in Rotated Sorted Array II",
        difficulty: "hard",
        link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/",
      },
    ],
  },
  {
    day: 19,
    week: 3,
    pattern: "Binary Search on Rotation Pivot",
    patternDescription:
      "Use binary search to locate the break point where the rotated sorted array wraps around.",
    problems: [
      {
        id: "find-min-rotated",
        title: "Find Minimum in Rotated Sorted Array",
        difficulty: "medium",
        link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
      },
      {
        id: "first-bad-version",
        title: "First Bad Version",
        difficulty: "easy",
        link: "https://leetcode.com/problems/first-bad-version/",
      },
      {
        id: "count-smaller-numbers",
        title: "Count of Smaller Numbers After Self",
        difficulty: "hard",
        link: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/",
      },
    ],
  },
  {
    day: 20,
    week: 3,
    pattern: "Stack Evaluation",
    patternDescription:
      "Push numbers and let operators consume the latest two values from the stack.",
    problems: [
      {
        id: "evaluate-rpn",
        title: "Evaluate Reverse Polish Notation",
        difficulty: "medium",
        link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
      },
      {
        id: "remove-adjacent-duplicates",
        title: "Remove All Adjacent Duplicates in String",
        difficulty: "easy",
        link: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/",
      },
      {
        id: "basic-calculator",
        title: "Basic Calculator",
        difficulty: "hard",
        link: "https://leetcode.com/problems/basic-calculator/",
      },
    ],
  },
  {
    day: 21,
    week: 3,
    pattern: "Week 3 Review",
    patternDescription:
      "Reinforce stack thinking and binary-search pattern recognition before moving on.",
    problems: [
      {
        id: "valid-parentheses-review",
        title: "Review: Valid Parentheses",
        difficulty: "easy",
        link: "https://leetcode.com/problems/valid-parentheses/",
      },
      {
        id: "daily-temperatures-review",
        title: "Review: Daily Temperatures",
        difficulty: "medium",
        link: "https://leetcode.com/problems/daily-temperatures/",
      },
      {
        id: "binary-search-review",
        title: "Review: Binary Search",
        difficulty: "easy",
        link: "https://leetcode.com/problems/binary-search/",
      },
      {
        id: "search-rotated-review",
        title: "Review: Search in Rotated Sorted Array",
        difficulty: "medium",
        link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
      },
      {
        id: "find-min-rotated-review",
        title: "Review: Find Minimum in Rotated Sorted Array",
        difficulty: "medium",
        link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
      },
      {
        id: "evaluate-rpn-review",
        title: "Review: Evaluate Reverse Polish Notation",
        difficulty: "medium",
        link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
      },
    ],
  },

  // ── Week 4: Trees & Graphs ─────────────────────────────────────────────────
  {
    day: 22,
    week: 4,
    pattern: "DFS on Trees",
    patternDescription:
      "Go as deep as possible before coming back, usually with recursion.",
    problems: [
      {
        id: "max-depth",
        title: "Maximum Depth of Binary Tree",
        difficulty: "easy",
        link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
      },
      {
        id: "invert-tree",
        title: "Invert Binary Tree",
        difficulty: "easy",
        link: "https://leetcode.com/problems/invert-binary-tree/",
      },
      {
        id: "construct-bt-preorder-inorder",
        title: "Construct Binary Tree from Preorder and Inorder Traversal",
        difficulty: "medium",
        link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
      },
      {
        id: "binary-tree-max-path-sum",
        title: "Binary Tree Maximum Path Sum",
        difficulty: "hard",
        link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
      },
    ],
  },
  {
    day: 23,
    week: 4,
    pattern: "Recursive Tree Comparison",
    patternDescription:
      "Compare the current node, then recursively compare left and right subtrees.",
    problems: [
      {
        id: "same-tree",
        title: "Same Tree",
        difficulty: "easy",
        link: "https://leetcode.com/problems/same-tree/",
      },
      {
        id: "subtree-another-tree",
        title: "Subtree of Another Tree",
        difficulty: "medium",
        link: "https://leetcode.com/problems/subtree-of-another-tree/",
      },
      {
        id: "symmetric-tree",
        title: "Symmetric Tree",
        difficulty: "easy",
        link: "https://leetcode.com/problems/symmetric-tree/",
      },
      {
        id: "serialize-deserialize-tree",
        title: "Serialize and Deserialize Binary Tree",
        difficulty: "hard",
        link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
      },
    ],
  },
  {
    day: 24,
    week: 4,
    pattern: "BFS on Trees",
    patternDescription:
      "Use a queue to visit the tree level by level instead of going deep first.",
    problems: [
      {
        id: "level-order",
        title: "Binary Tree Level Order Traversal",
        difficulty: "medium",
        link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
      },
      {
        id: "minimum-depth-bt",
        title: "Minimum Depth of Binary Tree",
        difficulty: "easy",
        link: "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
      },
      {
        id: "word-ladder",
        title: "Word Ladder",
        difficulty: "hard",
        link: "https://leetcode.com/problems/word-ladder/",
      },
    ],
  },
  {
    day: 25,
    week: 4,
    pattern: "BST Validation",
    patternDescription:
      "Carry valid min and max boundaries so every node respects the whole BST, not just its parent.",
    problems: [
      {
        id: "validate-bst",
        title: "Validate Binary Search Tree",
        difficulty: "medium",
        link: "https://leetcode.com/problems/validate-binary-search-tree/",
      },
      {
        id: "search-in-bst",
        title: "Search in a Binary Search Tree",
        difficulty: "easy",
        link: "https://leetcode.com/problems/search-in-a-binary-search-tree/",
      },
      {
        id: "recover-bst",
        title: "Recover Binary Search Tree",
        difficulty: "hard",
        link: "https://leetcode.com/problems/recover-binary-search-tree/",
      },
    ],
  },
  {
    day: 26,
    week: 4,
    pattern: "Graph Traversal",
    patternDescription:
      "Use DFS or BFS with visited tracking to explore one connected component at a time.",
    problems: [
      {
        id: "number-of-islands",
        title: "Number of Islands",
        difficulty: "medium",
        link: "https://leetcode.com/problems/number-of-islands/",
      },
      {
        id: "flood-fill",
        title: "Flood Fill",
        difficulty: "easy",
        link: "https://leetcode.com/problems/flood-fill/",
      },
      {
        id: "longest-increasing-path-matrix",
        title: "Longest Increasing Path in a Matrix",
        difficulty: "hard",
        link: "https://leetcode.com/problems/longest-increasing-path-in-a-matrix/",
      },
    ],
  },
  {
    day: 27,
    week: 4,
    pattern: "Graph Cycle Detection",
    patternDescription:
      "Use DFS state tracking to detect dependency cycles that make the schedule impossible.",
    problems: [
      {
        id: "course-schedule",
        title: "Course Schedule",
        difficulty: "medium",
        link: "https://leetcode.com/problems/course-schedule/",
      },
      {
        id: "find-path-exists-graph",
        title: "Find if Path Exists in Graph",
        difficulty: "easy",
        link: "https://leetcode.com/problems/find-if-path-exists-in-graph/",
      },
      {
        id: "critical-connections",
        title: "Critical Connections in a Network",
        difficulty: "hard",
        link: "https://leetcode.com/problems/critical-connections-in-a-network/",
      },
    ],
  },
  {
    day: 28,
    week: 4,
    pattern: "Week 4 Review",
    patternDescription:
      "Reinforce DFS, BFS, tree constraints, and graph traversal before the final stretch.",
    problems: [
      {
        id: "max-depth-review",
        title: "Review: Maximum Depth of Binary Tree",
        difficulty: "easy",
        link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
      },
      {
        id: "invert-tree-review",
        title: "Review: Invert Binary Tree",
        difficulty: "easy",
        link: "https://leetcode.com/problems/invert-binary-tree/",
      },
      {
        id: "same-tree-review",
        title: "Review: Same Tree",
        difficulty: "easy",
        link: "https://leetcode.com/problems/same-tree/",
      },
      {
        id: "subtree-review",
        title: "Review: Subtree of Another Tree",
        difficulty: "medium",
        link: "https://leetcode.com/problems/subtree-of-another-tree/",
      },
      {
        id: "level-order-review",
        title: "Review: Binary Tree Level Order Traversal",
        difficulty: "medium",
        link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
      },
      {
        id: "validate-bst-review",
        title: "Review: Validate Binary Search Tree",
        difficulty: "medium",
        link: "https://leetcode.com/problems/validate-binary-search-tree/",
      },
      {
        id: "number-of-islands-review",
        title: "Review: Number of Islands",
        difficulty: "medium",
        link: "https://leetcode.com/problems/number-of-islands/",
      },
      {
        id: "course-schedule-review",
        title: "Review: Course Schedule",
        difficulty: "medium",
        link: "https://leetcode.com/problems/course-schedule/",
      },
    ],
  },

  // ── Week 5: Mastery & Final Stretch ───────────────────────────────────────
  {
    day: 29,
    week: 5,
    pattern: "Mixed Pattern Battle",
    patternDescription:
      "Train the reflex of naming the right pattern before you touch the keyboard.",
    problems: [
      {
        id: "battle-two-sum",
        title: "Battle Round: Two Sum",
        difficulty: "easy",
        link: "https://leetcode.com/problems/two-sum/",
      },
      {
        id: "battle-container-water",
        title: "Battle Round: Container With Most Water",
        difficulty: "medium",
        link: "https://leetcode.com/problems/container-with-most-water/",
      },
      {
        id: "battle-longest-substring",
        title: "Battle Round: Longest Substring Without Repeating Characters",
        difficulty: "medium",
        link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      },
      {
        id: "battle-number-islands",
        title: "Battle Round: Number of Islands",
        difficulty: "medium",
        link: "https://leetcode.com/problems/number-of-islands/",
      },
      {
        id: "first-missing-positive-d29",
        title: "Battle Round: First Missing Positive",
        difficulty: "hard",
        link: "https://leetcode.com/problems/first-missing-positive/",
      },
    ],
  },
  {
    day: 30,
    week: 5,
    pattern: "Mock Interview Workflow",
    patternDescription:
      "Practice the full loop: understand, choose a pattern, explain clearly, code, then test.",
    problems: [
      {
        id: "mock-two-sum",
        title: "Mock Interview: Two Sum",
        difficulty: "easy",
        link: "https://leetcode.com/problems/two-sum/",
      },
      {
        id: "design-add-search-words",
        title: "Design Add and Search Words Data Structure",
        difficulty: "medium",
        link: "https://leetcode.com/problems/design-add-and-search-words-data-structure/",
      },
      {
        id: "word-search-ii",
        title: "Word Search II",
        difficulty: "hard",
        link: "https://leetcode.com/problems/word-search-ii/",
      },
    ],
  },
  {
    day: 31,
    week: 5,
    pattern: "Weakness Repair",
    patternDescription:
      "Turn confusion into a plan: revisit the problem that still feels slippery and rebuild it slowly.",
    problems: [
      {
        id: "weakness-pick-problem",
        title: "Pick Your Weakest Problem",
        difficulty: "easy",
        link: "/dashboard",
      },
      {
        id: "weakness-redo-without-notes",
        title: "Redo It Without Notes",
        difficulty: "medium",
        link: "/dashboard",
      },
      {
        id: "coin-change-d31",
        title: "Coin Change",
        difficulty: "medium",
        link: "https://leetcode.com/problems/coin-change/",
      },
      {
        id: "edit-distance-d31",
        title: "Edit Distance",
        difficulty: "hard",
        link: "https://leetcode.com/problems/edit-distance/",
      },
    ],
  },
  {
    day: 32,
    week: 5,
    pattern: "Speed Mode",
    patternDescription:
      "Solve faster by trusting pattern recognition instead of overthinking every move.",
    problems: [
      {
        id: "speed-easy-run",
        title: "Speed Run: Easy Pattern Match",
        difficulty: "easy",
        link: "/dashboard",
      },
      {
        id: "speed-medium-run",
        title: "Speed Run: Medium Pattern Match",
        difficulty: "medium",
        link: "/dashboard",
      },
      {
        id: "climbing-stairs-d32",
        title: "Climbing Stairs",
        difficulty: "easy",
        link: "https://leetcode.com/problems/climbing-stairs/",
      },
      {
        id: "word-break-ii",
        title: "Word Break II",
        difficulty: "hard",
        link: "https://leetcode.com/problems/word-break-ii/",
      },
    ],
  },
  {
    day: 33,
    week: 5,
    pattern: "Pattern Variations",
    patternDescription:
      "See how one core pattern survives even when the rules and constraints change.",
    problems: [
      {
        id: "variation-same-pattern",
        title: "Variation Drill: Same Pattern, New Constraint",
        difficulty: "medium",
        link: "/dashboard",
      },
      {
        id: "variation-modify-solution",
        title: "Variation Drill: Modify an Existing Solution",
        difficulty: "medium",
        link: "/dashboard",
      },
      {
        id: "squares-sorted-array",
        title: "Squares of a Sorted Array",
        difficulty: "easy",
        link: "https://leetcode.com/problems/squares-of-a-sorted-array/",
      },
      {
        id: "meeting-rooms-iii",
        title: "Meeting Rooms III",
        difficulty: "hard",
        link: "https://leetcode.com/problems/meeting-rooms-iii/",
      },
    ],
  },
  {
    day: 34,
    week: 5,
    pattern: "Pattern Recognition Drill",
    patternDescription:
      "Practice identifying the pattern before coding anything at all.",
    problems: [
      {
        id: "recognition-before-code",
        title: "Recognition Drill: Name the Pattern First",
        difficulty: "easy",
        link: "/dashboard",
      },
      {
        id: "recognition-mixed-prompts",
        title: "Recognition Drill: Mixed Prompt Classification",
        difficulty: "medium",
        link: "/dashboard",
      },
      {
        id: "product-except-self",
        title: "Product of Array Except Self",
        difficulty: "medium",
        link: "https://leetcode.com/problems/product-of-array-except-self/",
      },
      {
        id: "max-profit-job-scheduling",
        title: "Maximum Profit in Job Scheduling",
        difficulty: "hard",
        link: "https://leetcode.com/problems/job-scheduling-in-one-year/",
      },
    ],
  },
  {
    day: 35,
    week: 5,
    pattern: "Final Boss",
    patternDescription:
      "Bring everything together with one last confidence round built on pattern recognition.",
    problems: [
      {
        id: "final-boss-mixed-challenge",
        title: "Final Mixed Challenge",
        difficulty: "medium",
        link: "/dashboard",
      },
      {
        id: "final-boss-explain-strategy",
        title: "Explain Your Strategy Out Loud",
        difficulty: "hard",
        link: "/dashboard",
      },
    ],
  },
];

export const weekLabels: Record<number, string> = {
  1: "Arrays & Two Pointers",
  2: "Sliding Window & HashMap",
  3: "Stack & Binary Search",
  4: "Trees & Graphs",
  5: "Mastery & Interview Prep",
};

export const totalDays = roadmap.length;

export const totalProblems = roadmap.reduce(
  (acc, day) => acc + day.problems.length,
  0,
);
