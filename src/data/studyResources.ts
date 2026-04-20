export type DayStudyResource = {
  patternChecklist: string[];
  starterCode: string;
  testCases: string;
};

export const dayStudyResources: Record<number, DayStudyResource> = {
  1: {
    patternChecklist: [
      "Do I need to remember values I already saw?",
      "Can I turn the target into a missing complement?",
      "Would a HashMap avoid a nested loop?",
    ],
    starterCode: `function twoSum(nums, target) {

}`,
    testCases: `[
  { input: [[2, 7, 11, 15], 9], expected: [0, 1] }
]`,
  },
  2: {
    patternChecklist: [
      "Am I scanning prices from left to right?",
      "Do I only need the cheapest value seen so far?",
      "Can I update profit in one pass?",
    ],
    starterCode: `function maxProfit(prices) {

}`,
    testCases: `[
  { input: [[7, 1, 5, 3, 6, 4]], expected: 5 }
]`,
  },
  3: {
    patternChecklist: [
      "Does the answer depend on both ends of the string?",
      "Should I skip spaces or punctuation first?",
      "Can two pointers meet in the middle?",
    ],
    starterCode: `function isPalindrome(s) {

}`,
    testCases: `[
  { input: ["racecar"], expected: true }
]`,
  },
  4: {
    patternChecklist: [
      "Is the array sorted?",
      "Can the current sum tell me which pointer to move?",
      "Am I moving only one pointer per step?",
    ],
    starterCode: `function twoSumSorted(nums, target) {

}`,
    testCases: `[
  { input: [[2, 7, 11, 15], 9], expected: [1, 2] }
]`,
  },
  5: {
    patternChecklist: [
      "Is the shorter wall limiting the area?",
      "Should I keep the widest window first?",
      "Am I moving the shorter side only?",
    ],
    starterCode: `function maxArea(height) {

}`,
    testCases: `[
  { input: [[1, 8, 6, 2, 5, 4, 8, 3, 7]], expected: 49 }
]`,
  },
  6: {
    patternChecklist: [
      "Can I sort first to make pointer moves meaningful?",
      "Can I reduce 3Sum into a fixed value plus Two Sum?",
      "Did I remember to skip duplicates?",
    ],
    starterCode: `function threeSum(nums) {

}`,
    testCases: `[
  { input: [[-1, 0, 1, 2, -1, -4]], expected: [[-1, -1, 2], [-1, 0, 1]] }
]`,
  },
  7: {
    patternChecklist: [
      "Can I name the pattern before writing code?",
      "Would HashMap or Two Pointers solve this faster?",
      "Do I know why the pattern fits?",
    ],
    starterCode: `function reviewWeekOne() {
  // Pick 2 week-one problems.
  // Say the pattern out loud before coding.
}`,
    testCases: `[
  "Redo Two Sum without notes",
  "Redo Valid Palindrome without notes",
  "Explain why the chosen pattern fits each problem"
]`,
  },
  8: {
    patternChecklist: [
      "Is this asking for the best contiguous subarray?",
      "Can a negative running sum ever help later?",
      "Should I compare extending vs starting fresh?",
    ],
    starterCode: `function maxSubArray(nums) {

}`,
    testCases: `[
  { input: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]], expected: 6 },
  { input: [[1]], expected: 1 },
  { input: [[5, 4, -1, 7, 8]], expected: 23 }
]`,
  },
  9: {
    patternChecklist: [
      "Is the window valid only while characters are unique?",
      "Do duplicates force the left pointer to move?",
      "Am I tracking the longest valid window?",
    ],
    starterCode: `function lengthOfLongestSubstring(s) {

}`,
    testCases: `[
  { input: ["abcabcbb"], expected: 3 },
  { input: ["bbbbb"], expected: 1 },
  { input: ["pwwkew"], expected: 3 }
]`,
  },
  10: {
    patternChecklist: [
      "Am I searching for the smallest valid window?",
      "Do I expand first, then shrink while still valid?",
      "Am I updating the answer every time the target is reached?",
    ],
    starterCode: `function minSubArrayLen(target, nums) {

}`,
    testCases: `[
  { input: [7, [2, 3, 1, 2, 4, 3]], expected: 2 },
  { input: [4, [1, 4, 4]], expected: 1 }
]`,
  },
  11: {
    patternChecklist: [
      "Can I track character frequencies inside the window?",
      "Is the window valid when replacements needed are at most k?",
      "Do I shrink only when the window becomes too expensive to fix?",
    ],
    starterCode: `function characterReplacement(s, k) {

}`,
    testCases: `[
  { input: ["ABAB", 2], expected: 4 },
  { input: ["AABABBA", 1], expected: 4 }
]`,
  },
  12: {
    patternChecklist: [
      "Is the window size fixed by s1.length?",
      "Does order matter, or only frequency?",
      "Can I compare counts instead of substrings?",
    ],
    starterCode: `function checkInclusion(s1, s2) {

}`,
    testCases: `[
  { input: ["ab", "eidbaooo"], expected: true },
  { input: ["ab", "eidboaoo"], expected: false }
]`,
  },
  13: {
    patternChecklist: [
      "Is this about exact subarray sums rather than a valid window?",
      "Can prefix sums convert the problem into past-total lookups?",
      "Did I seed the map with prefix sum 0?",
    ],
    starterCode: `function subarraySum(nums, k) {

}`,
    testCases: `[
  { input: [[1, 1, 1], 2], expected: 2 },
  { input: [[1, 2, 3], 3], expected: 2 }
]`,
  },
  14: {
    patternChecklist: [
      "Can I tell Kadane apart from Sliding Window?",
      "Do I know when to use a Set vs a frequency map?",
      "Do I know when prefix sum beats a window?",
    ],
    starterCode: `function reviewWeekTwo() {
  // Redo 2 week-two problems.
  // Explain the pattern before coding.
}`,
    testCases: `[
  "Redo Maximum Subarray",
  "Redo Longest Substring Without Repeating Characters",
  "Explain which pattern felt hardest and why"
]`,
  },
  15: {
    patternChecklist: [
      "Does a closing symbol need to match the latest opening symbol?",
      "Would last-in-first-out behavior help?",
      "Should I push openings and pop on matching closings?",
    ],
    starterCode: `function isValid(s) {

}`,
    testCases: `[
  { input: ["()"], expected: true },
  { input: ["(]"], expected: false },
  { input: ["({})"], expected: true }
]`,
  },
  16: {
    patternChecklist: [
      "Am I waiting for the next greater value?",
      "Should the stack store indexes so I can compute distance?",
      "Do smaller temperatures get resolved when a warmer day appears?",
    ],
    starterCode: `function dailyTemperatures(temps) {

}`,
    testCases: `[
  { input: [[73, 74, 75, 71, 69, 72, 76, 73]], expected: [1, 1, 4, 2, 1, 1, 0, 0] }
]`,
  },
  17: {
    patternChecklist: [
      "Is the array sorted?",
      "Can I eliminate half the search space each step?",
      "Do I update left or right based on mid comparison?",
    ],
    starterCode: `function search(nums, target) {

}`,
    testCases: `[
  { input: [[-1, 0, 3, 5, 9, 12], 9], expected: 4 },
  { input: [[-1, 0, 3, 5, 9, 12], 2], expected: -1 }
]`,
  },
  18: {
    patternChecklist: [
      "Is one half of the rotated array still sorted?",
      "Can I detect which side is normal at mid?",
      "Can that sorted side tell me where the target cannot be?",
    ],
    starterCode: `function search(nums, target) {

}`,
    testCases: `[
  { input: [[4, 5, 6, 7, 0, 1, 2], 0], expected: 4 }
]`,
  },
  19: {
    patternChecklist: [
      "Am I looking for the rotation break?",
      "Can I compare mid with right to decide where the minimum lives?",
      "Does the unsorted side contain the pivot?",
    ],
    starterCode: `function findMin(nums) {

}`,
    testCases: `[
  { input: [[3, 4, 5, 1, 2]], expected: 1 }
]`,
  },
  20: {
    patternChecklist: [
      "Is each operator supposed to use the latest two numbers?",
      "Would a stack naturally model that order?",
      "Do I push numbers and pop two values on operators?",
    ],
    starterCode: `function evalRPN(tokens) {

}`,
    testCases: `[
  { input: [["2", "1", "+", "3", "*"]], expected: 9 }
]`,
  },
  21: {
    patternChecklist: [
      "Can I tell when LIFO solves the problem?",
      "Can I tell when binary search can cut the problem in half?",
      "Can I explain why the chosen pattern fits before coding?",
    ],
    starterCode: `function reviewWeekThree() {
  // Redo 2 week-three problems.
  // Explain the pattern out loud first.
}`,
    testCases: `[
  "Redo Valid Parentheses",
  "Redo Binary Search or Daily Temperatures",
  "Ask: stack or cut-in-half?"
]`,
  },
  22: {
    patternChecklist: [
      "Am I supposed to go as deep as possible before returning?",
      "Would recursion naturally process left and right children?",
      "Do I know what each recursive call should return?",
    ],
    starterCode: `function maxDepth(root) {

}`,
    testCases: `[
  { input: [[3, 9, 20, null, null, 15, 7]], expected: 3 }
]`,
  },
  23: {
    patternChecklist: [
      "Are two trees equal only if current nodes, left subtrees, and right subtrees all match?",
      "Is recursion the cleanest way to compare the same shape repeatedly?",
      "Do I handle null vs non-null immediately?",
    ],
    starterCode: `function isSameTree(p, q) {

}`,
    testCases: `[
  { input: [[1, 2, 3], [1, 2, 3]], expected: true },
  { input: [[1, 2], [1, null, 2]], expected: false }
]`,
  },
  24: {
    patternChecklist: [
      "Do I need to visit nodes level by level instead of deep first?",
      "Would a queue make the order natural?",
      "Can I process one level at a time by using the queue size?",
    ],
    starterCode: `function levelOrder(root) {

}`,
    testCases: `[
  { input: [[3, 9, 20, null, null, 15, 7]], expected: [[3], [9, 20], [15, 7]] }
]`,
  },
  25: {
    patternChecklist: [
      "Does every node have to stay within a valid min and max range?",
      "Is checking only parent-child values enough?",
      "Should I pass boundaries down recursively?",
    ],
    starterCode: `function isValidBST(root) {

}`,
    testCases: `[
  { input: [[2, 1, 3]], expected: true },
  { input: [[5, 1, 4, null, null, 3, 6]], expected: false }
]`,
  },
  26: {
    patternChecklist: [
      "Do I need to count connected land regions?",
      "Should I mark visited cells so I do not recount them?",
      "Will DFS or BFS clear one whole island at a time?",
    ],
    starterCode: `function numIslands(grid) {

}`,
    testCases: `[
  { input: [[["1", "1", "0"], ["1", "0", "0"], ["0", "0", "1"]]], expected: 2 }
]`,
  },
  27: {
    patternChecklist: [
      "Is this really a dependency graph?",
      "Would a cycle make the task impossible to finish?",
      "Can DFS with visiting states detect that cycle?",
    ],
    starterCode: `function canFinish(numCourses, prerequisites) {

}`,
    testCases: `[
  { input: [2, [[1, 0]]], expected: true },
  { input: [2, [[1, 0], [0, 1]]], expected: false }
]`,
  },
  28: {
    patternChecklist: [
      "Can I tell DFS apart from BFS quickly?",
      "Do I remember to track visited nodes in graph problems?",
      "Can I explain whether the problem wants depth, breadth, or cycle detection?",
    ],
    starterCode: `function reviewWeekFour() {
  // Redo 2 tree or graph problems.
  // Say DFS, BFS, or cycle detection before coding.
}`,
    testCases: `[
  "Redo Maximum Depth or Level Order Traversal",
  "Redo Number of Islands or Course Schedule",
  "Ask: tree or graph, and do I want DFS or BFS?"
]`,
  },
  29: {
    patternChecklist: [
      "What clue in the prompt points to a specific pattern first?",
      "Can I name the pattern before I even think about syntax?",
      "Am I choosing the tool that matches the problem shape, not my favorite template?",
    ],
    starterCode: `function solve(nums) {

}`,
    testCases: `[
  { input: [[1, 2, 3, 4]], expected: 4 },
  { input: [[1, 1, 1, 1]], expected: 1 }
]`,
  },
  30: {
    patternChecklist: [
      "Did I restate the problem clearly before solving it?",
      "Can I explain why the chosen pattern fits?",
      "Did I leave time to test edge cases out loud?",
    ],
    starterCode: `function twoSum(nums, target) {

}`,
    testCases: `[
  { input: [[2, 7, 11, 15], 9], expected: [0, 1] }
]`,
  },
  31: {
    patternChecklist: [
      "Which exact step feels weak: choosing the pattern, coding the invariant, or testing?",
      "Can I shrink the problem into a tiny version first?",
      "Can I solve it once without notes before calling it repaired?",
    ],
    starterCode: `// Reuse a previous problem.
// Pick the one that still makes you pause.
// Rebuild the solution from scratch.`,
    testCases: `// Reuse the original tests from the problem you picked.
// Add one edge case you previously forgot.`,
  },
  32: {
    patternChecklist: [
      "Can I name the pattern in under 10 seconds?",
      "Am I moving fast because I recognize the structure, not because I am guessing?",
      "Did I still run one quick sanity test before moving on?",
    ],
    starterCode: `function fastSolve(input) {

}`,
    testCases: `// Reuse previous problems.
// Time yourself and compare your first draft with your clean draft.`,
  },
  33: {
    patternChecklist: [
      "What stayed the same from the base problem?",
      "What changed in the constraints or allowed operations?",
      "Can I keep the pattern and only change the invariant?",
    ],
    starterCode: `// Modify an existing solution.
// Keep the core pattern.
// Update only what the new rule changes.`,
    testCases: `[
  { input: [[1, 2, 3], 3], expected: true },
  { input: [[1, 2, 3], 7], expected: false }
]`,
  },
  34: {
    patternChecklist: [
      "Can I list the strongest clues in the prompt before coding?",
      "Do those clues point to one pattern more strongly than the others?",
      "Can I justify the pattern choice in one sentence?",
    ],
    starterCode: `// N/A today.
// Read the prompt.
// Name the pattern before writing any code.`,
    testCases: `// Exercise: identify the pattern BEFORE coding.
// Say the pattern out loud, then explain why it fits.`,
  },
  35: {
    patternChecklist: [
      "What is the dominant pattern in this final challenge?",
      "Can I stay simple instead of mixing too many ideas too early?",
      "Did I test my answer and explain my reasoning clearly?",
    ],
    starterCode: `function finalChallenge(nums) {

}`,
    testCases: `[
  { input: [[3, 2, 4], 6], expected: [1, 2] }
]`,
  },
};
