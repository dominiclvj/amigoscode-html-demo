<style>
code, pre {
  font-size: 0.9rem;
}
</style>

# Strings

## Learning
Strings are pieces of text, written inside quotes. You’ve already seen them when we printed "Hello World JS :)". Strings can hold names, sentences, or even entire paragraphs.

JavaScript gives us useful tools, called properties and methods, to work with strings. Here are some you’ll use often:

You can find out how many characters are in a string with the ```.length``` operator:

```js
var message = "Hello";
console.log(message.length);  // prints 5
```

```.toUpperCase()``` makes a copy of the string with all letters capitalised
```js
var name = "jamila";
console.log(name.toUpperCase());  // prints "JAMILA"
```
```.substring(start, end)``` takes part of a string, starting at the first index (0) and stopping before the end index:
```js
var text = "JavaScript";
console.log(text.substring(0, 4));  // prints "Java"
```
Concatenation is a tool we can use to combine two strings together. You just need to use the ```+``` operator as if you were adding two numbers together. For example:
```js
var a = "Amigos";
var b = "code";
console.log(a + b);  // prints "Amigoscode"
```
Interpolation is a way to insert values directly into a string without needing to break it up with + signs. In JavaScript, interpolation uses template literals, which are strings written with backticks ` instead of single or double quotes. Inside these backticks, you can write normal text, and whenever you want to include the value of a variable or even an expression, you wrap it in ${}.
```js
var name = "Jamila";
var age = 21;
console.log(`My name is ${name} and I am ${age} years old.`);
// prints "My name is Jamila and I am 21 years old."
```
This is easier to read than writing "My name is " + name + " and I am " + age + " years old.". Interpolation keeps everything in one continuous string, making your code cleaner and less error-prone—especially when you’re working with longer sentences or multiple variables.

There are many, many ways to work with strings. [Read the docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/String) to see all the various methods that can be applied to strings.

Let's practice what we've learned to work with and log some strings.