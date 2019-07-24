# ALGORITHM-SORTING

> **TIME** & **SPACE** are key factors any actions

#### # BUBBLE SORT

- Sorts elements list like an *array*.
- Compares 2 adjacent elements

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

|**Advantages**|**Disadvantage**|
|-|-|
|Simple|Not optimal due to multiple iterations|
|No additional space required|*worst-case* for *n* number of elements requires swappings ` (n-1) + (n-2) + (n-3) + .... + 3 + 2 + 1 = n(n-1)/2 ` |


#### # SELECTION SORT

- Finds smallest element and place it at start. 
- Repeat for rest of elements.

```js
Take [3,1,5,2]

Step 1 -> [1,3,5,2]
     2 -> [1,2,5,3]
     3 -> [1,2,3,5]
```

|**Advantages**|**Disadvantage**|
|-|-|
|Very good for smaller list|Bad for big lists|
|No additional space required|-|



#### # INSERTION SORT


#### # MERGE SORT


#### # QUICK SORT


#### # TOWER OF HANOI


#### # LINEAR SEARCH


#### # BINARY SEARCH














