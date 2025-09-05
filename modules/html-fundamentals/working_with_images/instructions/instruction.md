<style>
code, pre {
  font-size: 0.9rem;
}
</style>

# Images

## Learning
Images are one of the easiest ways to make a web page more interesting. In HTML, images are added with the ```<img>``` tag. This is one of the self-closing tags we encountered earlier.

The most important part of an image tag is the src attribute. This tells the browser where to find the image file. If the image is stored on your computer inside the same folder as your HTML file, you can simply write the file name. For example:

```html
<img src="man-working.jpg" alt="Man working at a laptop">
```

If you want to embed images from a webpage you find on the internet, you can copy the address of the image and paste it into the website. Below we've used this code to embed an image from the Amigoscode website.

```html
<img src="https://amigoscode.com/assets/thumbnails/courses/linux-fundamentals.webp" alt="Man working at a laptop">
```
<img src="https://amigoscode.com/assets/thumbnails/courses/linux-fundamentals.webp" alt="Man working at a laptop" style="width: 300px;">

The second attribute, alt, is just as important. It provides alternative text that describes the image. This text is displayed if the image cannot load, and it is also read out loud by screen readers for people with vision impairments. A good habit is to always provide a short description, not just leave it empty.

By default, images will display at their natural size, which can sometimes be far too big for your page. We can change the size with CSS. The simplest way to do this is with the style attribute, which lets us write CSS directly inside the HTML tag. For example, if you wanted your image to be 300 pixels wide, you could write:

```html
<img src="man-working.jpg" alt="Man working at a laptop" style="width: 300px;">
```

Let's practice working with an image using what we've learned.