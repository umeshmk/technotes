# Algorithms

**TIME** & **SPACE** are key factors any actions

## Top 10 Algorithms

src - [Youtube](https://www.youtube.com/watch?v=r1MXwyiGi_U)

1. Depth first search
2. Breadth first search
3. Match Brackets/Parentheses
4. Hashtables
5. Variables/pointers manipulations
   - Ex - find longest palindrome substring in a string
   - Quicksort & Mergesort are faster than Bubblesort
6. Reverse Linked list
7. Sorting algorithms
8. Recursion (Rarely used in production because its a stack which has limits of iterations. Not sure.)
9. Custom Datastructures (Classes, OOPs)
10. Binary Search

## BUBBLE SORT

> - Sorts elements list like an _array_.
> - Compares 2 adjacent elements

```js
  Take [3,1,5,2]

  Iteration 1 :
    step 1 -> [1,3,5,2]         // swap
         2 -> [1,3,5,2]         // no
         3 -> [1,3,2,5]         // swap
  Iteration 2 :
    step 1 -> [1,3,2,5]         // no
         2 -> [1,2,3,5]         // swap
         3 -> [1,2,3,5]         // no
  Iteration 3 :
    step 1 -> [1,2,3,5]         // no
         2 -> [1,2,3,5]         // no
         3 -> [1,2,3,5]         // no (SO STOP ITERATION)
```

| _Advantages_                 | _Disadvantage_                                                                                                   |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Simple                       | Not optimal due to multiple iterations                                                                           |
| No additional space required | _worst-case_ for _n_ number of elements requires swappings `(n-1) + (n-2) + (n-3) + .... + 3 + 2 + 1 = n(n-1)/2` |

## SELECTION SORT

> - Finds smallest element and place it at start.
> - Repeat for rest of elements.

```js
Take [3,1,5,2]

Step 1 -> [1,3,5,2]
     2 -> [1,2,5,3]
     3 -> [1,2,3,5]
```

| _Advantages_                 | _Disadvantage_    |
| ---------------------------- | ----------------- |
| Very good for smaller list   | Bad for big lists |
| No additional space required | -                 |

## INSERTION SORT

> - Similar to sorting playing cards

```js
Take [3,1,5,2]
Step 1 -> [1,3,5,2]       // 2 elements [1,3] are sorted
     2 -> [1,3,5,2]       // element [5] is placed correctly
     3 -> [1,2,3,5]       // element [2] is placed correctly
```

| _Advantages_         | _Disadvantage_      |
| -------------------- | ------------------- |
| Good for small lists | Bad for large lists |
| No extra space       | -                   |

## MERGE SORT

> - Divide and conquer
> - Divide array into half until each item is single element

```js
Take [31,4,88,1,4,2,42]

Step 1 -> [31,4,88,1] [4,2,42]
     2 -> [31,4] [88,1] [4,2] [42]
     3 -> [31] [4] [88] [1] [4] [2] [42]      // All array has 1 element
     4 -> [4,31] [1,88] [2,4] [42]
     5 -> [1,4,31,88] [2,4,42]
     6 -> [1,2,4,4,31,42,88]                  // Sorted array
```

| _Advantages_                                        | _Disadvantage_                      |
| --------------------------------------------------- | ----------------------------------- |
| Good for sorting _Linked lists_ with no extra space | _Array_ needs temporary extra space |

## QUICK SORT

> - Select any element as **pivot** element
> - Sort rest of elements as `[] <= (pivot) >= []`
> - Repeat for remaining arrays.

```js
Take [2,0,7,4,3]

Step 1 -> [2,0] (3) [7,4]                 // (3) is pivot
     2 -> [ (0) [2] ] (3) [ (4) [7] ]     // (0) & (4) as pivot. Sorted.
```

| _Advantages_   | _Disadvantage_               |
| -------------- | ---------------------------- |
| Faster         | Slow if bad pivot is choosen |
| No extra space |                              |

> - 3-way Quicksort is another way in which 3 arrays are created (lesser, equal, greater) instead of 2 arrays

## TOWER OF HANOI

> - Do google search

## LINEAR SEARCH

- Every item is searched and the index is returned if matched.
- `-1` is returned if not matched
- Starts from left of the list
  **Disadvantages**
- Rarely used.
- Binary search(see below) is better

## BINARY SEARCH

- Sorted list is required
- Divide and conquer. Into 2 parts.
- Matches elements with middle element of list
- Index is returned if matched
- If middle item is greater than search item then use left side array else use right side array.
- Repeat on each sub-arrays till sub-array size is 0.
