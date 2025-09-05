<style>
code, pre {
  font-size: 0.9rem;
}
</style>

# Comments

## Learning
Imagine coming back to a piece of code you wrote six months ago. You know it works, but you can’t quite remember why you wrote it that way. That’s where comments save the day. Comments are short notes you leave in your code that explain what’s happening. The JavaScript engine completely ignores them—they’re just for humans.

There are two main types of comments in JavaScript. The first is single-line comments. They begin with ```//``` and run to the end of the line:
```js
// This line adds two numbers together
let sum = 5 + 3;
```

Multi-line (or block) comments start with ```/*``` and end with ```*/```. They're useful for longer explanations, or for temporarily disabling chunks of code:
```js
/*
This section sets up the
initial variables for our program
*/
let count = 0;
```
Why are comments useful? They help others (and your future self) quickly understand your code without puzzling over every line. They’re also handy for debugging—by “commenting out” a line, you can test how your program behaves without deleting the code.

Add one single-line comment and one block comment in your script. Think of them as little notes to your future self about what the code is supposed to do.