<style>
code, pre {
  font-size: 0.9rem;
}
</style>

# Quotes

In javascript we can create a string using both double quotes and single quotes

```js
// these are identical
console.log("Hello World JS :)")
console.log('Hello World JS :)')
```

Try adding an extra `console.log()` to the script and see.

# Semicolons

Unlike some languages, in javascript ending a line with a semicolon is optional.

```js
// these are identical
console.log("Hello World JS :)");
console.log("Hello World JS :)")
```


Try adding a semicolon to the script and see.

# Which to use?

Ultimately this comes down to personal preference. Usually you will want to stay consistent within a given project, and use ESLint and a formatter to enforce a standard on your codebase.