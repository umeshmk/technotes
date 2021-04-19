# Examples in JavaScript

> src - [FreeCodeCamp-youtube](https://www.youtube.com/watch?v=t2CEgPsws3U)

## Stack

> Functions : `pop, push, peek, length`
>
> In JavaScript we have `Array`

<vc-fiddle url="https://jsfiddle.net/pcef97nu"></vc-fiddle>

## Queue

> Functions : `print, enqueue, dequeue, front, isEmpty, length`
>
> In JavaScript we have `Array`

<vc-fiddle url="https://jsfiddle.net/z1fn2jm0/"></vc-fiddle>

## Binary Search Tree

> Functions : `add, findMin, findMax, remove, isPresent`
>
> In JavaScript we have `Array`

<vc-img url='https://i.imgur.com/crINFTS.png' size='md'/>

_Remove node_ - Go to `node.right` then find the min ie most left node is this subtree
<vc-img url='https://i.imgur.com/V5ZVdh1.png' size='xl'/>

- The left is always lower and right is always greater.

<vc-fiddle url="https://jsfiddle.net/a38p90Lj/5/"></vc-fiddle>

## Binary Search Tree - Traversal

- Height = Length from root node to leaf node
- There is min & max height
- Min height = From root node to first node(without 2 children ie 0 or 1 children) `9 --> 17`
- Max height = from root node to bottom most node
- If BST is balanced then `max-min <= 1`
- Traversal
  - InOrder - From leftmost to rightmost node
  - PreOrder - Root nodes before then leaf nodes
  - PostOrder - Leaf nodes before then root nodes
  - LevelOrder - Breadth first search

<vc-img url='https://i.imgur.com/zM1zM58.png' size='xl'/>

<vc-fiddle url="https://jsfiddle.net/a38p90Lj/10/"></vc-fiddle>

## Linked List

<vc-img url='https://i.imgur.com/UluRzpL.png' size='xl'/>

<vc-fiddle url="https://jsfiddle.net/o86x9dnq/5/"></vc-fiddle>

## Graphs

<vc-img url='https://i.imgur.com/6j52CNI.png' size='sm'/>
<vc-img url='https://i.imgur.com/szIWyzD.png' size='sm'/>

### Adjacency List

```js
// undirected
let graph = {
  a: ["b"],
  b: ["a", "c"],
  c: ["b"],
};
```

### Adjacency Matrix

<vc-img url='https://i.imgur.com/lLoAwcb.png' size='sm'/>

```js
// undirected
let graph = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];

// directed
let graph = [
  [0, 0, 0],
  [1, 0, 0],
  [0, 1, 0],
];
```

### Incidence Matrix

<vc-img url='https://i.imgur.com/4KVJXXx.png' size='md'/>
<vc-img url='https://i.imgur.com/7EICPC6.png' size='md'/>

## Graphs - Breadth First Search

> **Graph Traversal** - Distance between 2 nodes in graph. (BFS & DFS)

<vc-img url='https://i.imgur.com/npQHyTd.png' size=''/>

<vc-fiddle url="https://jsfiddle.net/530yf2dc/3/"></vc-fiddle>
