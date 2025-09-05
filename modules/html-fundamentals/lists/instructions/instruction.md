<style>
code, pre {
  font-size: 0.9rem;
}
</style>

# Lists

## Learning
Lists are used to group related items together. They make information easier to scan and understand. HTML provides two main types of lists: ordered lists and unordered lists.

In ordered lists ```<ol>```, items are numbered by default. These are useful when the order *does* matter (e.g. instructions, rankings, etc.). In the following example, we wouldn't want any item to appear out of sequence:

```html
<h2>Steps to Make Tea</h2>
<ol>
  <li>Boil water</li>
  <li>Add tea leaves to the pot</li>
  <li>Pour water and steep</li>
  <li>Serve</li>
</ol>
```

In unordered lists ```<ul>```, items are shown with bulletpoints by default. They are useful when the order does not matter (e.g. a shopping list):

```html
<h2>Shopping List</h2>
<ul>
  <li>Apples</li>
  <li>Bread</li>
  <li>Milk</li>
  <li>Tea</li>
</ul>
```

In both cases, we use the ```<li>``` tag for list items. Lists can be nested. This means you can put a list inside your list. CSS can later be used to style bullets, numbers, or switch list types.

Let's practice making our own lists to document our Top 3 Favorite Movies and a To-Do List for what we need to get done tomorrow.