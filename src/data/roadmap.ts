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
    pattern: "Two Pointers",
    patternDescription:
      "Use two indices moving toward each other to reduce O(n²) to O(n).",
    problems: [
      {
        id: "two-sum",
        title: "Two Sum",
        difficulty: "easy",
        link: "https://leetcode.com/problems/two-sum/",
      },
      {
        id: "valid-palindrome",
        title: "Valid Palindrome",
        difficulty: "easy",
        link: "https://leetcode.com/problems/valid-palindrome/",
      },
    ],
  },
  {
    day: 2,
    week: 1,
    pattern: "Two Pointers",
    patternDescription:
      "Extend two pointers to multi-target and sorted arrays.",
    problems: [
      {
        id: "3sum",
        title: "3Sum",
        difficulty: "medium",
        link: "https://leetcode.com/problems/3sum/",
      },
      {
        id: "container-water",
        title: "Container With Most Water",
        difficulty: "medium",
        link: "https://leetcode.com/problems/container-with-most-water/",
      },
    ],
  },
  {
    day: 3,
    week: 1,
    pattern: "Two Pointers",
    patternDescription: "Two pointers on sorted arrays and partitioning.",
    problems: [
      {
        id: "sort-colors",
        title: "Sort Colors",
        difficulty: "medium",
        link: "https://leetcode.com/problems/sort-colors/",
      },
      {
        id: "remove-duplicates",
        title: "Remove Duplicates from Sorted Array",
        difficulty: "easy",
        link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
      },
    ],
  },
  {
    day: 4,
    week: 1,
    pattern: "Prefix Sum",
    patternDescription:
      "Precompute cumulative sums to answer range queries in O(1).",
    problems: [
      {
        id: "range-sum-query",
        title: "Range Sum Query - Immutable",
        difficulty: "easy",
        link: "https://leetcode.com/problems/range-sum-query-immutable/",
      },
      {
        id: "product-except-self",
        title: "Product of Array Except Self",
        difficulty: "medium",
        link: "https://leetcode.com/problems/product-of-array-except-self/",
      },
    ],
  },
  {
    day: 5,
    week: 1,
    pattern: "Kadane's Algorithm",
    patternDescription: "Track running max to find the optimal subarray.",
    problems: [
      {
        id: "max-subarray",
        title: "Maximum Subarray",
        difficulty: "medium",
        link: "https://leetcode.com/problems/maximum-subarray/",
      },
      {
        id: "best-time-stocks",
        title: "Best Time to Buy and Sell Stock",
        difficulty: "easy",
        link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
      },
    ],
  },
  {
    day: 6,
    week: 1,
    pattern: "Intervals",
    patternDescription: "Sort + merge overlapping intervals.",
    problems: [
      {
        id: "merge-intervals",
        title: "Merge Intervals",
        difficulty: "medium",
        link: "https://leetcode.com/problems/merge-intervals/",
      },
      {
        id: "insert-interval",
        title: "Insert Interval",
        difficulty: "medium",
        link: "https://leetcode.com/problems/insert-interval/",
      },
    ],
  },
  {
    day: 7,
    week: 1,
    pattern: "Array Review",
    patternDescription:
      "Consolidate Week 1 patterns with mixed array problems.",
    problems: [
      {
        id: "rotate-array",
        title: "Rotate Array",
        difficulty: "medium",
        link: "https://leetcode.com/problems/rotate-array/",
      },
      {
        id: "find-min-rotated",
        title: "Find Minimum in Rotated Sorted Array",
        difficulty: "medium",
        link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
      },
    ],
  },

  // ── Week 2: Sliding Window & HashMap ──────────────────────────────────────
  {
    day: 8,
    week: 2,
    pattern: "Sliding Window (Fixed)",
    patternDescription:
      "Maintain a window of fixed size k to compute aggregates efficiently.",
    problems: [
      {
        id: "max-avg-subarray",
        title: "Maximum Average Subarray I",
        difficulty: "easy",
        link: "https://leetcode.com/problems/maximum-average-subarray-i/",
      },
      {
        id: "contains-duplicate-ii",
        title: "Contains Duplicate II",
        difficulty: "easy",
        link: "https://leetcode.com/problems/contains-duplicate-ii/",
      },
    ],
  },
  {
    day: 9,
    week: 2,
    pattern: "Sliding Window (Variable)",
    patternDescription: "Expand/shrink the window based on a condition.",
    problems: [
      {
        id: "longest-substring",
        title: "Longest Substring Without Repeating Characters",
        difficulty: "medium",
        link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
      },
      {
        id: "permutation-string",
        title: "Permutation in String",
        difficulty: "medium",
        link: "https://leetcode.com/problems/permutation-in-string/",
      },
    ],
  },
  {
    day: 10,
    week: 2,
    pattern: "Sliding Window (Advanced)",
    patternDescription: "Combine sliding window with frequency maps.",
    problems: [
      {
        id: "min-window-substring",
        title: "Minimum Window Substring",
        difficulty: "hard",
        link: "https://leetcode.com/problems/minimum-window-substring/",
      },
      {
        id: "longest-ones",
        title: "Max Consecutive Ones III",
        difficulty: "medium",
        link: "https://leetcode.com/problems/max-consecutive-ones-iii/",
      },
    ],
  },
  {
    day: 11,
    week: 2,
    pattern: "HashMap",
    patternDescription:
      "Use hash maps for O(1) lookups and frequency counting.",
    problems: [
      {
        id: "subarray-sum-k",
        title: "Subarray Sum Equals K",
        difficulty: "medium",
        link: "https://leetcode.com/problems/subarray-sum-equals-k/",
      },
      {
        id: "two-sum-ii",
        title: "Two Sum II - Input Array Is Sorted",
        difficulty: "medium",
        link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
      },
    ],
  },
  {
    day: 12,
    week: 2,
    pattern: "HashMap",
    patternDescription:
      "Anagram detection, grouping and character frequency problems.",
    problems: [
      {
        id: "group-anagrams",
        title: "Group Anagrams",
        difficulty: "medium",
        link: "https://leetcode.com/problems/group-anagrams/",
      },
      {
        id: "valid-anagram",
        title: "Valid Anagram",
        difficulty: "easy",
        link: "https://leetcode.com/problems/valid-anagram/",
      },
    ],
  },
  {
    day: 13,
    week: 2,
    pattern: "HashMap",
    patternDescription: "Longer prefix-sum patterns using hash maps.",
    problems: [
      {
        id: "contiguous-array",
        title: "Contiguous Array",
        difficulty: "medium",
        link: "https://leetcode.com/problems/contiguous-array/",
      },
      {
        id: "longest-consec-seq",
        title: "Longest Consecutive Sequence",
        difficulty: "medium",
        link: "https://leetcode.com/problems/longest-consecutive-sequence/",
      },
    ],
  },
  {
    day: 14,
    week: 2,
    pattern: "Sliding Window Review",
    patternDescription: "Mixed review of sliding window + hash map problems.",
    problems: [
      {
        id: "fruits-into-baskets",
        title: "Fruit Into Baskets",
        difficulty: "medium",
        link: "https://leetcode.com/problems/fruit-into-baskets/",
      },
      {
        id: "char-replacement",
        title: "Longest Repeating Character Replacement",
        difficulty: "medium",
        link: "https://leetcode.com/problems/longest-repeating-character-replacement/",
      },
    ],
  },

  // ── Week 3: Stack & Binary Search ─────────────────────────────────────────
  {
    day: 15,
    week: 3,
    pattern: "Stack",
    patternDescription: "LIFO structure for tracking pending/unresolved state.",
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
    ],
  },
  {
    day: 16,
    week: 3,
    pattern: "Monotonic Stack",
    patternDescription:
      "Maintain a monotonically increasing/decreasing stack for next-greater problems.",
    problems: [
      {
        id: "daily-temperatures",
        title: "Daily Temperatures",
        difficulty: "medium",
        link: "https://leetcode.com/problems/daily-temperatures/",
      },
      {
        id: "next-greater-element",
        title: "Next Greater Element I",
        difficulty: "easy",
        link: "https://leetcode.com/problems/next-greater-element-i/",
      },
    ],
  },
  {
    day: 17,
    week: 3,
    pattern: "Monotonic Stack (Advanced)",
    patternDescription:
      "Extend monotonic stack to area and largest rectangle problems.",
    problems: [
      {
        id: "largest-rectangle",
        title: "Largest Rectangle in Histogram",
        difficulty: "hard",
        link: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
      },
      {
        id: "trapping-rain",
        title: "Trapping Rain Water",
        difficulty: "hard",
        link: "https://leetcode.com/problems/trapping-rain-water/",
      },
    ],
  },
  {
    day: 18,
    week: 3,
    pattern: "Binary Search",
    patternDescription:
      "Eliminate half the search space each iteration — O(log n).",
    problems: [
      {
        id: "binary-search",
        title: "Binary Search",
        difficulty: "easy",
        link: "https://leetcode.com/problems/binary-search/",
      },
      {
        id: "first-bad-version",
        title: "First Bad Version",
        difficulty: "easy",
        link: "https://leetcode.com/problems/first-bad-version/",
      },
    ],
  },
  {
    day: 19,
    week: 3,
    pattern: "Binary Search (Rotated)",
    patternDescription:
      "Apply binary search logic to rotated and modified sorted arrays.",
    problems: [
      {
        id: "search-rotated",
        title: "Search in Rotated Sorted Array",
        difficulty: "medium",
        link: "https://leetcode.com/problems/search-in-rotated-sorted-array/",
      },
      {
        id: "find-peak",
        title: "Find Peak Element",
        difficulty: "medium",
        link: "https://leetcode.com/problems/find-peak-element/",
      },
    ],
  },
  {
    day: 20,
    week: 3,
    pattern: "Binary Search on Answer",
    patternDescription:
      "Binary search on the answer space, not the array index.",
    problems: [
      {
        id: "koko-bananas",
        title: "Koko Eating Bananas",
        difficulty: "medium",
        link: "https://leetcode.com/problems/koko-eating-bananas/",
      },
      {
        id: "capacity-ships",
        title: "Capacity To Ship Packages Within D Days",
        difficulty: "medium",
        link: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/",
      },
    ],
  },
  {
    day: 21,
    week: 3,
    pattern: "Stack & Binary Search Review",
    patternDescription: "Mixed review — consolidate Week 3 patterns.",
    problems: [
      {
        id: "evaluate-rpn",
        title: "Evaluate Reverse Polish Notation",
        difficulty: "medium",
        link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
      },
      {
        id: "search-2d-matrix",
        title: "Search a 2D Matrix",
        difficulty: "medium",
        link: "https://leetcode.com/problems/search-a-2d-matrix/",
      },
    ],
  },

  // ── Week 4: Trees & Graphs ─────────────────────────────────────────────────
  {
    day: 22,
    week: 4,
    pattern: "Binary Tree — DFS",
    patternDescription:
      "Recursive depth-first traversals: inorder, preorder, postorder.",
    problems: [
      {
        id: "inorder-traversal",
        title: "Binary Tree Inorder Traversal",
        difficulty: "easy",
        link: "https://leetcode.com/problems/binary-tree-inorder-traversal/",
      },
      {
        id: "max-depth",
        title: "Maximum Depth of Binary Tree",
        difficulty: "easy",
        link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
      },
    ],
  },
  {
    day: 23,
    week: 4,
    pattern: "Binary Tree — BFS",
    patternDescription: "Level-order traversal using a queue.",
    problems: [
      {
        id: "level-order",
        title: "Binary Tree Level Order Traversal",
        difficulty: "medium",
        link: "https://leetcode.com/problems/binary-tree-level-order-traversal/",
      },
      {
        id: "right-side-view",
        title: "Binary Tree Right Side View",
        difficulty: "medium",
        link: "https://leetcode.com/problems/binary-tree-right-side-view/",
      },
    ],
  },
  {
    day: 24,
    week: 4,
    pattern: "BST",
    patternDescription:
      "Leverage BST ordering invariants for efficient searching and validation.",
    problems: [
      {
        id: "validate-bst",
        title: "Validate Binary Search Tree",
        difficulty: "medium",
        link: "https://leetcode.com/problems/validate-binary-search-tree/",
      },
      {
        id: "kth-smallest-bst",
        title: "Kth Smallest Element in a BST",
        difficulty: "medium",
        link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
      },
    ],
  },
  {
    day: 25,
    week: 4,
    pattern: "Graph — BFS/DFS",
    patternDescription:
      "Traverse graph nodes with visited tracking to avoid cycles.",
    problems: [
      {
        id: "number-of-islands",
        title: "Number of Islands",
        difficulty: "medium",
        link: "https://leetcode.com/problems/number-of-islands/",
      },
      {
        id: "clone-graph",
        title: "Clone Graph",
        difficulty: "medium",
        link: "https://leetcode.com/problems/clone-graph/",
      },
    ],
  },
  {
    day: 26,
    week: 4,
    pattern: "Graph — Topological Sort",
    patternDescription:
      "Detect cycles and order dependencies using Kahn's algorithm or DFS.",
    problems: [
      {
        id: "course-schedule",
        title: "Course Schedule",
        difficulty: "medium",
        link: "https://leetcode.com/problems/course-schedule/",
      },
      {
        id: "course-schedule-ii",
        title: "Course Schedule II",
        difficulty: "medium",
        link: "https://leetcode.com/problems/course-schedule-ii/",
      },
    ],
  },
  {
    day: 27,
    week: 4,
    pattern: "Union-Find",
    patternDescription:
      "Efficiently group connected components with path compression + union by rank.",
    problems: [
      {
        id: "number-connected-components",
        title: "Number of Connected Components in an Undirected Graph",
        difficulty: "medium",
        link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
      },
      {
        id: "redundant-connection",
        title: "Redundant Connection",
        difficulty: "medium",
        link: "https://leetcode.com/problems/redundant-connection/",
      },
    ],
  },
  {
    day: 28,
    week: 4,
    pattern: "Trees & Graphs Review",
    patternDescription:
      "Mixed review — consolidate all tree and graph patterns.",
    problems: [
      {
        id: "lowest-common-ancestor",
        title: "Lowest Common Ancestor of a BST",
        difficulty: "medium",
        link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
      },
      {
        id: "pacific-atlantic",
        title: "Pacific Atlantic Water Flow",
        difficulty: "medium",
        link: "https://leetcode.com/problems/pacific-atlantic-water-flow/",
      },
    ],
  },

  // ── Final: Mock Interviews ─────────────────────────────────────────────────
  {
    day: 29,
    week: 5,
    pattern: "Mock Interview — Round 1",
    patternDescription: "Simulate a real interview. 45 minutes, no hints.",
    problems: [
      {
        id: "mock-1-a",
        title: "Word Break",
        difficulty: "medium",
        link: "https://leetcode.com/problems/word-break/",
      },
      {
        id: "mock-1-b",
        title: "Coin Change",
        difficulty: "medium",
        link: "https://leetcode.com/problems/coin-change/",
      },
      {
        id: "mock-1-c",
        title: "Jump Game",
        difficulty: "medium",
        link: "https://leetcode.com/problems/jump-game/",
      },
    ],
  },
  {
    day: 30,
    week: 5,
    pattern: "Mock Interview — Round 2",
    patternDescription: "Final gauntlet. Mixed patterns. Think out loud.",
    problems: [
      {
        id: "mock-2-a",
        title: "Meeting Rooms II",
        difficulty: "medium",
        link: "https://leetcode.com/problems/meeting-rooms-ii/",
      },
      {
        id: "mock-2-b",
        title: "Merge K Sorted Lists",
        difficulty: "hard",
        link: "https://leetcode.com/problems/merge-k-sorted-lists/",
      },
      {
        id: "mock-2-c",
        title: "Alien Dictionary",
        difficulty: "hard",
        link: "https://leetcode.com/problems/alien-dictionary/",
      },
    ],
  },
];

export const weekLabels: Record<number, string> = {
  1: "Arrays & Two Pointers",
  2: "Sliding Window & HashMap",
  3: "Stack & Binary Search",
  4: "Trees & Graphs",
  5: "Mock Interviews",
};

export const totalProblems = roadmap.reduce(
  (acc, day) => acc + day.problems.length,
  0,
);
