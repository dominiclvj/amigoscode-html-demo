<style>
code, pre {
  font-size: 0.9rem;
}
</style>

# Variables

## Learning

In JavaScript, variables are containers for storing information. Think of them like labelled boxes where you can keep values such as names, numbers, or even more complex data. Once stored, you can use those values throughout your program.

You can declare a new variable with the keyword ```var```:

```js
var firstName = "Bob";
var age = 42;
var isCoder = true
var decimal = 3.14
var birthday = new Date(1990, 1, 1)
var person = {}
var empty = undefined
```

After declaring a variable, you can see its value by using ```console.log```:

```js
var firstName = "Bob";
var age = 42;
var isCoder = true
var decimal = 3.14
var birthday = new Date(1990, 1, 1)
var person = {}
var empty = undefined

console.log(firstName)
console.log(age)
console.log(isCoder)
console.log(decimal)
console.log(birthday)
console.log(person)
console.log(empty)
```

Try creating your own variables—for example, a favourite colour, a lucky number, or whether you’ve had lunch today, and then print them to the console.

In later lessons you’ll also meet ```let``` and ```const```, which are usually preferred over ```var``` in modern JavaScript. For now, focus on getting comfortable with declaring and logging variables.