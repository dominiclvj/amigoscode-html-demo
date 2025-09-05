<style>
code, pre {
  font-size: 0.9rem;
}
</style>

# Tables

## Learning
Tables are used to display data in rows and columns. Think of them like a spreadsheet built into your webpage. The ```<table>``` element defines the table itself and brings it into existance on the page. Inside this element we use:

- ```<tr>``` - table row
- ```<td>``` - table data cell (the actual data values)

If we want to make a simple table with two rows that might contain a table of users, we can do so as follows:
```html
<table>
  <tr>
    <td>1</td>
    <td>James</td>
    <td>29</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Ana</td>
    <td>44</td>
  </tr>
</table>
```

Our table needs headings to describe what data each column contains. In this case we have a unique id, names and ages. For the headings of each column, we use the ```<th>``` tag instead of ```<td>```.
```html
<table>
  <tr>
    <th>id</th>
    <th>name</th>
    <th>age</th>
  </tr>
  <tr>
    <td>1</td>
    <td>James</td>
    <td>29</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Ana</td>
    <td>44</td>
  </tr>
</table>
```

So far we've created a very basic looking table. By default in HTML, tables won't have borders. Everything looks squashed together. We can use CSS to style them.

If we create a style block ```<style>``` in the header (```<head>```), this will apply consistent styling to every table that we create on the page.

In the example below, you can see that we've first created style tag that applies to tables, and specifically the tags ```<th>``` and ```<td>``` which define the table heading and table data cells respectively. We've then said that the borders of these elements should be 1 pixel in width, solid and blue.

The second 