# ES6 / Ecmascript 2015 
https://laracasts.com/series/es6-cliffsnotes

>
# Babel Setup
-  A javascript compiler
-  converts new syntax into old browser supported syntax
-  javascript vs ecmascript
	+  ecmascript is a standard and javascript is its implementation
	+  nodejs , javascript are implementations

# ES6 compilation with elixir
no need to mention babel since elixir manages everything.

# To let , var or const 
- developers too are confused/divided about when to use them.
- but majority says use `let` instead of `var`
- **always declare variable to the top**.
	+ eg.
	```javascript
	function f1 (flag){
		if(flag){
			var foo = "hello";
			console.log(foo);
		}else{
			console.log(foo);
			console.log(bar);
		}
	}	
	f1(true);	//hello
	f1(false);	//foo is "undefined" and bar is "Reference error: undefined "	

	```
	+ *reason*
	```javascript
	function f1 (flag){
		var foo;	// moved from if to top of scope ie function. To avoid such confusion declare at top.
	```
- Soo `let` and `const` are **block level** only ie inside curly braces `{ .... }`
- `const`
	```javascript
		const a = ["hello"];
		a = ["world"];		// gives error. Is not assignable.
		a.push("world"); 	// works correctly. Is mutable.
	```
- preference
	+ let 
	+ const
	+ var (almost not used. Used for global variables)

# Arrows
- replacing `function` keyword with arrow `=>`
	```javascript

		arr.forEach(function(foo1, foo2){
			console.log(foo1);
			console.log(foo2);
		});
		arr.forEach(function(){
			console.log("text only");
		});

		// using arrows
		arr.forEach( (foo1, foo2) => { 
			console.log(foo1);
			console.log(foo2);
		});
		// can omit parenthesis if *1 arg* but needs if *0,2,3...n args*
		// can remove curly braces if only one line
		arr.forEach(() => console.log("text only"));
	```
- **this** refers to parent obj in `arrow`
- **this** refers to windows onj hence `undefined` in `function`

# Default parameter
- ```javascript
	function foo(a="hello" , b="world"){
		alert(a + b);
	};

	foo("my");	//my world
	foo();		// hello world

  ```

# Rest and Spread operators
- `rest` defining a function for *n* numbers of args
	```javascript
		//2 variables
		function sum (a,b){
			return a + b;
		}
		sum(1,2);	//3

		//n variables 
		function sum(...numbers){
			alert (numbers); 
		}
		sum(1,2,3,4,5); // [1,2,3,4,5] args are converted to a single array

		//NOTE
		function sum(...numbers , wrong);
		function sum(right, againRight, ...numbers);
	```
- `spread` calling a function for *fixed* number of args
	```javascript
		function sum(a,b){
			return a+b;
		}
		sum(1,2);		//3

		arr = [1,2];
		sum(...arr);	//3
	```

# Template string
- AWESOME use backticks **`**
	```javascript
		// -----------old way
		var = "<div>Hello <span>" + name + "</span></div>"; 

		//-----------new way
		var = `
			<div>
				Hello 
				<span> 
					${name} 
				</span>
			</div>
			`;

# Awesome object enhancements
- **obj shorthand and method shorthand**
	```javascript
		//---------old way
		function person(){
			var name = "umesh";
			var age = 27;
			// return an object;
			return {
				name: name,
				age: age ,
				greet: function(){return "hello " + this.name;}
			}
		}
		//---------new way[using backticks and smaller name & age properties if samename ]
		function person(){
			var name = "umesh";
			var age = 27;
			// return an object;
			return {
				name,
				age,
				greet(){ return `hello  ${this.name}` }
			}
		}
	```
- **obj destructuring**
	+ eg1
		```javascript
			let obj = {
				name: "umesh",
				lastname: "kadam",
				age: 27
			};
			// get 2 new variables with same name and value from object properties
			// --------old way 
			var name = obj.name;
			var age = obj.age;
			// --------new way
			// destructuring obj
			let { name, age } = obj;
		```
	+ eg2
	```javascript
		//some random ajax data 
		ajaxData({
			result: ['foo', 'bar'],
			status: "ok",
			error: "No error"
		});

		// -----old way
		function ajaxData(data){
			var result = data.result;
			var status = data.status;
			console.log(status, result);
		}		
		//------new way 
		//destructuring as an argument
		function ajaxData( { result, status } ){
			console.log(status, result);	
		}
	```

# Classes
- eg
	```javascript
		//------OLD WAY
		function a(x,y){
			this.x = x;
			this.y = y;
			//option1: function is redeclared and redefined everytime new instance is created.	
			this.changex = function (newx) {this.x = newx};
		}
		//option2: function is attached to its prototype object. Every instance shares this method instead of recreating everytime
		a.prototype.changex = function(newx){this.x = newx};

		//create instance and call 
		var a1 = new a(5,10);
		a1.changex(20);
		
		// -----NEW WAY
		class A{
			constructor(x,y){
				this.x = x;
				this.y = y;
			},
			//behind the scene this is added to prototype instead of directly like above
			changex(newx){
				this.x = newx;
				this.register(5,11);	//This is wrong. 'register' is static. can be called only from outside.(see below.)
			}

			//static method (just extra notes about static)
			// cannot be called from inside class 
			static register (x, y){
				return new A(x, y);		//creates new instance here but can be anthing.
			}

			//get/set method (just extra notes)
			get foo(){
				return "foo";
			}
		}
		//create instance 
		let a1 = new a(5,10);
		a1.changex(20);
		//using static method
		// do not require instance to call. Just use class name. Like php facade [A::register(5,10)]
		let a1 = A.register(5,10);
		//get foo [note: foo is  without '()' brackets]
		a1.foo;

- classes are *first class citizens*. Means can be passed around anywhere as values.
	+ guess similar to php anonymous class
	+ eg:
	```javascript
		function log(strategy){
			strategy.handle();
		}
		class StrategyA{
			handle(){
				alert("hello world");
			}
		}
		class StrategyB{
			handle(){
				console.log("hello world");
			}
		}
		log(new StrategyA)	// alert
		log(new StrategyB)	// console.log
	```


# Modules
- Are just files
- we want to use contents from anyfile to anyfile.
- use `export` and `import` in from and to file respectively
- eg:
	```javascript
		//------------------------------
		//resources/js/TaskCollection.js
		//-----------------------------

		// 'export' 'default' keywords. 
		// 'default' is optional.
		export default class TaskCollection{
			constructor(tasks = []){
				this.tasks = tasks;
			}
			dump(){
				console.log(this.tasks);
			}
		}
		//just another way is to 'export' at end after class/variable definations. But remove 'export', 'default' from above class
		export default TaskCollection;
		
		//another 'export'. 
		// note: normally only 1 'export' per file. But many can be used.
		export let foo = "bar";
		export let fooo = "barr";

		//-------------------
		//resources/js/app.js
		//-------------------
		// curly brackets if not 'default'
		import TaskCollection, {foo, fooo} from './TaskCollection';
		
		console.log(foo , fooo);

		new TaskCollection(["t1", "t2", "t3", "t4"]).dump();
	```

# Module Bundling with Rollup
- modern browsers are implementing ES2015 spec, none of them yet support modules natively. 
- This means we require a module bundler, like Browserify, Webpack, or Rollup. 
- rollup: we'll compile ES2015 code using modules, down to vanilla ES5 code that all relevant browsers understand.
	+ rollup is a module **bundler** not **compiler**. It does not converts es6 to older javascript
	+ use plugins for rollup like babel, buble for compiling. 

# Module Bundling with Webpack
- use laravel mix which has all settings correctly.


# Promises[Confusing]
- *asynchronous* 
	+ `onclick()` is asynchronous code since it do not run untill called by clicking
	```javascript
		button,onclick() = function(){ //code };
		//or jquery
		$('button').on('click', function(){//code})

		// ajax is a promise example used by vue resources		
		let promise = this.$http.get('/path/to/ajax/request');
	```	
- We use `promises` to get rid of `callback` functions for asynchronous 
- `promises` is a placeholder for events/operations that has not taken place.
- A promise to perform process/action ie run code which has not executed yet. (code before and after are executed)
- Used when running process might take time and we don't want to block the code which comes after that.
- code in promise runs immediately	```javascript
		var p = new Promise(function(){
			
		});
	```
- note: if any framework/library uses `.then()` then it is most probably a promise.

# String Api
- `startsWith(), endsWith(), includes(), and repeat().`
- `includes()`
	```javascript
	let title = "Red Rising";
	// -------old way
	if (title.indexOf('Blue') == -1){
		console.log('Blue is not present.');
	}
	//--------new way 
	if ( ! title.include('Blue')){
		console.log('Blue is not present.');
	}
	//similarly
	title.startsWith('R');	//true
	title.endsWith('R');	//false
	```

- `repeat()`
	```javascript
		let head = "this is heading";
		let padder = '='.repeat(10);
		
		console.log(
		`
			${padder}  ${heading} ${padder} 		// ==========thisis heading==========
		`
		)
	```

# Array#find and Array#includes 
- `includes()` `find()`
	```javascript
		[5,10,15,11,20].includes(11);				//true

		[5,10,15,11,20].find(function(n){
			return n > 10;							// 15
		});
		[5,10,15,11,20].find( n => n > 10)			// 15
		[5,10,15,11,20].findIndex( n => n > 10)		// 2
		
		[5,10,15,11,20].includes(11);	//true
	```

# Generators
- pause and resume functions
- `function *name()`
	```javascript
		function *name(){
			console.log('begin');
			yield 1;
			yield 2;
			yield 3;

		}

		console.log(name());			// give generator object instead of begin
		console.log(name().next());		//`Object{value:1, done:false} 
		console.log(name().next());		//`Object{value:2, done:false} 
		console.log(name().next());		//`Object{value:3, done:false} 
		console.log(name().next());		//`Object{value:undefined, done:true} 

		//ANOTHER EXAMPLE
		function *range(start, end){
			while(start < end){
				yield start;
				start++;
			}
		}
		let r = range(1,4);
		console.log(r.next());			// Object(value:1, done:false)
		console.log(r.next());			// Object(value:2, done:false)
		console.log(r.next());			// Object(value:3, done:false)
		console.log(r.next());			// Object(value:4, done:false)
		console.log(r.next());			// Object(value:undefined, done:true)

		let r = range(1,3);
		for(let i of r) console.log(i);	// 1 	2 	 3 

		console.log( 
			[ ...range(1,4) ] 			// [1,2,3,4]
		);

	```


# Sets
- Object with collection of unique values of anytype.
	```javascript
		let a = new Set([1,2,3,1,2,3,4,5]);

		console.log(a);					//Set(5) {1, 2, 3, 4, 5}
	```












































