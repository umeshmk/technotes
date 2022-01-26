# Big O

> _Ref - Cracking the coding interview_

- Metric for efficiency of **algorithms runtime**
- **Example**

  - _Travel or download data_
    - Travel - Use airplane, car, etc
    - Download - using internet, ftp, email, etc
  - _data size ?_
    - Big (lots of TB ) - airplane is faster
    - Small - email is faster
  - _Big O ?_
    - Electronic - O(size)` - Time is linear with size of file.
    - Airplane - O(1)` - Time is constant (size don't matter)

## Time Complexity

<vc-img url='https://i.imgur.com/LpSaHt4.jpg' size='xl'/>

**Runtimes list**

- **Polynomial**
  - Constant - `O(1)`
  - Logrithmic/Binary - `O(log N)`
  - Linear - `O(N)`
  - Quasilinear - `O(N log N)`
  - Quadratic - `O(N^2)` (n square)
  - O(2<sup>N</sup>) (2 raise to N)
- **Exponential** ie worse than Quadratic
  - Factorial - `O(N!)` (travelling salesman)
- **Best / Worst / Expected case**
  - Ex: For **quicksort**(uses pivot) on array
    - _Best case_ - `O(N)` - If all items are same. It will travel just once. {Not much useful in reality.}
    - _Worst casr_ - O(N<sup>2</sup>) - Pivot keeps changing. If at every change pivot is the largest number.
    - _Expected case_ - `O(N log N)` - Best & Worst cases are rare.
    - _Worst = Expected_ - Almost all the time.

## Space Complexity

- `O(n)` - array with n items
- O(n<sup>2</sup>) - 2D array with `n x n` items

_Stack space_ in recursive calls is counted

- **Example 1 - Sum of 0 to n**

  - _Time_ = `O(n)`
  - _Space_ = `O(n)` -> (Recursion uses stack)

    ```js
    function sum(n) {
      if (n < 0) {
        return 0;
      }
      return n + sum(n - 1);
    }
    ```

- **Example 2 - Sum of 0 to n - But add adjacent items**

  - _Time_ = `O(n)`
  - _Space_ = `O(1)` -> No stack and only 1 number is stored at a time

    ```js
    function sum(n) {
      var sum = 0;
      for (let i = 0; i < n; i++) {
        sum += add(i, i + 1);
      }
      return sum;
    }
    function add(x, y) {
      return x + y;
    }
    ```

## Drop the constants (`O(1)`)

- **If specific inputs** (depends on N)
  - `O(n)` can be better than `O(1)`
  - _O(N<sup>2</sup>)_ can be better than `O(N)`
- So Big O is just description of _rate of increase_ if N increases.
- This is why `O(1)` is **never counted in runtime.**
  - Means `O(2N)` is `O(N)` - 2 is dropped

```js
// 1 loop
for(....){
  if(x<min){min = x}
  if(x>max){max = x}
}
// 2 loops
for(....){
  if(x<min){min = x}
}
for(....){
  if(x>max){max = x}
}

```

## Drop the Non-Dominant terms

- **Least -> Most**
  - _(log N) < (N) < (N log N) < (N<sup>2</sup>) < (2<sup>N</sup>) < (N!)_
- **Examples**
  - O(N+N) -> O(2N) -> O(N) (Drop 2)
  - O(N<sup>2</sup> + N) -> O(N<sup>2</sup>) (Drop N which is not dominant)
  - O(N + Log N) -> O(N) -> O()
  - O(2<sup>N</sup> + 1000N<sup>100</sup>) -> O(2<sup>N</sup>)
  - O(B<sup>2</sup> + A) (Not dropped since cannot determine dominance)

## Multipart algorithms - Add vs Multiply

```js
// Add ---> O(A+B)
for(...){
  // A
}
for(...){
  // B
}
// Multiply ----> O(A*B)
for(...){
  for(...){
    // A
    // B
  }
}
```

## Amortized time

- Google it (maybe ignore it)

## O(Log N)

- Base of log dont matter for Big O.
- Ex: In **binary search** tree when we divide the items into half for each iterations. This will take `O(log N)` time.

  - If `N = 16` then it takes max of 4 iterations to find a number - `1 -> 2 -> 4 -> 8 -> 16` _(16/2 = 8, 8/2=4 .....)_
  - _2<sup>4</sup> = 16_ --> _log<sub>2</sub> l6 = 4_

## Recursive

```js
function foo(x){
  .....
  return foo(x-1) * foo(x-1);
}
foo(4);
```

- Total function calls = Total nodes in nodetree
  - `Nodes(N) = Branches`<sup>`depth`</sup> = `2`<sup>`X`</sup>
  - `16 = 2`<sup>`4`</sup> (in above ex)
  - `depth = x = log N`
-
- _Time_ = `O(N)` = `O(branches`<sup>`depth`</sup>)
  - Note - Often true but not always
  - If depth is unknown then `depth = log(N)
- _Space_ = _O(depth)_

- **Memoizations**
  - In Fibonacci series instead of calculating all numbers again & again. We can store the each calculated value in array.
  - Use this stored values to calculate next value - `a[x] = a[x-1] + a[x-2]`
  - So even if recursive the stored value is returned ie a **constant is returned**
  - **Time** = `O(N)` [Reducing `N = 16` ---> `4` ]

.
.
.
.
.
.
.
.
.
.
.

.
.
