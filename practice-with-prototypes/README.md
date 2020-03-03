# Activity: Practice with Prototypes

As soon as we started writing React, you were exposed to this funky `class`
keyword, which has been paired with another new `extends` keyword. These are
__not__ exclusive to React, and were instead introduced to JavaScript via ES6.
They are essentially [syntactic sugar](https://en.wikipedia.org/wiki/Syntactic_sugar)
on top of prototypes, which you learned about way back when we talked about
[object-oriented javascript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS).

For this activity, we wanted to formally introduce you to the class-based syntax
and have you practice by converting between prototypes and classes.


## Prerequisite Knowledge

You'll need to understand a few concepts before you can understand the activity
completely (though you might be able to complete it by fumbling around). Below,
we give a whirl-wind tour of some underlying concepts that will deepen your
understanding of what's happening as you work through the activity.

### Inheritance

The idea behind inheritance is that it should be possible to define new objects
that inherit properties of other so-called parent objects. For instance, you
might define a `Dessert` object that describes something that is `sweet`, and can
be configured with a `flavor`. You might then want to make so-called child
objects that, whilst still being desserts, have their own qualities, such as a
`Pastry` or `Custard`.

We've listed some resources below that dig a little deeper into the topic of
prototypes and inheritance. We recommend that rather than pausing completely to
read or watch the resources, you attempt the activity until you reach unfamiliar
territory, then consume resources until the territory becomes familiar. It is
important to write code when learning new concepts, and we find that this
approach allows you to apply what you've learned immediately, rather than having
to retain a ton of content and try to apply them all from memory.

- read: [Inheritance in JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Inheritance)
- read [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

### Example 

For this first one, we've walked you through step-by-step and explained not only
what each line of code does, but also how to convert it to an ES6 class. We
invite you to type out each step in an editor or on [repl.it](https://repl.it/languages/javascript) to solidify your
understanding. Later, we'll have you do some conversions on your own.

#### The Problem

Let us suppose that we want to represent pieces of sokoban as objects. We
might say that the board is made up of `Tile`s which all have a background. We
might further say that certain `Tile`s are `SolidTile` (cannot be walked
through), `PushableTile` (can be pushed by another `Tile`), or `ControllableTile`
(can be controlled by the arrow keys). We can thus identify the following tiles:

- `playerTile`, which is `Controllable`
- `wallTile`, which is `Solid`
- `boxTile`, which is `Pushable`
- `storageTile` and `floorTile` will just be `Tile`s as they aren't too special

##### As Prototypes

We'd start by first defining a `Tile` constructor function with appropriate properties:

```javascript
function Tile(x, y, type) {
    this.x = x;
    this.y = y;
    // We use type to determine the positioning (static vs absolute) and
    // background color of the tile once drawn.
    this.type = type;
}
```

This tile doesn't have any methods, as drawing tiles is the same, so a single
function that handles drawing all tiles would be sufficient. We won't show you
that function here though.

We can now use this constructor to create floor and storage tiles:

```javascript
const floor = new Tile(0, 0, "floor");
const storage = new Tile(2, 5, "storage");
```

As both kinds of tile are just drawn and can't really be interacted with, it was
enough to use the `type` property to distinguish between the two.

Next, we can define child prototypes to handle our `playerTile`, which we want
to move by keyboard:

```javascript
function ControllableTile(x, y, type) {
    Tile.call(this, x, y, type);
}
```

The `Tile.call(...)` line is used to call the `Tile` constructor method, but
attach the results to the `ControllableTile` instead of `Tile`.

We have to tell JavaScript to "inherit" functionality from `Tile`:

```javascript
ControllableTile.prototype = Object.create(Tile.prototype);
```

Finally, we need to make the `ControllableTile`... controllable:
```javascript
ControllableTile.prototype.handleEvent = function(evt) {
    if (evt.type === "keypress") {
        switch (evt.key) {
            case "ArrowLeft": 
                this.x--;
                break;
            case "ArrowRight":
                this.x++;
                break;
            case "ArrowUp":
                this.y--;
                break;
            case "ArrowDown":
                this.y++;
                break;
        }

    }
};
```

You can now create a player object and associate it with a DOM element:
```javascript
const playerElement = document.getElementById("player");
const playerTile = new ControllableTile(0, 0, "player");
playerElement.addEventListener("keypress", playerTile, false);
```

Let's see the same thing done with classes.

#### As Classes

First, the `Tile` class:
```javascript
class Tile {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
    }
}
```

Note here that the constructor of a class is explicit, and that the whole thing
is inside this new `class` construct, delimited by a block (opening and closing
curly braces). We can use this class just like we used the prototype:

```javascript
const floor = new Tile(0, 0, "floor");
const storage = new Tile(2, 5, "storage");
```

Let's do the `ControllableTile` next:

```javascript
class ControllableTile extends Tile {
    constructor(x, y, type) {
        super(x, y, type);
    }

    handleEvent(evt) {
        if (evt.type === "keypress") {
            switch (evt.key) {
                case "ArrowLeft": 
                    this.x--;
                    break;
                case "ArrowRight":
                    this.x++;
                    break;
                case "ArrowUp":
                    this.y--;
                    break;
                case "ArrowDown":
                    this.y++;
                    break;
            }

        }
    }
}
```

First, note the `extends` keyword. It is analogous to the
`ControllableTile.prototype = Object.create(Tile.prototype);` line before.
Second, `super` functions in the same way as `Tile.call(...)` did before. Third,
methods are defined within the `class` construct rather than after the fact as
with prototypes.

Again, this can be used just like the prototype:
```javascript
const playerElement = document.getElementById("player");
const playerTile = new ControllableTile(0, 0, "player");
playerElement.addEventListener("keypress", playerTile, false);
```

In summary, to convert from prototypes to classes, do the following:
- Create a `class Foo {  }` block
- If you want to inherit behavior, use `class Foo extends Bar { }` instead
- rename the constructor function to `constructor` and put it inside of the
    class block
- If inheriting behavior, be sure to call `super(arg1, arg2, etc)` before any
    new properties
- remove the `Foo.prototype.` prefix from all methods and move them inside of
    the class

### Practice

You'll now practice by writing `SolidTile` and `PushableTile` yourself.

Begin by opening [practice.js](practice.js) in VS Code and reading the
comments, which include instructions on how to proceed.
