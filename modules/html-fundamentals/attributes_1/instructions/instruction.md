<style>
code, pre {
  font-size: 0.9rem;
}
</style>

# Attributes: Introduction

## Learning
Tag attributes provide additonal information about an HTML element. They are always included in the opening tag.

Attributes enhance the functionality of an element, or provide additional details about it. These will affect its behaviour or appearance.

Attributes are added within the opening tag, typically taking the form of ```<attribute="value">```.

For example:
```html
<p class="highlight">This text can be styled differently.</p>
<!-- class will assign one or more class name to an element, enabling CSS styling or JavaScript targetting. -->

<p id="intro">This paragraph has an ID.</p>
<!-- id provides a unique identifier for an element, allowing targetted styling or scripting. -->

<img src="image.jpg">
<!-- src specifies the source of content like images, audio, or video for elements like <img> or <video> -->

<a href="https://www.example.com">Go to Example</a>
<!-- href attribute sets the destination of a link for anchor elements <a> -->

<img src="image.jpg" alt="Description">
<!-- alt attribute provides a description of the content for accessibility or SEO purposes -->
```

Let's use what we've learned about attributes to create our first link to the Amigoscode website!