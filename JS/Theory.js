// Event Loop :
//  Event Loo is the mechanism that allows JavaScript to perform non-blocking operations. 
// It allows JavaScript to handle async operations in the background without stopping the main execution flow.
// JavaScript is single-threaded, which means it can only do one task at a time so
// The Event loop is a loop that constantly checks if there are any tasks that need to be executed. 
// If there are, it will execute them. If there are no tasks to execute, it will wait for new tasks to arrive.

// The Event loop has two main components: the Call stack and the Callback queue.

// Call Stack
// The Call Stack runs normal code (synchronous tasks).

// Callback Queue
// If there's a slow task (like setTimeout, API call, or event listener), it moves to the Web APIs (handled by the browser).
// Once the task is ready (like a timeout finishes or API responds), it goes to the Callback Queue.
// The Callback queue stores the tasks that have been completed and are ready to be executed. 

// Event Loop's Workflow:
// Executes tasks from the Call Stack.
// For an asynchronous task, such as a timer, it runs in the background. JavaScript proceeds to the next task without waiting.
// When the asynchronous task concludes, its callback function is added to the Callback Queue.
// If the Call Stack is empty and there are tasks in the Callback Queue, the Event Loop transfers the first task from the Queue to the Call Stack for execution.
// setTimeout(() => console.log('Hello from the timer'), 0);
// console.log('Hello from the main code');
// setTimeout is processed, and because it's asynchronous, its callback is placed in the Callback Queue.
// The next line, console.log("Hello from the main code"), is logged immediately.
// Although the timer duration is 0 milliseconds, its callback has to wait until the Call Stack is empty. After the main code logs, 
// the callback is moved from the Callback Queue to the Call Stack and executed.
// The result is "Hello from the main code" being logged before "Hello from the timer".