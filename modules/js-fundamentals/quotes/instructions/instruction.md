<style>
code, pre {
  font-size: 0.9rem;
}
</style>

# Quotes & Colons

## Learning
In JavaScript, you can create strings with either double quotes or single quotes. Both work the same way, so you can pick whichever feels natural:

```js
// these are identical
console.log("Hello World JS :)")
console.log('Hello World JS :)')
```

Try adding an extra ```console.log()``` to the script using your preferred quote style.

You may also notice that, unlike some languages, ending a line with a semicolon (```;```) is optional in JavaScript. The interpreter is usually smart enough to know where one statement ends and the next begins:

```js
// these are identical
console.log("Hello World JS :)");
console.log("Hello World JS :)")
```

Add a semicolon to your script and see for yourself. Nothing changes.

Ultimately, this comes down to personal preference. The most important thing is consistency within a project. In professional codebases, tools like ESLint and formatters such as Prettier are often used to enforce a consistent style automatically.

Now try using quotes and colons yourself and see what happens to your JavaScript code.