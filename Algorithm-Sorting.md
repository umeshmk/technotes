# ALGORITHM-SORTING

> **TIME** & **SPACE** are key factors any actions

#### # BUBBLE SORT

> - Sorts elements list like an *array*.
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

|*Advantages*|*Disadvantage*|
|-|-|
|Simple|Not optimal due to multiple iterations|
|No additional space required|*worst-case* for *n* number of elements requires swappings ` (n-1) + (n-2) + (n-3) + .... + 3 + 2 + 1 = n(n-1)/2 ` |

#### # SELECTION SORT

> - Finds smallest element and place it at start. 
> - Repeat for rest of elements.

```js
Take [3,1,5,2]

Step 1 -> [1,3,5,2]
     2 -> [1,2,5,3]
     3 -> [1,2,3,5]
```

|*Advantages*|*Disadvantage*|
|-|-|
|Very good for smaller list|Bad for big lists|
|No additional space required|-|

#### # INSERTION SORT

> - Similar to sorting playing cards

```js
Take [3,1,5,2]
Step 1 -> [1,3,5,2]       // 2 elements [1,3] are sorted
     2 -> [1,3,5,2]       // element [5] is placed correctly
     3 -> [1,2,3,5]       // element [2] is placed correctly
```

|*Advantages*|*Disadvantage*|
|-|-|
|Good for small lists| Bad for large lists|
|No extra space|-|

#### # MERGE SORT

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

|*Advantages*|*Disadvantage*|
|-|-|
|Good for sorting *Linked lists* with no extra space| *Array* needs temporary extra space|

#### # QUICK SORT

> - Select any element as **pivot** element
> - Sort rest of elements as `[] <= (pivot) >= []`
> - Repeat for remaining arrays.

```js
Take [2,0,7,4,3]

Step 1 -> [2,0] (3) [7,4]                 // (3) is pivot
     2 -> [ (0) [2] ] (3) [ (4) [7] ]     // (0) & (4) as pivot. Sorted.
```

|*Advantages*|*Disadvantage*|
|-|-|
|Faster|Slow if bad pivot is choosen|
|No extra space||

#### # TOWER OF HANOI


#### # LINEAR SEARCH


#### # BINARY SEARCH














