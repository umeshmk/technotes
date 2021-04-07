# Grokking Algorithms

> Src - Book "Grokking Algorithms"
>
> **Pseudo-code** is just a mixture of code & speech together

## Introduction to algorithms

### Binary search

Divide into half.

- Input - sorted list
- Output - index of item or null
- Ex:- For `n` inputs (say 100 inputs)
  - Simple search takes `O(n)` (100 steps - worst case) `[1,2,3,4,5....]`
  - Binary search takes `O(log n)` **[log to base 2]** (7 steps - worst case) `[50,75,63 .... ]`
- Ex: - For 8 inputs
  - Simple search - 8 steps
  - Binary search - `log(8)` ie 3 steps

<vc-fiddle url="https://jsfiddle.net/68o7p539"></vc-fiddle>

### Big O - Running Time

:::tip Cases

- **Best case** — represented as Big Omega or `Ω(n)(n)`
- **Average case** — represented as Big Theta or `Θ(n)(n)`
- **Worst case** — represented as Big O Notation or `O(n)O(n)`
  :::

- Execution Time is not important.
- Number of Operation(O is Operations) & How it grows matters.
  - Ex: 100 inputs - Binary is 15 times faster than simple search
  - Ex: 1 Billion inputs - Binary is 33 million times faster than simple search
- Big O always gives time needed for the **worst-case** scenario

```js
// O(1) - Hash tables [Constant time] (fastest)
// O(log(n)) - Binary [Logarithmic Time]
// O(n) - Simple [Linear Time]
// O(n log(n)) - Quicksort/mergesort
// O(n^2) - Selection sort
// O(n!) - Travelling salesperson (slowest)
```

<vc-img url='https://i.imgur.com/gSiuqpl.png' size=''/>

### Big O complexity

In interview - _Find the Big O complexity of an algorithm ?_

- Drop the leading constants
- Ignore the lower order terms

Example: `3n^3 + 4n + 2` simplifies to `O(n^3)`.

## Selection sort

### How memory works

- **Linked list** store items randomly memory blocks
  - Better for insert/delete operations
  - Better in **Sequential access** we have to go from start to desired item since we don't know it's memory address.
- **Arrays** store items in memory blocks contigously ie side-by-side
  - Better for **Random access** of items because we know the memory address.

<vc-img url='https://i.imgur.com/jTszBuk.png' size='lg'/>

### Selection sort - `O(n^2)`

<vc-img url='https://i.imgur.com/ghHzONc.png' size='xl'/>
Ex: Sorting a list of most played music artist

<vc-fiddle url="https://jsfiddle.net/vxr956b2/"></vc-fiddle>

## Recursion

- Loops are faster but Recursion is cleaner
- 2 Parts of _Recursive function_
  - _Base case_ - function don't call itself (prevents infinite loop.)
  - _Recursion case_ - function call itself

### Stack

- **Call stack** - Recursion use stack for each function calls
- Cons - takes too much memory for big stacks. _Use loop in such cases._

<vc-fiddle url="https://jsfiddle.net/osr65gwj/"></vc-fiddle>

## Quicksort - `O(n log(n))`

> average case - `O(n log(n))`
>
> worst case - `O(n^2)`

### Divide and conquer

- A _Recursive technique_
- Used by Quicksort

First, figure out the base case
<vc-img url='https://i.imgur.com/Tin5FUj.png' size=''/>

Now you need to figure out the recursive case. Reduced the problem from a 1680 × 640 farm to a 640 × 400 farm
<vc-img url='https://i.imgur.com/OFnKq78.png' size=''/>

Let’s apply the same algorithm again.
<vc-img url='https://i.imgur.com/TWCLouQ.png' size=''/>

Till you get Base case
<vc-img url='https://i.imgur.com/UNXccGi.png' size=''/>
<vc-img url='https://i.imgur.com/RKfPV8u.png' size=''/>

### Quicksort

- _Base case_ for array - 0 or 1 element
- Divide array using Recursion till base case is achieved.

<vc-fiddle url="https://jsfiddle.net/80hLnj5m/1/"></vc-fiddle>

### Mergesort

> Always - `O(n log(n))`

- Both Quicksort & Mergesort have same `O(n log(n))`
- **Quicksort is still faster** because the constant (which is ignored in Big O) is lower than Mergesort constant.

## Hash Tables - `O(1)`

- It has Key-value pairs
- Hash tables = hash function + array
- Every language has hash tables with different names - _hashmaps, maps, dictionaries, associative arrays_
- Always `O(1)` for any number of data. Worst case is `O(n)` (due to Collisions)
- EX - Phone numbers, cache, dns resolution, etc
- Hash function EX - SHA, etc

### Hash function

- Converts string to Number. (String means any data ie stream of bytes)
- Must be consistent ie same number for same string.
- Must be different for different strings.

### Collisions

- Same value for different keys
- _Load factor_ = items in array / total slots in array
- _Resizing_ - Increase slots in array to avoid Collisions.

## Breadth First Search (BFS)

- A graph is set of _nodes and edges_ connecting them.
- BFS is a graph algorithm
- Its used to calculate _shortest path/distance_.

<vc-img url='https://i.imgur.com/EHpAwN3.png' size=''/>

### BFS

- Used for
  1. Is there a path between node A & B ?
  2. Whixh is shortest path between node A & B ?

First degree will be searched first. Then second degree will be searched.
<vc-img url='https://i.imgur.com/Mbipv1M.png' size=''/>

### Queues

- Only 2 operations - _Enqueue & Dequeue_
- Queue - FIFO
- Stack - LIFO

<vc-img url='https://i.imgur.com/TQiVRCO.png' size=''/>

### Implementation of Graph

- We could use **HashTables** to Implement graphs.

```py
# In python we could add graph like
# order does not matter since it's hashmaps
graph = {}
graph["A"] = ["A1","A2","A3"] # root node
graph["A1"] = ["AA1","AA2"] # middle nodes
graph["AA1"] = []; # leaf node
```

- _Directed graph_ - In `A --> B` B is A's neighbour not vice versa
- _UnDirected graph_ - In `A -- B` both A & B are each other's neighbours.

Both this image are equivalent.
<vc-img url='https://i.imgur.com/b3yBYYK.png' size=''/>

### TODO - Implementing the algorithm

- We need to create a queue and add each node to it.
- First add root node, then it's children, then sub-children till we either reach leaf nodes or our search condition is satisfied.
- No duplicate node - if a node is added/checked in queue then don't add again.

<vc-img url='https://i.imgur.com/IiL5Rwc.png' size=''/>

```py
# TODO - add to queue

```

:::tip Big O
Running time - `O(vertices + edges)`
:::

## Dijkstra's algorithm

- Use to find Fastest path.
- Weighted edges in graph can be solved using Dijkstra.
- In BFS we just find shortest path not fastest path
- **Graph Requirements**
  - Directed graph
  - Weighted graph (no negative-weight edges - use _Bellman-Ford_ algorithm instead)
  - No cycles in graph
  -

<vc-img url='https://i.imgur.com/8E5dKxd.png' size=''/>

### Implementation

<vc-img url='https://i.imgur.com/9Tp4N6g.png' size=''/>

Also need a `proccessedNodes[]` to avoid reprocessing nodes.

**Algorithm**

<vc-img url='https://i.imgur.com/i0BfJdG.png' size=''/>

<vc-fiddle url="https://jsfiddle.net/fwazvnh1/4/"></vc-fiddle>

## Greedy algorithm

- Don;t always work but are very simple to write and pretty close to perfect solution.

## Dynamic programming

- Solving hard problems
- Breaks hard problem into smaller problems and solve them first.

### Knapsack problem

<vc-img url='https://i.imgur.com/7D13hrr.png' size=''/>
<vc-img url='https://i.imgur.com/4ClsGeW.png' size=''/>
<vc-img url='https://i.imgur.com/0Usj7UQ.png' size=''/>

4ClsGeW
0Usj7UQ
7D13hrr
