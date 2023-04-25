### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
+ Callback function: it will be passed as a argument inside another function that be called when the asynchronous code in JavaScript completed. 
+ Promise: a one-time guarantee of future value. A promise provides 2 methods: .then() and .catch() to handle success and error cases.
+ Async/await funtion: it also will return a promise and we don't meed to use .then, .catch or any callback function. 

- What is a Promise?
  Promise: a one-time guarantee of future value. A promise provides 2 methods: .then() and .catch() to handle success and error cases.

- What are the differences between an async function and a regular function?
+ Async function will always return an promise object which can be used to handle the result of the function's execution or any errors that may occur. while a regular function returns a value or undefined and any errors must be handled using try-catch blocks or other error-handling techniques.
+ An async function can use the await keyword to pause its execution until a promise is resolved or rejected, while a regular function executes synchronously.

- What is the difference between Node.js and Express.js?
+ Node.js is a runtime environment that allows developers to run JavaScript on the server, while Express.js is a web application framework that provides a set of tools and features for building web applications with Node.js. 
+ Express.js is built on top of Node.js and uses its features to create scalable and performant web applications.

- What is the error-first callback pattern?
The error-first callback pattern, also known as the Node.js callback pattern, is used in Node.js to handle errors in asynchronous functions. In this pattern, the first argument of a callback function is always reserved for an error object, and subsequent arguments are used to pass data.

- What is middleware?

+ In web development, Middleware is a type of software that acts between request and respond HTTP, and to perform operations such as authentication, logging, caching, and error handling.
+ In the context of server-side web frameworks like Express.js, middleware functions are typically functions that take three arguments: req (the request object), res (the response object), and next (a function that is used to pass control to the next middleware function or route handler). 

- What does the `next` function do?
+ The next function is called to pass control to the next middleware function in the chain, or to the route handler if there are no more middleware functions.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
+ Performance: The code is making three separate API requests sequentially, which can be slow and inefficient, especially if the requests are large or the API response times are slow.

+ Structure: The code is not modular, and all the API requests are made inside the same function. This can make the code difficult to maintain and test.

+ Naming: The variables elie, joel, and matt do not have descriptive names, which can make the code difficult to understand and reason about.
