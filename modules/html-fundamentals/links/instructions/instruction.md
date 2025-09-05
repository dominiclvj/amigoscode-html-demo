<style>
code, pre {
  font-size: 0.9rem;
}
</style>

# What Are Tags?

## Links
Hyperlinks are what make the web *the web*. They allow you to connect one page to another, whether that page is on your own site or hosted somewhere else.

Hyperlinks are created using the ```<a>``` (anchor) tag with the href attribute, which specifies the destination of the link. You already built one to the Amigoscode website in an earlier lesson.

When linking to an external website, you use the full URL as shown below:

```html
<a href="https://www.amigoscode.com">Visit Amigoscode</a>
```

- **href** is the attribute that holds the link destination
- The text between the ```<a>``` and ```</a>``` tags is what users see and click
- When the user clicks on this text, the browser will take them to that external site

Your website will likely contain more than one page. When your project has multiple HTML files, you often want to link between them. This is done with relative paths.

Let's assume we have the following project structure:

```text
project/
│
├── index.html
├── about.html
└── pages/
    └── terms.html
```

If we want to get from index.html to lists.html, we don't need to list out the full URL. We can use a relative path. For example:

```html
<a href="about.html">About Us</a>
```

We can also navigate to subdirectories (pages/terms.html) from index.html in the same way. For example:

```html
<a href="pages/contact.html">Contact Us</a>
```

It's also possible to move up from subdirectories back to the top level of our folder structure:

```html
<a href="../index.html">Home</a>
```

In this case, adding ```..``` means "go up one folder".

We've set out a small website structure in your working directory. Help set up links from the homepage (index.html) to get to the other pages.