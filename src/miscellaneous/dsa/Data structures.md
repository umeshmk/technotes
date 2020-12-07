# Data structure

## Introduction

- Data structure organizes data. A good DS is a good algorithm.
- _Most common_
  - Array
  - Linked list
  - Stack
  - Queue
  - Graph
  - Tree
  - Hashtables
- Some DS can be used to create another DS
  - Linked list is used to create a stack and queue DS.
- Each DS has its own set of operations.

## Linked list

![](/images/Linkedlist.png?raw=1)

- Similar to _Array_
  - _Array_ -> data is stored contigously in memory
  - _Linked list_ -> Data need not be continous
- Hence, _Linked List_ can insert/remove without reallocation or reorganisation.
- **Drawbacks**
  - Random access not allowed. Only from start.
  - Cannot do binary search.
  - Needs extra space.
- **Usage**
  - Its a fundamental DS for _stack, tree, queue, graph_

## Stack

- Create using _Array_ or _Linked List_
- `LIFO` -> Last In First Out
- _push_ & _pop_ operations can be performed.
- **Usage**
  - _Undo/redo_ functions.

## Queue

- Create using _Array_ or _Linked List_
- `FIFO` -> First In First Out
- **Usage**
  - _Printer_, _Call center_ calls, etc

## Graph

- Set of _nodes_ (vertex) and its _connections_ (edges)

![](/images/graph.png?raw=1)

## Binary Tree

- Interconnected nodes.
  - Topmost = _root_
  - Below root = _childrens_
  - No children = _leaves_
- 1 Node can have max 2 childrens. Hence called _Binary_
- _Height_ = No of nodes from root to leaves

![](/images/tree3.png?raw=1)

- **Types**
  - _FULL_ - Each node has 2 childrens
  - _COMPLETE_ - Each levels are filled. Except last level
  - _PERFECT_ - Each node has 2 childrens. All leaves at same levels
- **Advantage**
  - Hierarchies relationship
  - Good insert
  - Good search
  - Easy to get subtree
- **Usage**
  - _Binary Search Tree_ in search applications

## Hash Tables

- Key-value
- Hash is a unique value. eg: Student id, Book number, etc
- _Hash function_
  - Maps dataset(anysize) to fixed size dataset.
  - Return values are called _hashes_
  - Unique hash for each elements in dataset
- _Disadvantage_
  - Bad for ordering and sorting data.
- _Usage_
  - Associative arrays
  - Database indexing

## Matrix

- _2-d_ arrays having _rows_ and _columns_
- `6x3` matrix = 6 _rows_ and 3 _columns_
- **Usage**
  - Digital image -> Each pixel has its color value
  - Digital video
  - Digital sound
- _Operations_

![](/images/matrix.png?raw=1)
