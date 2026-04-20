export type PatternLesson = {
  emoji: string;
  beginnerExplanation: string;
  ahaText: string;
  steps: string[];
  commonMistake: string;
  diagram: string;
  exampleWalkthrough: {
    title: string;
    steps: string[];
    result: string;
  };
  practiceHints?: Array<{ title: string; hint: string }>;
};

export const lessons: Record<number, PatternLesson> = {
  1: {
    emoji: "🧠",
    beginnerExplanation:
      "Two Sum looks scary at first because your brain wants to compare every number with every other number. That works, but it is slow. The smarter idea is this: for each number, ask 'what number do I still need to reach the target?' Then use a HashMap like a tiny memory box to remember what you have already seen. Instead of searching the whole array again, you do one quick lookup and move on.",
    ahaText:
      "The real trick is to search for the missing piece, not to test every possible pair.",
    steps: [
      "Walk through the array once from left to right.",
      "For the current number, compute the complement: target minus current number.",
      "Check whether that complement is already in your HashMap.",
      "If it is, you found the pair. If it is not, store the current number and keep going.",
    ],
    commonMistake:
      "Storing the current number before checking its complement can accidentally pair a number with itself. Check first, then store.",
    diagram: `flowchart TD
    A([Loop through nums]) --> B{Need target - num\\nalready seen?}
    B -- YES --> C([Found the pair 🎯])
    B -- NO --> D([Store num in HashMap])
    D --> A`,
    exampleWalkthrough: {
      title: "Quick example: nums = [2, 7, 11, 15], target = 9",
      steps: [
        "See 2: you need 7, but it is not in the map yet. Store 2.",
        "See 7: you need 2, and 2 is already in the map.",
        "Stop immediately. The answer is the pair 2 and 7.",
      ],
      result: "One scan, one match, done.",
    },
    practiceHints: [
      {
        title: "Top K Frequent Elements",
        hint: "Build a frequency map first, then select the top k entries. A min-heap of size k or a bucket approach avoids sorting the entire map.",
      },
      {
        title: "LRU Cache",
        hint: "You need O(1) get AND O(1) ordered removal. HashMap for instant key access, doubly-linked list for O(1) move-to-front and tail eviction.",
      },
    ],
  },
  2: {
    emoji: "📈",
    beginnerExplanation:
      "This problem is not really about buying and selling. It is about remembering one useful fact while you scan the array: the cheapest price so far. Every new price asks a simple question: 'If I sold today, how much profit would I make from the cheapest day I have seen?' That means you never need to test every buy day against every sell day. One pass is enough.",
    ahaText:
      "Keep two memories only: the lowest price so far and the best profit so far.",
    steps: [
      "Start with the first price as the lowest price seen so far.",
      "Move through the array one day at a time.",
      "For each price, compute profit = current price minus lowest price so far.",
      "Update the best profit if that profit is better, then update the lowest price if today's price is smaller.",
    ],
    commonMistake:
      "Many beginners try every buy day against every sell day. That works, but it ignores the fact that you only need the cheapest earlier price.",
    diagram: `flowchart TD
    A([Read current price]) --> B{Lower than\\nlowest so far?}
    B -- YES --> C([Update lowest price])
    B -- NO --> D([Compute today's profit])
    C --> E([Move to next day])
    D --> F{Better than\\nbest profit?}
    F -- YES --> G([Update best profit])
    F -- NO --> E
    G --> E`,
    exampleWalkthrough: {
      title: "Quick example: prices = [7, 1, 5, 3, 6, 4]",
      steps: [
        "Start with lowest = 7, then see 1 and update lowest to 1.",
        "See 5: profit would be 4, so best profit becomes 4.",
        "See 6 later: profit would be 5, so best profit becomes 5.",
      ],
      result: "Buy at 1, sell at 6, profit = 5.",
    },
    practiceHints: [
      {
        title: "Best Time to Buy and Sell Stock II",
        hint: "Unlike one transaction, any positive daily difference is profit. Sum every consecutive up-day without tracking exact buy/sell positions.",
      },
      {
        title: "Best Time to Buy and Sell Stock III",
        hint: "Track four states at each price: after first buy, after first sell, after second buy, after second sell. Each state updates from the previous one.",
      },
    ],
  },
  3: {
    emoji: "🔁",
    beginnerExplanation:
      "A palindrome is just something that reads the same from both ends, like looking at a word in a mirror. So the problem becomes much simpler if you use two pointers: one starts on the left, one on the right, and both move toward the middle. If the characters keep matching, you keep going. If they ever disagree, the answer is immediately false. No fancy trick, just a clean way to compare mirror positions.",
    ahaText: "When both ends matter, check both ends at the same time.",
    steps: [
      "Place one pointer at the start of the string and one at the end.",
      "If you are ignoring spaces or punctuation, skip those characters before comparing.",
      "Compare the left and right characters.",
      "If they match, move inward. If they do not match, return false right away.",
      "If the pointers cross, the string is a palindrome.",
    ],
    commonMistake:
      "Forgetting to skip spaces or punctuation leads to false mismatches even when the cleaned string is a palindrome.",
    diagram: `flowchart LR
    A([left pointer]) --> B{chars match?}
    C([right pointer]) --> B
    B -- YES --> D([Move both inward])
    B -- NO --> E([Not a palindrome])
    D --> B`,
    exampleWalkthrough: {
      title: "Quick example: s = 'racecar'",
      steps: [
        "Compare r with r, then move inward.",
        "Compare a with a, then compare c with c.",
        "Everything matches until the pointers meet in the middle.",
      ],
      result: "The string is a palindrome.",
    },
    practiceHints: [
      {
        title: "Valid Palindrome II",
        hint: "Same two-pointer approach as Valid Palindrome. When characters mismatch, try skipping left or right — one resulting substring must be a palindrome.",
      },
      {
        title: "Palindrome Pairs",
        hint: "For every word, a reverse-lookup HashMap maps each word's reverse to its index. Check prefix/suffix palindrome conditions to find valid pairs.",
      },
    ],
  },
  4: {
    emoji: "👉👈",
    beginnerExplanation:
      "This is Two Sum again, but now the array is sorted. That sorted order is the whole gift. Put one pointer on the smallest number and one on the biggest. If the sum is too small, you need a bigger number, so move the left pointer. If the sum is too big, you need a smaller number, so move the right pointer. The sorted array tells you exactly which direction makes sense.",
    ahaText:
      "Sorting removes the guesswork. The current sum tells you exactly which pointer to move.",
    steps: [
      "Set left to the first index and right to the last index.",
      "Compute the sum of numbers at left and right.",
      "If the sum is too small, move left to the right.",
      "If the sum is too large, move right to the left.",
      "If the sum matches the target, return the answer.",
    ],
    commonMistake:
      "Moving both pointers at once throws away information. Only one side should move, based on whether the sum is too small or too large.",
    diagram: `flowchart LR
    A([left]) --> B{left + right\\ncompared to target}
    C([right]) --> B
    B -- too small --> D([Move left →])
    B -- too large --> E([Move right ←])
    B -- equal --> F([Found the pair ✅])`,
    exampleWalkthrough: {
      title: "Quick example: nums = [2, 7, 11, 15], target = 9",
      steps: [
        "Start with left = 2 and right = 15. Sum is too large.",
        "Move right leftward until you compare 2 and 7.",
        "Now the sum is 9, so you found the pair.",
      ],
      result: "Sorted order tells you exactly how to adjust.",
    },
    practiceHints: [
      {
        title: "3Sum Closest",
        hint: "Sort first, fix one pointer, scan with left/right. Track the smallest absolute difference from target and update on each iteration.",
      },
      {
        title: "Median of Two Sorted Arrays",
        hint: "Binary search on the smaller array to find the partition where combined left halves have exactly half the total count and cross-boundary values stay in order.",
      },
    ],
  },
  5: {
    emoji: "💧",
    beginnerExplanation:
      "Think of each number as the height of a wall. Pick one wall on the left and one on the right, and those two walls make a container. The water you can hold depends on two things: how far apart the walls are and which wall is shorter. The shorter wall is the boss here. That is why, after checking an area, you only move the shorter side and hope to find a taller wall.",
    ahaText:
      "The shorter wall is the bottleneck. Moving the taller wall cannot help until the shorter wall improves.",
    steps: [
      "Start with one pointer at the far left and one at the far right.",
      "Compute the current area using width times the shorter wall.",
      "Save the best area seen so far.",
      "Move the pointer that points to the shorter wall.",
      "Repeat until the pointers meet.",
    ],
    commonMistake:
      "Moving the taller wall feels fair, but it cannot raise the water level because the shorter wall is still limiting everything.",
    diagram: `flowchart LR
    A([left wall]) --> B{Which wall\\nis shorter?}
    C([right wall]) --> B
    B -- left shorter --> D([Move left →])
    B -- right shorter --> E([Move right ←])
    D --> F([Update best area])
    E --> F
    F --> B`,
    exampleWalkthrough: {
      title: "Quick example: heights = [1, 8, 6, 2, 5, 4, 8, 3, 7]",
      steps: [
        "Start with 1 and 7. Area is 8 times 1 = 8.",
        "Move the left pointer because 1 is the shorter wall.",
        "Later, comparing 8 and 7 gives a much larger container.",
      ],
      result: "The best area ends up being 49.",
    },
    practiceHints: [
      {
        title: "Move Zeroes",
        hint: "Two-pointer write-scan: write pointer tracks the next non-zero slot, read pointer scans ahead. Fill the remaining tail with zeros afterward.",
      },
      {
        title: "Trapping Rain Water",
        hint: "Left and right pointers converge inward. The side with the smaller max height is the bottleneck — water there equals that max minus the current bar height.",
      },
    ],
  },
  6: {
    emoji: "➕",
    beginnerExplanation:
      "3Sum is easier when you stop thinking about three numbers at once. Sort the array first. Then freeze one number and turn the rest of the problem into a Two Sum search with left and right pointers. So really, 3Sum is just Two Sum with one extra setup step. The annoying part is duplicates, so you skip repeated values to avoid returning the same triplet again and again.",
    ahaText:
      "Sort once, fix one number, then let two pointers find the other two.",
    steps: [
      "Sort the array so pointer moves become meaningful.",
      "Pick one number as the fixed value.",
      "Set left and right pointers on the remaining portion of the array.",
      "If the total is too small, move left. If the total is too large, move right. If it is zero, record the triplet.",
      "Skip duplicate values for the fixed number and for the two pointers.",
    ],
    commonMistake:
      "Not skipping duplicates creates repeated answers and makes the output look wrong even when the pointer logic is fine.",
    diagram: `flowchart TD
    A([Sort array]) --> B([Fix one number])
    B --> C([Set left and right pointers])
    C --> D{sum < 0, > 0, or = 0?}
    D -- too small --> E([Move left →])
    D -- too large --> F([Move right ←])
    D -- zero --> G([Save triplet and skip duplicates])
    E --> D
    F --> D
    G --> D`,
    exampleWalkthrough: {
      title: "Quick example: nums = [-1, 0, 1, 2, -1, -4]",
      steps: [
        "Sort first: [-4, -1, -1, 0, 1, 2].",
        "Fix -1, then use left and right pointers on the rest.",
        "You discover [-1, -1, 2] and [-1, 0, 1], then skip duplicates.",
      ],
      result: "Sorting turns chaos into something pointers can manage.",
    },
    practiceHints: [
      {
        title: "Sort Colors",
        hint: "Dutch National Flag: three pointers partition 0s, 1s, and 2s in one pass. Swap based on the value at mid while mid <= high.",
      },
      {
        title: "First Missing Positive",
        hint: "Use the array as its own hash table: put value k at index k-1 for all 1 <= k <= n. Then scan for the first index where value != index + 1.",
      },
    ],
  },
  7: {
    emoji: "🧭",
    beginnerExplanation:
      "The goal of review day is not to memorize code line by line. It is to notice the shape of a problem. Need to remember what you have seen? That smells like a HashMap. Comparing two ends at once? That is a two-pointer problem. Tracking the cheapest point before a later profit? That is the stock pattern from day two. Once you can name the pattern before you touch the keyboard, the solution becomes much easier to build.",
    ahaText:
      "Beginners usually focus on syntax. Strong problem solvers focus on pattern recognition first.",
    steps: [
      "Read the prompt and ask what the problem wants you to remember or compare.",
      "If you need fast memory of past values, think HashMap.",
      "If the answer depends on the left and right sides together, think two pointers.",
      "If the array is sorted, ask how that order helps you move more intelligently.",
      "Before coding, say the pattern out loud. If you can name it, you can usually build it.",
    ],
    commonMistake:
      "Trying to memorize exact code templates before recognizing the pattern usually makes review day feel harder than it should.",
    diagram: `flowchart TD
    A([Read the problem]) --> B{Need to remember\\npast values?}
    B -- yes --> C([HashMap])
    B -- no --> D{Comparing left\\nand right sides?}
    D -- yes --> E([Two Pointers])
    D -- no --> F{Tracking best buy\\npoint so far?}
    F -- yes --> G([Running Minimum])
    F -- no --> H([Re-read the prompt and find the pattern clue])`,
    exampleWalkthrough: {
      title: "Quick example: a problem says 'sorted array' and 'target sum'",
      steps: [
        "You notice the array is sorted, so pointer moves can be smart instead of random.",
        "That immediately suggests a left pointer and a right pointer.",
        "Now you are solving a pattern, not guessing a technique.",
      ],
      result: "Recognition comes before implementation.",
    },
  },
  8: {
    emoji: "🏄",
    beginnerExplanation:
      "Maximum Subarray is the moment where brute force finally gets kicked out of the room. You do not need to test every possible subarray. Instead, carry a running sum as you move forward. If that running sum ever becomes negative, it stops being helpful. A negative backpack does not help you climb a hill; it only slows you down. So you drop it and start fresh from the current number.",
    ahaText:
      "If the running sum is negative, keeping it only makes the next subarray worse.",
    steps: [
      "Keep a current sum for the best subarray ending at this position.",
      "Keep a max sum for the best answer seen anywhere so far.",
      "For each number, decide whether to start fresh at this number or extend the previous subarray.",
      "Update the global maximum after each step.",
    ],
    commonMistake:
      "Resetting to zero blindly can break cases where every number is negative. Compare against the current number itself, not just zero.",
    diagram: `flowchart LR
    A([Read next number]) --> B{currentSum + num\\nbetter than num?}
    B -- YES --> C([Extend the subarray])
    B -- NO --> D([Start fresh here])
    C --> E([Update best sum])
    D --> E
    E --> A`,
    exampleWalkthrough: {
      title: "Quick example: nums = [-2, 1, -3, 4, -1, 2, 1]",
      steps: [
        "Negative starts hurt, so the run really begins at 4.",
        "From there, 4 + -1 + 2 + 1 stays positive and keeps growing.",
        "That stretch gives the best total you see.",
      ],
      result: "The maximum subarray sum is 6.",
    },
    practiceHints: [
      {
        title: "Running Sum of 1d Array",
        hint: "Each position is prefix[i] = prefix[i-1] + nums[i]. One forward pass builds the entire output array.",
      },
      {
        title: "Maximum Sum of 3 Non-Overlapping Subarrays",
        hint: "Pre-compute the best window ending at or before each index and the best window starting at or after each index. Try every middle window and combine the three.",
      },
    ],
  },
  9: {
    emoji: "🪟",
    beginnerExplanation:
      "Sliding window sounds fancy, but it is really just a moving rectangle over your string. For this problem, the rule is simple: the window must never contain duplicate characters. So you expand to the right to grow your answer, and when a duplicate sneaks in, you shrink from the left until the rule is true again. It feels like running a tiny nightclub: if the same guest appears twice, somebody has to leave before the party continues.",
    ahaText:
      "Expand when the window is valid. Shrink only when the rule is broken.",
    steps: [
      "Use a left pointer and a right pointer to describe the current window.",
      "Keep a Set of the characters currently inside the window.",
      "Add the right character if it is new.",
      "If it is a duplicate, move the left pointer and remove characters until the duplicate is gone.",
      "Track the biggest valid window length.",
    ],
    commonMistake:
      "Only moving the right pointer after finding a duplicate leaves the broken window unchanged. The left side has to shrink until the rule is fixed.",
    diagram: `flowchart TD
    A([Add right character]) --> B{Already in set?}
    B -- NO --> C([Expand window])
    B -- YES --> D([Move left and remove chars])
    C --> E([Update longest length])
    D --> B
    E --> A`,
    exampleWalkthrough: {
      title: "Quick example: s = 'abcabcbb'",
      steps: [
        "Grow to 'abc' and record length 3.",
        "The next 'a' is a duplicate, so move left until 'a' is gone.",
        "Keep sliding, but no later window beats length 3.",
      ],
      result: "The longest substring without repeats has length 3.",
    },
    practiceHints: [
      {
        title: "Contains Duplicate II",
        hint: "Maintain a Set as your sliding window. Before inserting a new element, remove the one that would push the window past size k.",
      },
      {
        title: "Substring with Concatenation of All Words",
        hint: "Slide a window that moves one word-length at a time. Track word counts in the window with a HashMap and compare to the target count map.",
      },
    ],
  },
  10: {
    emoji: "📏",
    beginnerExplanation:
      "This is still sliding window, but now the goal changes. You are not looking for the biggest valid window. You are looking for the smallest window whose sum is big enough. That means you expand to the right until the window becomes valid, then you immediately try to shrink it from the left to see if you can keep the rule while making it smaller. It is like tightening a belt one notch at a time after it finally fits.",
    ahaText:
      "Once the window reaches the target, shrinking is where the real optimization happens.",
    steps: [
      "Grow the window by moving the right pointer and adding values to the running sum.",
      "As soon as the sum is at least the target, record the current window size.",
      "Then move the left pointer to shrink the window while it is still valid.",
      "Keep the smallest valid length seen so far.",
    ],
    commonMistake:
      "Stopping as soon as you hit the target misses shorter valid windows hiding inside the current one.",
    diagram: `flowchart TD
    A([Expand right]) --> B([Add to sum])
    B --> C{sum >= target?}
    C -- NO --> A
    C -- YES --> D([Update minimum length])
    D --> E([Shrink from left])
    E --> C`,
    exampleWalkthrough: {
      title: "Quick example: target = 7, nums = [2, 3, 1, 2, 4, 3]",
      steps: [
        "Grow until [2, 3, 1, 2] reaches 8, so length 4 is valid.",
        "Shrink from the left and keep checking.",
        "Eventually [4, 3] reaches 7 with length 2, which is even better.",
      ],
      result: "The minimum valid length is 2.",
    },
    practiceHints: [
      {
        title: "Maximum Average Subarray I",
        hint: "Fixed window of size k. Pre-compute the initial sum, then slide by subtracting the exiting element and adding the entering one.",
      },
      {
        title: "Minimum Window Substring",
        hint: "Expand right until all required characters are present, then shrink left for the smallest valid window. Track character counts and a satisfied-character counter.",
      },
    ],
  },
  11: {
    emoji: "🔠",
    beginnerExplanation:
      "Here the window is allowed to be a little messy. You can replace up to k characters, so the window stays valid as long as the number of 'wrong' characters is not too large. The useful trick is to track the most frequent character inside the window. If the window size minus that max frequency is greater than k, the window is too expensive to fix, so you shrink it. In plain English: if the room has too many oddballs, tidy it up from the left.",
    ahaText:
      "A window is valid when the characters you would need to replace are at most k.",
    steps: [
      "Slide a window over the string with left and right pointers.",
      "Track character frequencies inside the window.",
      "Keep the count of the most frequent character seen in the current window logic.",
      "If window size minus max frequency becomes greater than k, shrink from the left.",
      "Track the largest valid window length.",
    ],
    commonMistake:
      "Trying to recompute the perfect most frequent value from scratch every time makes the solution heavier than it needs to be.",
    diagram: `flowchart TD
    A([Expand right]) --> B([Update frequency map])
    B --> C{window size - maxFreq > k?}
    C -- YES --> D([Shrink left])
    C -- NO --> E([Update best length])
    D --> E
    E --> A`,
    exampleWalkthrough: {
      title: "Quick example: s = 'AABABBA', k = 1",
      steps: [
        "AABA works because one replacement can turn it into AAAA.",
        "When the window grows too messy, shrink it from the left.",
        "The best valid window length you keep is 4.",
      ],
      result: "The answer is 4.",
    },
    practiceHints: [
      {
        title: "Max Consecutive Ones",
        hint: "Single-pass counter: increment on 1, reset to 0 on 0, track the running maximum.",
      },
      {
        title: "Sliding Window Maximum",
        hint: "Monotonic deque of indices with decreasing values. Pop the back when a larger element arrives, pop the front when its index falls outside the window.",
      },
    ],
  },
  12: {
    emoji: "🧩",
    beginnerExplanation:
      "Permutation in String is a fixed-size sliding window problem wearing a disguise. If s1 has length 2, then any matching permutation inside s2 must also have length 2. So you slide a window of exactly that size across s2 and compare character counts. You are not checking order. You are checking whether the same letters are present in the right amounts. Think 'bag of letters', not 'exact word'.",
    ahaText:
      "When order does not matter, compare frequencies, not characters one by one.",
    steps: [
      "Build a frequency count for s1.",
      "Slide a fixed-size window of length s1.length across s2.",
      "Update the window counts as one character enters and one leaves.",
      "If the window counts match the target counts, you found a permutation.",
    ],
    commonMistake:
      "Comparing sorted substrings each time works, but it turns a nice sliding-window problem into unnecessary extra work.",
    diagram: `flowchart LR
    A([Build target counts]) --> B([Slide fixed window])
    B --> C{Window counts\\nmatch target?}
    C -- YES --> D([Permutation found ✅])
    C -- NO --> E([Move window by one])
    E --> C`,
    exampleWalkthrough: {
      title: "Quick example: s1 = 'ab', s2 = 'eidbaooo'",
      steps: [
        "Use a window of size 2 because s1 has length 2.",
        "When the window reaches 'ba', the counts match 'ab'.",
        "That means a permutation exists, even though the order is different.",
      ],
      result: "Return true.",
    },
    practiceHints: [
      {
        title: "Ransom Note",
        hint: "Count character frequencies in the magazine first. Then verify the ransom note never needs more of any character than the magazine provides.",
      },
      {
        title: "Smallest Range Covering Elements from K Lists",
        hint: "Merge all (value, list-index) pairs into a sorted sequence. Slide a window that always covers at least one element from every list and track the minimum range width.",
      },
    ],
  },
  13: {
    emoji: "🧮",
    beginnerExplanation:
      "Subarray Sum Equals K looks like a window problem, but it is not safe to use sliding window when negative numbers might appear. The better idea is prefix sum plus HashMap. As you walk through the array, keep a running total. If the current prefix sum is current, then any earlier prefix sum equal to current minus k creates a subarray summing to k. So the HashMap is really counting how many useful past totals are waiting for you.",
    ahaText:
      "You are not searching for subarrays directly. You are counting matching prefix sums.",
    steps: [
      "Keep a running prefix sum while scanning the array.",
      "Use a HashMap to count how many times each prefix sum has appeared.",
      "At each step, look for prefixSum - k in the map.",
      "Add that count to your answer, then record the current prefix sum in the map.",
    ],
    commonMistake:
      "Forgetting to seed the map with prefix sum 0 means you miss subarrays that start at index 0.",
    diagram: `flowchart TD
    A([Add current num to prefix sum]) --> B{Have we seen\\nprefixSum - k?}
    B -- YES --> C([Add its count to answer])
    B -- NO --> D([No new subarray here])
    C --> E([Store current prefix sum])
    D --> E
    E --> A`,
    exampleWalkthrough: {
      title: "Quick example: nums = [1, 1, 1], k = 2",
      steps: [
        "Prefix sums go 1, 2, 3.",
        "When prefix sum is 2, you look for 0 and find one match from the seeded map.",
        "When prefix sum is 3, you look for 1 and find another match.",
      ],
      result: "There are 2 subarrays whose sum is 2.",
    },
    practiceHints: [
      {
        title: "Range Sum Query - Immutable",
        hint: "Build prefix[i+1] = prefix[i] + nums[i] once in the constructor. Any range sum [l, r] is then prefix[r+1] - prefix[l] in O(1).",
      },
      {
        title: "Count of Range Sum",
        hint: "Compute prefix sums, then use divide-and-conquer merge sort. During the merge step, count pairs whose prefix sum difference falls inside [lower, upper].",
      },
    ],
  },
  14: {
    emoji: "🧭",
    beginnerExplanation:
      "Week two is where moving-window thinking starts to feel natural. Some problems want the biggest valid window. Some want the smallest valid window. Some want a fixed-size window. And one sneaky problem, Subarray Sum Equals K, is not really a sliding window at all. Review day is about learning to notice those differences early, before you write code that fights the problem instead of helping it.",
    ahaText:
      "The pattern choice matters as much as the implementation details.",
    steps: [
      "Ask whether the window size is fixed, growing, or shrinking.",
      "If the rule depends on duplicates or counts, think Set or frequency map.",
      "If the goal is best subarray without a literal window rule, ask whether Kadane fits better.",
      "If the problem asks for exact subarray sums with possible negatives, think prefix sum plus HashMap.",
    ],
    commonMistake:
      "Treating every subarray problem like sliding window is a classic week-two trap. Some of them want prefix sums instead.",
    diagram: `flowchart TD
    A([Read the prompt]) --> B{Need best running\\nsubarray?}
    B -- YES --> C([Kadane's Algorithm])
    B -- NO --> D{Window rule about\\ncharacters or sum?}
    D -- YES --> E([Sliding Window])
    D -- NO --> F{Exact subarray sum\\ncount?}
    F -- YES --> G([Prefix Sum + HashMap])
    F -- NO --> H([Re-check the pattern clue])`,
    exampleWalkthrough: {
      title:
        "Quick example: 'find the longest substring without repeating characters'",
      steps: [
        "You see substring plus a validity rule about duplicates.",
        "That points to a variable sliding window with a Set.",
        "Now the strategy is obvious before the code starts.",
      ],
      result: "Review day is about naming the pattern fast.",
    },
  },
  15: {
    emoji: "🧩",
    beginnerExplanation:
      "Valid Parentheses is the cleanest stack problem because the rule is brutally simple: the last thing you opened must be the first thing you close. A stack models that perfectly. Every opening bracket goes on top, and every closing bracket must match the current top. If the order breaks, the whole string breaks.",
    ahaText:
      "You are not matching all brackets. You are matching the most recent unfinished one.",
    steps: [
      "Push opening brackets onto the stack.",
      "When you see a closing bracket, check the top of the stack.",
      "If the top matches, pop it. If it does not, return false.",
      "At the end, the stack must be empty for the string to be valid.",
    ],
    commonMistake:
      "Only counting how many brackets appear is not enough. The order matters, and the stack is what preserves that order.",
    diagram: `flowchart TD
    A([Read char]) --> B{Opening bracket?}
    B -- YES --> C([Push onto stack])
    B -- NO --> D{Matches stack top?}
    D -- YES --> E([Pop stack])
    D -- NO --> F([Invalid ❌])
    C --> A
    E --> A`,
    exampleWalkthrough: {
      title: "Quick example: s = '({})'",
      steps: [
        "Push ( then push { onto the stack.",
        "See }, which matches {, so pop it.",
        "See ), which matches (, so pop again and finish empty.",
      ],
      result: "Empty stack at the end means the string is valid.",
    },
    practiceHints: [
      {
        title: "Min Stack",
        hint: "Push pairs: (value, current minimum at this depth). Every push records the minimum so pop never needs to search.",
      },
      {
        title: "Largest Rectangle in Histogram",
        hint: "Monotonic increasing stack. When a shorter bar arrives, pop taller bars and calculate their rectangle: width is current index minus new stack top minus 1.",
      },
    ],
  },
  16: {
    emoji: "🌡️",
    beginnerExplanation:
      "Daily Temperatures is a waiting-room problem. Each day is asking, 'How long until someone warmer shows up?' A monotonic stack keeps days that are still waiting for better weather. When a hotter day arrives, it immediately answers old questions and kicks those colder days out of the stack.",
    ahaText: "The stack holds unresolved days, not the final answers.",
    steps: [
      "Store indexes in the stack so you can calculate day differences later.",
      "Move through temperatures from left to right.",
      "While the current day is warmer than the day on top of the stack, pop that older index and fill its answer.",
      "Push the current index when it is still waiting for a warmer day.",
    ],
    commonMistake:
      "Storing temperatures instead of indexes makes it impossible to compute how many days someone waited.",
    diagram: `flowchart TD
    A([Read today's temp]) --> B{Warmer than stack top?}
    B -- YES --> C([Pop older day and fill answer])
    B -- NO --> D([Push today's index])
    C --> B
    D --> A`,
    exampleWalkthrough: {
      title: "Quick example: [73, 74, 75, 71, 69, 72, 76, 73]",
      steps: [
        "74 resolves 73, so day 0 waits 1 day.",
        "75 resolves 74, so day 1 also waits 1 day.",
        "76 later resolves several colder days at once.",
      ],
      result: "The stack lets one hot day answer multiple earlier days.",
    },
    practiceHints: [
      {
        title: "Baseball Game",
        hint: "Simulate with a stack. '+' sums the top two, 'D' doubles the top, 'C' removes the top. Process each operation in order.",
      },
      {
        title: "Maximal Rectangle",
        hint: "Treat each row as a base for a histogram using accumulated heights. Run Largest Rectangle in Histogram on each row's heights.",
      },
    ],
  },
  17: {
    emoji: "🔍",
    beginnerExplanation:
      "Binary Search is just disciplined guessing. Because the array is sorted, the middle value tells you which entire half cannot possibly contain the answer. That means every comparison deletes half the search space. You are not scanning faster. You are refusing to scan what you already know is useless.",
    ahaText:
      "The power comes from sorted order plus deleting half the problem every step.",
    steps: [
      "Track left and right boundaries.",
      "Pick the middle index.",
      "If nums[mid] is the target, return it.",
      "If nums[mid] is too small, move left past mid. If too large, move right before mid.",
      "Repeat until the search space disappears.",
    ],
    commonMistake:
      "Updating the wrong boundary can create infinite loops or skip the answer. Every move must remove mid from the remaining search space.",
    diagram: `flowchart TD
    A([Choose mid]) --> B{mid compared to target}
    B -- equal --> C([Found target ✅])
    B -- too small --> D([Move left to mid + 1])
    B -- too large --> E([Move right to mid - 1])
    D --> A
    E --> A`,
    exampleWalkthrough: {
      title: "Quick example: nums = [-1, 0, 3, 5, 9, 12], target = 9",
      steps: [
        "Start at mid = 3, value 5. It is too small.",
        "Throw away the left half and search the right half only.",
        "The next useful mid lands on 9 and you stop.",
      ],
      result: "The answer is index 4.",
    },
    practiceHints: [
      {
        title: "Find Peak Element",
        hint: "Binary search: if mid is smaller than its right neighbor, a peak must lie to the right. Otherwise a peak exists at mid or to its left.",
      },
      {
        title: "Median of Two Sorted Arrays",
        hint: "Binary search on the smaller array to find the partition where combined left halves have exactly half the total elements and no cross-boundary value violates order.",
      },
    ],
  },
  18: {
    emoji: "🔄",
    beginnerExplanation:
      "A rotated sorted array looks messy, but it still hides order. At any moment, one side of the array is properly sorted. Your job is to detect which side is normal, then check whether the target could live there. If not, throw that side away and search the other half. It is binary search wearing a slightly annoying hat.",
    ahaText:
      "Even after rotation, one half is always sorted enough to give you information.",
    steps: [
      "Find mid as usual.",
      "Check whether the left half or right half is sorted.",
      "Ask whether the target lies inside that sorted half's range.",
      "Keep the half that could still contain the target and discard the other.",
    ],
    commonMistake:
      "Treating the array like a normal sorted array misses the rotation clue. You have to detect which half is sorted before choosing a side.",
    diagram: `flowchart TD
    A([Pick mid]) --> B{Left half sorted?}
    B -- YES --> C{Target inside left range?}
    B -- NO --> D{Target inside right range?}
    C -- YES --> E([Search left half])
    C -- NO --> F([Search right half])
    D -- YES --> F
    D -- NO --> E`,
    exampleWalkthrough: {
      title: "Quick example: nums = [4, 5, 6, 7, 0, 1, 2], target = 0",
      steps: [
        "Mid lands on 7, and the left side [4, 5, 6, 7] is sorted.",
        "0 is not inside that left range, so you discard it.",
        "Now you binary-search the right side and find 0.",
      ],
      result: "The answer is index 4.",
    },
    practiceHints: [
      {
        title: "Search Insert Position",
        hint: "Standard binary search. Return left instead of -1 when the target is missing — that is exactly where the target would be inserted.",
      },
      {
        title: "Find Minimum in Rotated Sorted Array II",
        hint: "Same as the version without duplicates but when mid equals high you can only safely shrink by one (high--) instead of halving the range.",
      },
    ],
  },
  19: {
    emoji: "🧭",
    beginnerExplanation:
      "Find Minimum in Rotated Sorted Array is really asking for the rotation break. In a normal sorted array, the minimum would be at the far left. Rotation pushes it somewhere inside. By comparing mid with the right boundary, you can tell whether the minimum is to the left of mid or to the right of mid.",
    ahaText:
      "The unsorted side is the suspicious side, because that is where the rotation break lives.",
    steps: [
      "Use left and right boundaries like binary search.",
      "Compare nums[mid] with nums[right].",
      "If nums[mid] is greater, the minimum is to the right of mid.",
      "If nums[mid] is smaller, the minimum is at mid or to its left.",
      "Stop when left and right meet.",
    ],
    commonMistake:
      "Comparing mid with left can work in some variants, but using the wrong comparison rule makes the pointer moves much easier to mess up.",
    diagram: `flowchart TD
    A([Pick mid]) --> B{nums[mid] > nums[right]?}
    B -- YES --> C([Minimum is right of mid])
    B -- NO --> D([Minimum is at mid or left of it])
    C --> E([Move left = mid + 1])
    D --> F([Move right = mid])
    E --> A
    F --> A`,
    exampleWalkthrough: {
      title: "Quick example: nums = [3, 4, 5, 1, 2]",
      steps: [
        "Mid starts at 5, which is greater than right value 2.",
        "That means the minimum must be to the right of 5.",
        "You narrow down until left lands on 1.",
      ],
      result: "The minimum value is 1.",
    },
    practiceHints: [
      {
        title: "First Bad Version",
        hint: "Binary search: if mid is bad, first bad is at most mid. If mid is good, first bad is after mid. Converge until lo equals hi.",
      },
      {
        title: "Count of Smaller Numbers After Self",
        hint: "Modified merge sort: while merging two halves, count how many elements from the right half land to the left of each element in the left half.",
      },
    ],
  },
  20: {
    emoji: "🧮",
    beginnerExplanation:
      "Reverse Polish Notation stops caring about parentheses because the order is already built into the token stream. Numbers get pushed onto a stack. Operators grab the latest two numbers, compute the result, and push that result back. So the stack acts like a little calculator memory that always exposes the freshest values first.",
    ahaText:
      "An operator always consumes the last two available numbers, so a stack is the natural fit.",
    steps: [
      "Push numbers onto the stack.",
      "When you see an operator, pop the top two numbers.",
      "Apply the operator in the correct order.",
      "Push the result back onto the stack.",
      "At the end, the final answer is the only value left.",
    ],
    commonMistake:
      "For subtraction and division, pop order matters. The first popped value is the right operand, not the left one.",
    diagram: `flowchart TD
    A([Read token]) --> B{Number?}
    B -- YES --> C([Push onto stack])
    B -- NO --> D([Pop two values])
    D --> E([Apply operator])
    E --> F([Push result])
    C --> A
    F --> A`,
    exampleWalkthrough: {
      title: "Quick example: tokens = ['2', '1', '+', '3', '*']",
      steps: [
        "Push 2, push 1, then + makes 3.",
        "Push 3, then * multiplies 3 and 3.",
        "Only one value remains on the stack.",
      ],
      result: "The expression evaluates to 9.",
    },
    practiceHints: [
      {
        title: "Remove All Adjacent Duplicates in String",
        hint: "Push each character onto a stack. Pop the top immediately if it matches the incoming character. Join the stack at the end.",
      },
      {
        title: "Basic Calculator",
        hint: "Stack for signs: push current result and sign on '(', pop and combine on ')'. Track the current number and running total as you scan character by character.",
      },
    ],
  },
  21: {
    emoji: "🧭",
    beginnerExplanation:
      "Week three is about recognizing whether the problem cares about the most recent unfinished thing or about deleting half the search space. If it is about unfinished structure, think stack. If sorted order lets you throw away half the candidates, think binary search. Review day is really a pattern sorting exercise in your own head.",
    ahaText:
      "The two big questions are: am I resolving the latest thing, or am I cutting the search space in half?",
    steps: [
      "Ask whether the problem needs last-in-first-out behavior.",
      "If yes, think stack and unresolved state.",
      "If not, ask whether sorted order lets you eliminate half the candidates.",
      "If yes, think binary search or a rotated-array variation.",
    ],
    commonMistake:
      "Mixing stack problems and binary-search problems usually happens when you focus on the data instead of the question the algorithm is answering.",
    diagram: `flowchart TD
    A([Read the problem]) --> B{Need latest unfinished\\nitem first?}
    B -- YES --> C([Stack])
    B -- NO --> D{Can sorted order eliminate\\nhalf each step?}
    D -- YES --> E([Binary Search])
    D -- NO --> F([Re-check the pattern clue])`,
    exampleWalkthrough: {
      title: "Quick example: problem says 'sorted array' and 'target'",
      steps: [
        "You immediately ask whether mid can delete half the array.",
        "If yes, this is binary-search territory, not stack territory.",
        "That pattern choice saves you from brute force instantly.",
      ],
      result: "Review day is pattern sorting before code writing.",
    },
  },
  22: {
    emoji: "🌳",
    beginnerExplanation:
      "Depth First Search on trees means you follow one path as far as it goes before you come back. Recursion is a natural match because each node can ask the same question of its left child and right child. For max depth, you ask, 'How deep is my left side? How deep is my right side?' Then the current node adds one for itself.",
    ahaText:
      "Trees get easier when every node solves the same small subproblem for its children.",
    steps: [
      "Handle the base case: an empty node contributes zero depth.",
      "Recursively compute the left depth and right depth.",
      "Take the larger one.",
      "Add one for the current node.",
    ],
    commonMistake:
      "Forgetting the base case for null nodes makes recursion crash or return the wrong depth.",
    diagram: `flowchart TD
    A([Current node]) --> B([Go left deeper])
    A --> C([Go right deeper])
    B --> D([Return left depth])
    C --> E([Return right depth])
    D --> F([Take max + 1])
    E --> F`,
    exampleWalkthrough: {
      title: "Quick example: [3, 9, 20, null, null, 15, 7]",
      steps: [
        "Node 9 returns depth 1 because it has no children.",
        "Node 20 returns depth 2 because it has children 15 and 7.",
        "Root 3 takes max(1, 2) + 1.",
      ],
      result: "The maximum depth is 3.",
    },
    practiceHints: [
      {
        title: "Construct Binary Tree from Preorder and Inorder Traversal",
        hint: "The first element of preorder is always the root. Locate it in inorder to split left and right subtree sizes. Recurse with matching slices.",
      },
      {
        title: "Binary Tree Maximum Path Sum",
        hint: "Post-order DFS. leftGain = max(0, dfs(left)), same for right. Update global max with node + leftGain + rightGain. Return only the larger single-branch gain up.",
      },
    ],
  },
  23: {
    emoji: "👯",
    beginnerExplanation:
      "Tree comparison works best recursively because the same rule repeats everywhere. Two trees are the same only if the current nodes match, the left subtrees match, and the right subtrees match. That means each recursive call is doing one tiny comparison and delegating the rest down the branches.",
    ahaText:
      "'Same tree' is really three checks repeated over and over: node, left, right.",
    steps: [
      "If both nodes are null, they match.",
      "If one is null and the other is not, they fail.",
      "If both exist but values differ, they fail.",
      "Otherwise recursively compare left children and right children.",
    ],
    commonMistake:
      "Checking only the current node values misses shape differences deeper in the tree.",
    diagram: `flowchart TD
    A([Compare nodes]) --> B{Both null?}
    B -- YES --> C([Match])
    B -- NO --> D{One null or value mismatch?}
    D -- YES --> E([Fail])
    D -- NO --> F([Compare left and right recursively])`,
    exampleWalkthrough: {
      title: "Quick example: [1, 2, 3] vs [1, 2, 3]",
      steps: [
        "Roots match at 1.",
        "Left children match at 2 and right children match at 3.",
        "All recursive checks succeed.",
      ],
      result: "The two trees are the same.",
    },
    practiceHints: [
      {
        title: "Symmetric Tree",
        hint: "DFS with two pointers starting at root. At each step compare left.left with right.right and left.right with right.left simultaneously.",
      },
      {
        title: "Serialize and Deserialize Binary Tree",
        hint: "BFS serialization: write each node value or 'null' separated by commas. Reconstruct by replaying a queue of pending parent nodes.",
      },
    ],
  },
  24: {
    emoji: "🌊",
    beginnerExplanation:
      "Breadth First Search visits a tree level by level instead of diving deep. A queue is perfect for that because the first node discovered is the first node processed. So BFS feels like a line at a ticket counter: whoever arrives first gets served first, and each level waits its turn.",
    ahaText:
      "If the problem talks about levels, a queue should start ringing in your head immediately.",
    steps: [
      "Start by putting the root in a queue.",
      "While the queue is not empty, process exactly one level at a time.",
      "Pop nodes from the front and record their values.",
      "Push their children to the back for the next level.",
    ],
    commonMistake:
      "If you do not measure the current queue size before processing a level, you can accidentally mix multiple levels together.",
    diagram: `flowchart TD
    A([Queue starts with root]) --> B([Process current level])
    B --> C([Collect node values])
    C --> D([Push children into queue])
    D --> E([Next level])
    E --> B`,
    exampleWalkthrough: {
      title: "Quick example: [3, 9, 20, null, null, 15, 7]",
      steps: [
        "First level is [3].",
        "Second level becomes [9, 20].",
        "Third level becomes [15, 7].",
      ],
      result: "The level order traversal is [[3], [9, 20], [15, 7]].",
    },
    practiceHints: [
      {
        title: "Minimum Depth of Binary Tree",
        hint: "DFS but return 1 + min(left, right) only when both children exist. A node with only one child must route depth through that child.",
      },
      {
        title: "Word Ladder",
        hint: "BFS on words where each edge is one character change. Track unused words in a Set and shrink it as you visit. Level count at the target is the answer.",
      },
    ],
  },
  25: {
    emoji: "✅",
    beginnerExplanation:
      "Validate BST is where people learn that local checks are not enough. A node is not valid just because it is bigger than its left child and smaller than its right child. It must also respect every ancestor's limits. The clean solution is to carry a valid min and max boundary down the recursion.",
    ahaText:
      "BST validation is about global boundaries, not just parent-child comparisons.",
    steps: [
      "Each node receives a valid lower bound and upper bound.",
      "If the node value is outside those bounds, fail immediately.",
      "The left child gets the current node as its new upper bound.",
      "The right child gets the current node as its new lower bound.",
    ],
    commonMistake:
      "Checking only direct children misses cases where a deep node violates an older ancestor's rule.",
    diagram: `flowchart TD
    A([Visit node]) --> B{Inside min/max bounds?}
    B -- NO --> C([Invalid BST])
    B -- YES --> D([Recurse left with tighter max])
    B -- YES --> E([Recurse right with tighter min])`,
    exampleWalkthrough: {
      title: "Quick example: [5, 1, 4, null, null, 3, 6]",
      steps: [
        "Node 4 sits in the right subtree of 5, so it must be greater than 5.",
        "But 4 is not greater than 5, even though it looks fine compared with its own children.",
        "That breaks the BST rule.",
      ],
      result: "The tree is not a valid BST.",
    },
    practiceHints: [
      {
        title: "Search in a Binary Search Tree",
        hint: "If value equals node, return it. If less, go left. If greater, go right. Same as binary search but following tree pointers.",
      },
      {
        title: "Recover Binary Search Tree",
        hint: "In-order DFS reveals the two swapped nodes because they break ascending order. First anomaly is the node larger than its successor; second is the node smaller than its predecessor.",
      },
    ],
  },
  26: {
    emoji: "🏝️",
    beginnerExplanation:
      "Number of Islands is really a counting problem plus a flood-fill. Every time you find unvisited land, you discovered a brand-new island. Then you immediately explore all connected land from there and mark it visited so you never count that island again. DFS or BFS both work because the real goal is to clear one connected component at a time.",
    ahaText:
      "Count the island once, then erase its entire footprint from future consideration.",
    steps: [
      "Scan the grid cell by cell.",
      "When you see unvisited land, increment the island count.",
      "Run DFS or BFS to visit every connected land cell.",
      "Mark visited cells so they are never counted again.",
    ],
    commonMistake:
      "If you do not mark visited land immediately, the same island can be counted multiple times from different entry points.",
    diagram: `flowchart TD
    A([Find unvisited land]) --> B([Count one island])
    B --> C([DFS/BFS through neighbors])
    C --> D([Mark visited])
    D --> E([Continue scanning grid])`,
    exampleWalkthrough: {
      title:
        "Quick example: a grid with one 2-cell island and one single-cell island",
      steps: [
        "The first land cell starts island count at 1.",
        "DFS marks its connected land so it cannot be counted again.",
        "Later, a separate land cell starts island count at 2.",
      ],
      result: "The grid contains 2 islands.",
    },
    practiceHints: [
      {
        title: "Flood Fill",
        hint: "DFS from the starting cell. Change each visited cell to the new color, then recurse into its four neighbors if they still carry the original color.",
      },
      {
        title: "Longest Increasing Path in a Matrix",
        hint: "DFS with memoization. For each cell compute the longest path stepping only to strictly larger neighbors. Cache results per cell.",
      },
    ],
  },
  27: {
    emoji: "🎓",
    beginnerExplanation:
      "Course Schedule is a graph problem about impossible loops. If course A needs B, B needs C, and C needs A, you are trapped forever. DFS can detect that by tracking nodes that are currently in the recursion path. Revisiting a node that is still 'in progress' means you found a cycle.",
    ahaText:
      "A back-edge into the current DFS path is the signature of a cycle.",
    steps: [
      "Build a graph of prerequisite edges.",
      "Run DFS from each course that has not been fully processed yet.",
      "Mark nodes as visiting while they are on the current recursion path.",
      "If DFS reaches another visiting node, there is a cycle.",
      "Mark nodes as visited when their subtree is safe.",
    ],
    commonMistake:
      "Using only one visited set is not enough. You need to distinguish 'already finished' from 'currently exploring'.",
    diagram: `flowchart TD
    A([Start DFS on course]) --> B{Already visiting?}
    B -- YES --> C([Cycle found ❌])
    B -- NO --> D([Mark as visiting])
    D --> E([DFS prerequisites])
    E --> F([Mark as fully processed])`,
    exampleWalkthrough: {
      title: "Quick example: prerequisites = [[1, 0], [0, 1]]",
      steps: [
        "Course 1 depends on 0 and course 0 depends on 1.",
        "DFS from 1 visits 0, then tries to visit 1 again while 1 is still active.",
        "That means the graph contains a cycle.",
      ],
      result: "You cannot finish all courses.",
    },
    practiceHints: [
      {
        title: "Find if Path Exists in Graph",
        hint: "BFS or DFS from source. Track visited nodes. Return true the moment you reach the destination.",
      },
      {
        title: "Critical Connections in a Network",
        hint: "Tarjan's bridge algorithm. Track discovery time and low value per node. An edge is a bridge when the child's low value exceeds the parent's discovery time.",
      },
    ],
  },
  28: {
    emoji: "🧭",
    beginnerExplanation:
      "Week four is where tree and graph problems stop looking random. Trees often want DFS or BFS. Graphs usually want traversal plus visited tracking. The main job on review day is to ask whether the structure branches like a tree, connects like a graph, or needs level-by-level processing like BFS. Once you name that shape, the implementation becomes much less mysterious.",
    ahaText:
      "The biggest speed boost is recognizing whether you want depth, breadth, or cycle detection before you write anything.",
    steps: [
      "Ask whether the structure is a tree or a graph.",
      "If it is a tree, ask whether you want depth-first or level-order behavior.",
      "If it is a graph, ask how you will track visited nodes.",
      "If dependencies appear, ask whether cycle detection is the real goal.",
    ],
    commonMistake:
      "Jumping straight into recursion or queues without first identifying the traversal goal usually makes tree and graph code feel much harder than it is.",
    diagram: `flowchart TD
    A([Read the structure]) --> B{Tree or graph?}
    B -- Tree --> C{Need depth or levels?}
    C -- depth --> D([DFS])
    C -- levels --> E([BFS])
    B -- Graph --> F{Need traversal or cycle detection?}
    F -- traversal --> G([DFS/BFS + visited])
    F -- cycle --> H([DFS states / topological logic])`,
    exampleWalkthrough: {
      title: "Quick example: 'count connected land cells in a grid'",
      steps: [
        "You recognize the grid as a graph of connected neighbors.",
        "The problem is about visiting one connected component at a time.",
        "That points directly to DFS or BFS with visited tracking.",
      ],
      result: "Review day is about seeing the shape before writing the code.",
    },
  },
  29: {
    emoji: "⚔️",
    beginnerExplanation:
      "Mixed Pattern Battle is where you stop asking 'How do I code this?' and start asking the better question first: 'What kind of problem is this?' By now you have several tools. The win is not memorizing them individually. The win is reaching for the right one quickly when the prompt looks random.",
    ahaText:
      "The best speed boost in DSA is choosing the right pattern before writing a single line.",
    steps: [
      "Read the prompt and extract the strongest clues: sorted array, duplicates, range sum, graph, levels, target, and so on.",
      "Match those clues to likely patterns instead of jumping straight into syntax.",
      "Say the pattern out loud before you code.",
      "Only then sketch the solution skeleton.",
    ],
    commonMistake:
      "Treating every new problem like a brand-new invention wastes time. Most of the time, it is an old pattern in a new costume.",
    diagram: `flowchart TD
    A([Read problem]) --> B{What clue stands out?}
    B --> C([HashMap])
    B --> D([Two Pointers])
    B --> E([Sliding Window])
    B --> F([DFS/BFS])`,
    exampleWalkthrough: {
      title: "Quick example: the prompt says 'sorted array' and 'target sum'",
      steps: [
        "The word sorted means pointer moves can be smart instead of random.",
        "The target sum clue points to comparing left and right values.",
        "That combination strongly suggests Two Pointers on a sorted array.",
      ],
      result: "The pattern is identified before any code is written.",
    },
    practiceHints: [
      {
        title: "Battle Round: First Missing Positive",
        hint: "Put value k at index k-1 for all 1 <= k <= n using the array as its own hash. Then scan for the first index where value != index + 1.",
      },
    ],
  },
  30: {
    emoji: "🎤",
    beginnerExplanation:
      "Mock interviews are not only about getting the answer. They are about making your thinking visible. A strong interview answer usually sounds like this: clarify the problem, say the pattern, explain the tradeoff, code the idea, then test it. Good communication makes the logic easier to trust.",
    ahaText:
      "In interviews, invisible thinking is almost as risky as wrong thinking.",
    steps: [
      "Restate the problem in plain words.",
      "Call out the likely pattern and why it fits.",
      "Outline the algorithm before coding.",
      "Code the clean version, then test edge cases out loud.",
    ],
    commonMistake:
      "Going silent and coding immediately makes it hard for the interviewer to follow your judgment, even if the final code is decent.",
    diagram: `flowchart TD
    A([Problem]) --> B([Understand])
    B --> C([Choose Pattern])
    C --> D([Code])
    D --> E([Test])`,
    exampleWalkthrough: {
      title: "Quick example: Two Sum in an interview",
      steps: [
        "You say the brute-force idea first so the interviewer sees the baseline.",
        "Then you explain that a HashMap removes the nested loop by storing seen values.",
        "Now your code has context, not just syntax.",
      ],
      result: "Communication turns the solution into a convincing solution.",
    },
    practiceHints: [
      {
        title: "Design Add and Search Words Data Structure",
        hint: "Use a Trie for addWord. For search, DFS recursively and treat '.' as a wildcard that tries every child node.",
      },
      {
        title: "Word Search II",
        hint: "Build a Trie from the word list. DFS the board while traversing the Trie simultaneously so invalid word paths are pruned early.",
      },
    ],
  },
  31: {
    emoji: "🧠",
    beginnerExplanation:
      "Weakness Repair is where real progress happens. The problem that confuses you is not a sign that you are bad at DSA. It is a spotlight showing you exactly where the next gain is hiding. The goal is not to reread the answer twenty times. The goal is to identify what felt fuzzy and rebuild that part slowly until it clicks.",
    ahaText:
      "Confusion is useful when you turn it into a diagnosis instead of a mood.",
    steps: [
      "Pick the problem that still feels unstable in your head.",
      "Write down what part actually breaks: pattern choice, edge cases, pointer movement, recursion, or something else.",
      "Re-solve a tiny version first.",
      "Then redo the full problem without peeking at notes.",
    ],
    commonMistake:
      "Passive rereading feels productive, but it rarely fixes the exact part that was confusing. Active rebuilding does.",
    diagram: `flowchart TD
    A([Confusion]) --> B([Practice])
    B --> C([Understand])
    C --> D([Repeat])`,
    exampleWalkthrough: {
      title: "Quick example: Binary Search still feels slippery",
      steps: [
        "You notice the real issue is not the idea, but which boundary moves after mid.",
        "You test tiny arrays like [1, 3] and [1, 3, 5] until the updates feel obvious.",
        "Then you redo the full problem without notes.",
      ],
      result:
        "The weakness becomes a specific fix instead of a vague frustration.",
    },
    practiceHints: [
      {
        title: "Coin Change",
        hint: "DP bottom-up: build the minimum coins needed for each amount from 1 to target. For each amount, try every coin and take the minimum.",
      },
      {
        title: "Edit Distance",
        hint: "2D DP: if characters match cost is 0, otherwise min(insert, delete, replace) + 1. Build the table row by row.",
      },
    ],
  },
  32: {
    emoji: "⚡",
    beginnerExplanation:
      "Speed Mode is not about rushing blindly. It is about trusting the recognition skills you already built. Once the pattern is obvious, overthinking becomes expensive. You still need to be precise, but the goal is to move with less hesitation and fewer unnecessary detours.",
    ahaText:
      "Fast solving comes from fast pattern recognition, not from frantic typing.",
    steps: [
      "Read the prompt once and force yourself to name the likely pattern quickly.",
      "Sketch the solution skeleton before getting lost in details.",
      "Code the cleanest version you can, not the most clever one.",
      "Use a small test to confirm, then move on.",
    ],
    commonMistake:
      "Speed training becomes sloppy if you skip the pattern step. Fast wrong guesses are still wrong guesses.",
    diagram: `flowchart TD
    A([Problem]) --> B([Recognize Pattern])
    B --> C([Quick Solve])`,
    exampleWalkthrough: {
      title: "Quick example: prompt says 'longest substring without repeats'",
      steps: [
        "You recognize a validity rule over a moving substring.",
        "That points to Sliding Window right away.",
        "Now you build the left/right pointer skeleton instead of exploring random ideas.",
      ],
      result: "Speed comes from clarity, not panic.",
    },
    practiceHints: [
      {
        title: "Climbing Stairs",
        hint: "Recognize this as Fibonacci: ways(n) = ways(n-1) + ways(n-2). You only need the two previous values so O(1) space works.",
      },
      {
        title: "Word Break II",
        hint: "DFS with memoization: at each start index try every dictionary word. Cache the list of valid sentences for each start position to avoid recomputing.",
      },
    ],
  },
  33: {
    emoji: "🔄",
    beginnerExplanation:
      "Pattern Variations teach you that the same engine can power many different problems. One rule changes, one constraint shifts, one detail becomes stricter, and suddenly the problem looks new. But the underlying pattern often stays the same. Learning to see that is how you stop memorizing isolated solutions and start thinking like an engineer.",
    ahaText:
      "A variation usually changes the details of the invariant, not the entire pattern.",
    steps: [
      "Identify the base problem you already know.",
      "Ask what exactly changed: sorted input, duplicates, fixed window, graph direction, and so on.",
      "Keep the same core pattern if it still fits.",
      "Only modify the part of the logic that the new constraint touches.",
    ],
    commonMistake:
      "Rewriting from scratch every time hides the connection between problems that are actually close cousins.",
    diagram: `flowchart TD
    A([Base Problem]) --> B([Variation 1])
    A --> C([Variation 2])`,
    exampleWalkthrough: {
      title: "Quick example: Two Sum becomes Two Sum II",
      steps: [
        "The target idea is still the same: two numbers must add to a value.",
        "The new gift is that the array is sorted.",
        "So the solution changes from HashMap to Two Pointers, but the core relationship stays the same.",
      ],
      result: "Variation training teaches adaptation, not memorization.",
    },
    practiceHints: [
      {
        title: "Squares of a Sorted Array",
        hint: "Two pointers from both ends. The largest square is always at one extreme. Fill the result array from right to left.",
      },
      {
        title: "Meeting Rooms III",
        hint: "Two priority queues: one for free rooms sorted by index, one for active meetings sorted by end time. Simulate each meeting and assign the earliest-freed available room.",
      },
    ],
  },
  34: {
    emoji: "🧠",
    beginnerExplanation:
      "Pattern Recognition day is pure classification practice. You are not trying to code fast. You are trying to see the shape of the problem instantly. Once that reflex gets strong, solving becomes much easier because you stop wasting energy on bad first guesses.",
    ahaText: "Seeing the pattern early is often half the solution.",
    steps: [
      "Read the prompt and ignore implementation details for a moment.",
      "List the strongest clues: sorted, range sum, duplicates, levels, dependencies, and so on.",
      "Name the pattern that best matches those clues.",
      "Only after that decide how you would implement it.",
    ],
    commonMistake:
      "If you start coding before you classify the problem, you usually end up testing the wrong strategy for too long.",
    diagram: `flowchart TD
    A([Problem]) --> B([Instant Pattern])`,
    exampleWalkthrough: {
      title: "Quick example: prompt says 'count subarrays with sum k'",
      steps: [
        "The word count is important because it suggests you may need multiple matches, not one window.",
        "Exact subarray sums with possible negatives point away from sliding window.",
        "That pushes you toward Prefix Sum plus HashMap.",
      ],
      result: "Recognition is about filtering out the wrong patterns quickly.",
    },
    practiceHints: [
      {
        title: "Product of Array Except Self",
        hint: "Two passes, no division: left-to-right builds prefix products, right-to-left builds suffix products. Multiply them together at each index.",
      },
      {
        title: "Maximum Profit in Job Scheduling",
        hint: "Sort jobs by end time. DP: for each job, binary search for the last non-overlapping job and take max(skip, job profit + dp[prev]).",
      },
    ],
  },
  35: {
    emoji: "🎯",
    beginnerExplanation:
      "Final Boss is not about proving you know every trick in the book. It is about proving you can stay calm, identify the pattern, and apply it with confidence. By now, your edge is not raw memory. Your edge is the ability to make a clean plan when the problem looks intimidating.",
    ahaText:
      "Confidence in DSA comes from pattern fluency, not from memorizing magic lines of code.",
    steps: [
      "Slow down just enough to classify the problem correctly.",
      "Pick the main pattern before touching implementation details.",
      "Write the simplest clean version that proves the idea.",
      "Test the edge cases and explain why your approach works.",
    ],
    commonMistake:
      "Trying to combine too many ideas at once usually creates chaos. Pick the dominant pattern first and let everything else support it.",
    diagram: `flowchart TD
    A([All Patterns]) --> B([Confidence])`,
    exampleWalkthrough: {
      title:
        "Quick example: final challenge says 'find two numbers that sum to 6'",
      steps: [
        "You do not panic just because it is the final day.",
        "You notice it is still a familiar target-sum pattern.",
        "That lets you reach for HashMap or Two Pointers depending on the input shape.",
      ],
      result:
        "The final boss is really a pattern-recognition test under pressure.",
    },
  },
};
