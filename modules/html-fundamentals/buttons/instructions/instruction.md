<style>
code, pre {
  font-size: 0.9rem;
}
</style>

# Buttons

## Learning
Buttons let users interact with your webpage. Clicking a button can submit a form, trigger JavaScript, or just display text.

The most common way to create a button is with the ```<button>``` tag. This will create a clickable button displaying the text within the tag. For example:

```html
<button>click me</button>
```
<button>click me</button>

You can use the ```type``` attribute to modify how the button should behave. For example:

- ```type="button"``` - Gives you a normal button that does nothing until you use CSS styling
- ```type="submit"``` - Gives you a button that will submit a form on a webpage
- ```type="reset"``` - Resets all fields in a form

You might have noticed on some websites that buttons are disabled until you have completed some action on a webpage. The "Next" button in the bottom right-hand corner of this coding environment is disabled until you complete the exercise.

You can use the ```disabled``` attribute to create one of these buttons as follows:
```html
<button disabled="disabled">click me</button>
```
<button disabled="disabled">click me</button>

As you build more capable websites, you will want to use some styling to adjust colours, fonts, text size and even introduce animations. To do this we will use a combination of CSS and JavaScript. If we want to make our button red, we can use the ```style``` attribute to write CSS directly on an element to modify the background colour:

```html
<button
  type="button"
  style="background-color: red;">
  click me
</button>
```
<button
  type="button"
  style="background-color: red;">click me 
</button>

Lets use our new understanding of buttons and styling to make adjustments to the open HTML file.