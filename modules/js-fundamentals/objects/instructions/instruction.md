<style>
code, pre {
  font-size: 0.9rem;
}
</style>

# Objects

## Learning
So far you’ve learned how to store values like text, numbers, and dates in variables. But what if you want to keep related information together? For example, instead of having a separate firstName, age, and birthday variable, you might want to group all those details into one place. That’s where objects come in.

An object is a collection of key–value pairs. Each key (also called a property) has a value associated with it. Here’s how you can define an object in JavaScript:

```js
var student = {
  name: "Jamila",
  age: 21
};
```
Just as we can call functions from the console object, we can access properties from the student object using dot notation.
```js
console.log(student.name);  // prints "Jamila"
console.log(student.age);   // prints 21
```
Now it's your turn to combine the variables we defined earlier into a single object.