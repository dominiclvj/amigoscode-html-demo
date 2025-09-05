<style>
code, pre {
  font-size: 0.9rem;
}
</style>

# Attributes: Tags

## Learning
We've already taken a look at tags. They are used to structure and define elements within a HTML document. We're now going to look at the two main types of tags: standard tags and self-closing tags.

Standard tags consist of an opening tag and a closing tag, with content in between. For example:

```html
<p>This is a paragraph.</p>
<div>This is a div element.</div>
```

Self-closing tags do not have any content between an opening and closing tag. Instead, they are written as a single tag that ends with a slash ```/```. These tags are typically used for elements that do not require any content, such as images or line breaks. Here's an example of some common self-closing tags:

- ```<br>```: Line break
- ```<img>```: Image
- ```<input>```: Input field
- ```<link>```: Link
- ```<meta>```: Metadata
- ```<hr>```: Horizontal rule
- ```<wbr>```: Word break

Let's try adding a self-closing tag to our existing webpage to prompt a visitor to input their name.