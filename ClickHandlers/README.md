# Assessment: Click Handlers #

For this activity, you will be creating an interactive web page that gets updated or modified when various buttons are clicked. 

Begin by making a **fork** of [this](https://gitlab.com/kenzie-academy/se/fe/getting-started-with-javascript/s_click-handlers) repository. In the root of this project you will find  `index.html`.

If you open that file in your web browser, you will see three numbered sections.

Clicking on the "blue" and "gray" buttons in section 1 will change the color of the square. The other buttons on the page don't do anything ...yet.

Open `index.html` in your code editor. There are three separate sections of JavaScript code embedded within the HTML, enclosed within `<script>` tags.

Inside each of those three sections of code, you will find a JavaScript comment specifying a "TODO".

Each TODO indicates a place where you need to write some additional JavaScript code in order to complete the functionality of the page. Complete all three of the TODOs.

* * *

![Edwin_the_duck.jpg](https://i.snag.gy/xZgaDe.jpg)

**Edwin the Duck Says:**
_In this exercise, the HTML, CSS, and JavaScript have all been combined together into a single file. That's OK for a small project like this. In general, though, it's a good practice to separate the markup, stylesheets, and scripts into independent files._

* * *

### Math Hint ###

Your reading introduced JavaScript's addition and multiplication operators, `+` and `*` respectively.

The third TODO will require you to figure out whether a number is even or odd.

To determine this, you will use JavaScript's modulus, or remainder, operator, `%`.

The modulus operator gives you the [remainder left over when one number is divided by another](https://www.mathsisfun.com/numbers/division-remainder.html).

In arithmetic, a number can be checked even or odd by checking the remainder of the division of the number by 2.

-	`3 % 2` = 1 _(hence 3 is odd)_
-	`4 % 2` = 0 _(hence 4 is even)_

### Programming hint ###

Make sure you understand the difference between JavaScript's assignment operator (which updates the value of a variable) and the equality operator (which returns true or false depending on whether two values are the same or not).

### Finishing up ###

Once you have completed all three TODOs, your index.html file should display five buttons, and clicking on any of those buttons should produce the desired behavior. Push your code into your GitLab repository and use the GitLab Pages feature to allow your site to be viewed directly. Please submit the published gitlab pages url below.