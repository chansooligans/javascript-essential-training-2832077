# Notes

## Basics

- load a js file in html using:

  - <script src="Backpack.js"></script>
    - executes immediately when HTML loaded by browser
  - <script type="module" src="Backpack.js"></script>
    - a module context, allows import and export statements
    - also executes when HTML loaded by browser

- the `const` keyword is used to create a "block-scoped constant"
  - a const variable cannot be reassigned, redeclared
  - you can still mutate the contents e.g.

```javascript
const x = [123];
x = 13; // is not allowed
x.push(4); // is allowed and would yield [123,4]
```

## Class

Here is a sample class:

```javascript
class Backpack {
  constructor(
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen,
    dateAcquired,
    image
  ) {
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
    this.dateAcquired = dateAcquired;
    this.image = image;
  }
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
  backpackAge() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired; // elapsed time in milliseconds
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSinceAcquired;
  }
}

export default Backpack;
```

and initialization:

```javascript
const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST",
  "../assets/images/everyday.svg"
);
```

## DOM

A DOM (Document Object Model) represents the structure of a document as a tree of nodes.
It allows devs to access and manipulate th elements of a document.

```javascript
// e.g. querySelector
document.querySelector("main li:first-child");
// e.g. querySelectorAll
document.querySelectorAll("main li");

document.querySelector("main li:first_child").className;
document.querySelector("main li:first_child").classList;

document.querySelector("main li:first_child").classList.add("new-class");
document.querySelector("main li:first_child").classList.remove("new-class");
document.querySelector("main li:first_child").classList.toggle("new-class");
document
  .querySelector("main li:first_child")
  .classList.replace("packprop", "new-class");
```

Accessing attributes:

```javascript
document.querySelector("img").attributes;
document.querySelector("img").hasAttribute("src");
document.querySelector("img").getAttribute("src");
document.querySelector("img").setAttribute("alt", "A drawing of a backpack");
document.querySelector("img").removeAttribute("src");
```

Inline Style:

```javascript
document.querySelector(".site-title").style;
document.querySelector(".site-title").style.color = "rebeccapurple";
document.querySelector(".site-title").style.backgroundColor = "pink";
```

Appending / Prepending inside Object:

```javascript
const main = document.querySelector(".maincontent");
const newArticle = document.createElement("article");
main.append(newArticle);
```

## Variables and Data Types

- `var`: 
  - declares a function-scoped or globally-scoped variable 
    - if used in a function, will still be globally scoped when function is invoked
  - default type
  - multi-line is okay: `var x = 4, y = 'blue'`
  - `var x` to initialize an undefined variable
- `let`:
  - block-scoped local variable 
    - if used global, then global block scope
    - if used in function, then function block scope
- `const`:
  - block-scoped, much like variables declared using `let` keyword
  - cannot be changed through reassignment, but can be redeclared
- use `typeof` to check data types
