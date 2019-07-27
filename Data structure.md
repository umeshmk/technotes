# DATA STRUCTURES

#### # Introduction

- Data structure organizes data. A good DS is a good algorithm.
- *Most common*
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

#### # Linked list

![](https://miro.medium.com/max/919/1*1B4X5Jbe5LNXeZNWx2msyw.gif)

- Similar to *Array*
    - *Array* -> data is stored contigously in memory
    - *Linked list* -> Data need not be continous
- Hence, *Linked List* can insert/remove without reallocation or reorganisation.
- **Drawbacks**
    - Random access not allowed. Only from start.
    - Cannot do binary search.
    - Needs extra space.
- **Usage**
    - Its a fundamental DS for *stack, tree, queue, graph*


#### # Stack

- Create using *Array* or *Linked List*
- `LIFO` -> Last In First Out
- *push* & *pop* operations can be performed.
- **Usage**
    - *Undo/redo* functions.

#### # Queue

- Create using *Array* or *Linked List*
- `FIFO` -> First In First Out
- **Usage**
    - *Printer*, *Call center* calls, etc

#### # Graph
- Set of *nodes* (vertex) and its *connections* (edges)
- ![](/images/graph.png?raw=1)

#### # Binary Tree

- Interconnected nodes.
    - Topmost = *root*
    - Below root = *childrens*
    - No children = *leaves*
- 1 Node can have max 2 childrens. Hence called *Binary*
- *Height* = No of nodes from root to leaves
![](/images/tree.png?raw=1)

- **TYPES**
    - *FULL* - Each node has 2 childrens
    - *COMPLETE* - Each levels are filled. Except last level
    - *PERFECT* - Each node has 2 childrens. All leaves at same levels
- **Advantage**
    - Hierarchies relationship
    - Good insert
    - Good search
    - Easy to get subtree
- **Usage**
    - *Binary Search Tree* in search applications

#### # Hash Tables


#### # Matrix