const mongoose = require('mongoose');
const Course = require('./models/Course');
require('dotenv').config();

const courses = [
  // ============================================================
  // PROGRAMMING — 10 courses
  // ============================================================
  {
    title: 'HTML Basics',
    description: 'Learn the building blocks of the web. Understand HTML structure, tags, and how to build your first webpage from scratch.',
    category: 'programming',
    isPremium: false,
    lessons: [
      {
        title: 'What is HTML?',
        content: `HTML stands for HyperText Markup Language. It is the standard language used to create and structure content on the web. Every website you have ever visited is built on HTML at its core.

HTML works by using elements to describe the structure of a page. Elements are represented by tags — keywords surrounded by angle brackets. For example, <h1> creates a heading, <p> creates a paragraph, and <div> creates a container.

A basic HTML element looks like this:
<p>Hello, World!</p>

The <p> is the opening tag, "Hello, World!" is the content, and </p> is the closing tag. Together they form one complete HTML element.

HTML is not a programming language — it does not have logic or calculations. It is a markup language whose job is purely to structure and describe content.

A simple HTML page:
<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Welcome to my website</h1>
    <p>This is my first paragraph.</p>
  </body>
</html>

The <!DOCTYPE html> tells the browser this is HTML5. The <html> tag wraps the entire page. The <head> contains metadata and the <body> contains everything visible to the user.`,
        quiz: [{ question: 'What does HTML stand for?', options: ['HyperText Markup Language', 'High Tech Modern Language', 'HyperText Modern Links', 'None of the above'], correctAnswer: 0 }],
        isPremium: false
      },
      {
        title: 'HTML Tags and Elements',
        content: `HTML elements are the building blocks of every webpage. An element has three parts: opening tag, content, and closing tag.

<tagname>Content goes here</tagname>

Common tags:
<h1>Main Heading</h1>
<h2>Subheading</h2>
<p>A paragraph of text.</p>
<strong>Bold text</strong>
<em>Italic text</em>

Self-closing tags do not wrap content:
<img src="photo.jpg" alt="A photo" />
<br />
<input type="text" />

Lists:
<ul>
  <li>Apples</li>
  <li>Bananas</li>
</ul>

<ol>
  <li>First step</li>
  <li>Second step</li>
</ol>

Containers:
<div>Block container — takes full width</div>
<span>Inline container — only as wide as content</span>

Attributes add extra information inside the opening tag:
<img src="cat.jpg" alt="A cute cat" width="300">
<a href="https://google.com" target="_blank">Visit Google</a>

The href attribute sets where a link goes. The src attribute sets the image source. The alt attribute describes an image for accessibility.`,
        quiz: [{ question: 'Which of these is a self-closing tag?', options: ['<p>', '<div>', '<img />', '<span>'], correctAnswer: 2 }],
        isPremium: false
      },
      {
        title: 'HTML Document Structure',
        content: `Every HTML document follows a standard structure. Without it, browsers may not render your page correctly.

Full structure of a proper HTML document:
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <header>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
    <main>
      <h1>Welcome</h1>
      <p>Main content here.</p>
    </main>
    <footer>
      <p>Copyright 2024</p>
    </footer>
    <script src="script.js"></script>
  </body>
</html>

Breaking it down:
- <!DOCTYPE html> — must be the very first line, tells browser you are using HTML5
- <html lang="en"> — root element, lang attribute helps screen readers
- <head> — metadata not visible on page: charset, viewport, title, CSS links
- <body> — everything visible to the user goes here
- <header> — top section, usually logo and navigation
- <nav> — navigation links
- <main> — primary content
- <footer> — bottom section with copyright and links
- <script> — put at bottom of body so HTML loads before JavaScript runs

Semantic elements like header, nav, main, and footer help screen readers and search engines understand your page structure.`,
        quiz: [{ question: 'Where do you put visible page content?', options: ['<head>', '<title>', '<body>', '<meta>'], correctAnswer: 2 }],
        isPremium: false
      },
      {
        title: 'Links and Images',
        content: `Links and images are two of the most important elements in HTML.

LINKS
Links use the anchor tag <a> with the href attribute:
<a href="https://google.com">Visit Google</a>

Open in a new tab with target="_blank":
<a href="https://google.com" target="_blank">Open in new tab</a>

Link to other pages on your own site (relative links):
<a href="/about.html">About Us</a>

Link to a section on the same page using IDs:
<a href="#section2">Jump to Section 2</a>
<h2 id="section2">Section 2</h2>

IMAGES
Images use the self-closing <img> tag:
<img src="cat.jpg" alt="A cute cat">

The alt attribute is required for accessibility — screen readers read it aloud. Always write a meaningful description.

Control size:
<img src="photo.jpg" alt="Mountain view" width="600" height="400">

Better — use CSS so it stays responsive:
<img src="photo.jpg" alt="Mountain view" style="width: 100%; max-width: 600px;">

Make an image a clickable link by wrapping it in <a>:
<a href="https://google.com">
  <img src="google-logo.png" alt="Go to Google">
</a>

Image formats:
- JPG — best for photos, smaller file size
- PNG — best for images needing transparency
- SVG — best for icons and logos, scales perfectly
- WebP — modern format, smaller than JPG/PNG`,
        quiz: [{ question: 'Which attribute sets the URL for a link?', options: ['src', 'href', 'link', 'url'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'HTML Forms',
        content: `Forms collect information from users — login forms, signup forms, search bars, contact forms.

Basic form:
<form action="/submit" method="POST">
  <label for="name">Your Name:</label>
  <input type="text" id="name" name="name" placeholder="John Doe">

  <label for="email">Email:</label>
  <input type="email" id="email" name="email">

  <button type="submit">Submit</button>
</form>

The action attribute tells the form where to send data. method="POST" is used for sensitive data like passwords. method="GET" puts data in the URL (good for search forms).

INPUT TYPES
<input type="text">        — single line text
<input type="email">       — validates email format
<input type="password">    — hides characters
<input type="number">      — only accepts numbers
<input type="checkbox">    — on/off toggle
<input type="radio">       — one choice from a group
<input type="file">        — upload a file
<input type="date">        — date picker

TEXTAREA AND SELECT
<textarea name="message" rows="5" placeholder="Write here..."></textarea>

<select name="country">
  <option value="us">United States</option>
  <option value="uk">United Kingdom</option>
</select>

RADIO BUTTONS — share the same name so only one can be selected:
<input type="radio" name="plan" value="free"> Free
<input type="radio" name="plan" value="pro"> Pro

VALIDATION ATTRIBUTES
<input type="email" required>            — must be filled
<input type="text" minlength="3">        — minimum length
<input type="number" min="1" max="100">  — number range

Always use <label> — the for attribute should match the input's id. This makes the label clickable and improves accessibility.`,
        quiz: [{ question: 'Which tag is used to create a form input field?', options: ['<field>', '<input>', '<form-item>', '<entry>'], correctAnswer: 1 }],
        isPremium: false
      }
    ]
  },
  {
    title: 'CSS Fundamentals',
    description: 'Style your webpages with CSS. Learn selectors, the box model, flexbox, and responsive design.',
    category: 'programming',
    isPremium: false,
    lessons: [
      {
        title: 'What is CSS?',
        content: `CSS stands for Cascading Style Sheets. While HTML provides structure, CSS controls how it looks — colors, fonts, spacing, layout, and animations.

THREE WAYS TO ADD CSS

1. Inline — directly on the element (avoid for large projects):
<p style="color: red; font-size: 18px;">Red text</p>

2. Internal — inside a <style> tag in <head>:
<style>
  p { color: red; font-size: 18px; }
</style>

3. External — separate .css file linked to HTML (preferred):
<link rel="stylesheet" href="styles.css">

CSS SYNTAX
selector {
  property: value;
  property: value;
}

Example:
h1 {
  color: navy;
  font-size: 36px;
  font-weight: bold;
}

p {
  color: #333333;
  font-size: 16px;
  line-height: 1.6;
}

THE CASCADE
When multiple rules target the same element, the more specific rule wins. Inline styles beat internal styles, which beat external styles. This specificity system is called the cascade.

Common color formats:
color: red;              /* named color */
color: #ff0000;          /* hex */
color: rgb(255, 0, 0);   /* rgb */
color: rgba(255, 0, 0, 0.5); /* rgb with transparency */`,
        quiz: [{ question: 'What does CSS stand for?', options: ['Computer Style Sheets', 'Cascading Style Sheets', 'Creative Style Syntax', 'Colorful Style Sheets'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'Selectors and Properties',
        content: `CSS selectors target which HTML elements to style. Mastering selectors gives you precise control over every element on your page.

BASIC SELECTORS
p { color: gray; }          /* element selector */
.highlight { background: yellow; }  /* class selector */
#header { background: navy; }       /* ID selector */
* { margin: 0; padding: 0; }        /* universal selector */

COMBINING SELECTORS
div p { color: blue; }       /* descendant — p inside div */
ul > li { list-style: none; } /* direct child only */
h1, h2, h3 { font-family: Arial; } /* multiple selectors */

PSEUDO-CLASSES
a:hover { color: red; }           /* mouse hovers */
button:focus { outline: 2px solid blue; }
li:first-child { font-weight: bold; }
li:nth-child(2) { color: green; }

COMMON PROPERTIES
/* Color */
color: red;
background-color: #f0f0f0;
opacity: 0.8;

/* Typography */
font-family: Arial, sans-serif;
font-size: 16px;
font-weight: bold;
font-style: italic;
text-align: center;
text-decoration: underline;
line-height: 1.6;
letter-spacing: 2px;

/* Sizing */
width: 300px;
height: 200px;
max-width: 1200px;
min-height: 100vh;

/* Spacing */
margin: 20px;
padding: 10px 20px;

/* Border */
border: 1px solid black;
border-radius: 8px;`,
        quiz: [{ question: 'How do you select an element by class in CSS?', options: ['#className', '.className', 'className', '*className'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'The Box Model',
        content: `Every HTML element is a rectangular box. The CSS Box Model defines the four layers of that box from inside to outside:

1. Content — the actual text or image
2. Padding — transparent space between content and border
3. Border — a line around the padding and content
4. Margin — transparent space outside the border

Example:
.card {
  width: 300px;
  padding: 20px;
  border: 2px solid #ccc;
  margin: 16px;
}

BOX SIZING
By default, width only applies to the content. So width: 300px + padding: 20px = 340px total. This is confusing.

Fix it with border-box which makes width include padding and border:
* {
  box-sizing: border-box;
}

Always add this to your CSS. It makes layout much more predictable.

MARGIN AND PADDING SHORTHAND
margin: 10px;                    /* all sides */
margin: 10px 20px;               /* top/bottom | left/right */
margin: 10px 20px 15px 5px;      /* top right bottom left */

Individual sides:
margin-top: 10px;
margin-right: 20px;
padding-left: 15px;
padding-bottom: 5px;

DISPLAY PROPERTY
display: block;       /* full width, new line (div, p, h1) */
display: inline;      /* flows with text, no width/height (span, a) */
display: inline-block; /* flows with text but accepts width/height */
display: none;        /* completely hides element */

MARGIN COLLAPSE
When two vertical margins meet, they collapse into one — the larger one wins. This only happens vertically, not horizontally.`,
        quiz: [{ question: 'Which layer is between the content and the border?', options: ['margin', 'padding', 'outline', 'spacing'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'Flexbox Layout',
        content: `Flexbox makes it easy to align and distribute elements. Add display: flex to a parent container and all direct children become flex items.

.container {
  display: flex;
}

FLEX DIRECTION
flex-direction: row;            /* default — left to right */
flex-direction: row-reverse;    /* right to left */
flex-direction: column;         /* top to bottom */
flex-direction: column-reverse; /* bottom to top */

JUSTIFY CONTENT — aligns along the main axis:
justify-content: flex-start;    /* packed at start (default) */
justify-content: flex-end;      /* packed at end */
justify-content: center;        /* centered */
justify-content: space-between; /* equal space between */
justify-content: space-around;  /* equal space around */
justify-content: space-evenly;  /* equal space everywhere */

ALIGN ITEMS — aligns along the cross axis:
align-items: stretch;     /* default — full height */
align-items: flex-start;  /* top */
align-items: flex-end;    /* bottom */
align-items: center;      /* vertically centered */

CENTERING WITH FLEXBOX:
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

FLEX WRAP — allows items to wrap to next line:
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

FLEX ITEM PROPERTIES:
.item {
  flex: 1;           /* grow to fill space equally */
  flex: 2;           /* grow twice as much */
  flex-basis: 200px; /* starting size */
  align-self: center; /* override align-items for this item */
}

PRACTICAL NAVBAR:
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 32px;
}`,
        quiz: [{ question: 'Which property makes an element a flex container?', options: ['flex: true', 'display: flex', 'layout: flex', 'position: flex'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'Responsive Design with Media Queries',
        content: `Responsive design makes your site look great on all screen sizes. Over 60% of web traffic is mobile — responsive design is essential.

VIEWPORT META TAG — always include this:
<meta name="viewport" content="width=device-width, initial-scale=1.0">

Without it, mobile browsers zoom out to show the desktop version.

MEDIA QUERIES
@media (min-width: 768px) {
  .container { padding: 24px; }
}

@media (min-width: 1024px) {
  .container { max-width: 1200px; margin: 0 auto; }
}

MOBILE FIRST — write default CSS for mobile, add media queries for larger screens:
/* Mobile default */
.grid { flex-direction: column; }

/* Tablet */
@media (min-width: 768px) {
  .grid { flex-direction: row; flex-wrap: wrap; }
}

/* Desktop */
@media (min-width: 1024px) {
  .grid-item { flex: 1 1 300px; }
}

RESPONSIVE IMAGES:
img {
  max-width: 100%;
  height: auto;
}

RESPONSIVE TYPOGRAPHY — use relative units:
body { font-size: 16px; }
h1 { font-size: 2rem; }    /* 32px */
h2 { font-size: 1.5rem; }  /* 24px */
p  { font-size: 1rem; }    /* 16px */

rem is relative to root font size. em is relative to parent. Both scale better than px.

COMMON BREAKPOINTS:
/* Small phones */
@media (max-width: 480px) { }
/* Tablets */
@media (min-width: 768px) { }
/* Laptops */
@media (min-width: 1024px) { }
/* Large desktops */
@media (min-width: 1280px) { }`,
        quiz: [{ question: 'What CSS feature is used for responsive design?', options: ['flex queries', 'media queries', 'screen queries', 'size queries'], correctAnswer: 1 }],
        isPremium: false
      }
    ]
  },
  {
    title: 'JavaScript Essentials',
    description: 'Add interactivity to your websites. Learn variables, functions, DOM manipulation, and events.',
    category: 'programming',
    isPremium: false,
    lessons: [
      {
        title: 'Introduction to JavaScript',
        content: `JavaScript is the programming language of the web. While HTML structures and CSS styles, JavaScript makes pages interactive and dynamic. It is the only language that runs natively in the browser.

JavaScript can:
- Respond to button clicks and form submissions
- Validate user input before sending to a server
- Update page content without reloading
- Fetch data from APIs and display it dynamically
- Build complete web applications (React, Vue, Angular)

ADDING JAVASCRIPT TO HTML
<!-- External file (preferred) -->
<script src="script.js"></script>

<!-- Inline -->
<script>
  alert("Hello, World!");
</script>

Put script tags at the bottom of <body> — this ensures HTML loads before JavaScript runs.

YOUR FIRST JAVASCRIPT
Open browser DevTools (F12) → Console tab and type:
console.log("Hello, World!");

console.log() prints output for debugging. You will use it constantly.

Other basics:
alert("Hello!")              // popup dialog
prompt("What is your name?") // ask for input
typeof "hello"               // check data type

COMMENTS
// Single-line comment

/* Multi-line
   comment */

JavaScript is case-sensitive: myVariable and myvariable are different things. Statements end with a semicolon (;) — good practice to include them.

JavaScript executes line by line, top to bottom. Understanding this execution order is key to writing correct code.`,
        quiz: [{ question: 'Where does JavaScript run?', options: ['Only on servers', 'In the browser', 'In databases', 'In CSS files'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'Variables and Data Types',
        content: `Variables store data. Declare them with const, let, or var.

DECLARING VARIABLES
const name = "Alice";  // cannot be reassigned
let age = 25;          // can be reassigned
// var is outdated — avoid it

Use const by default. Use let when you need to change the value later.

DATA TYPES

STRING — text in quotes:
const greeting = "Hello";
const name = 'Alice';
const message = \`Welcome, \${name}!\`; // template literal with variable

NUMBER:
const age = 25;
const price = 9.99;
const negative = -10;

BOOLEAN:
const isLoggedIn = true;
const hasError = false;

NULL — intentional empty value:
const selected = null;

UNDEFINED — declared but not assigned:
let username;
console.log(username); // undefined

ARRAY — ordered list:
const fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);    // "apple" (zero-indexed)
console.log(fruits.length); // 3
fruits.push("mango");       // add to end
fruits.pop();               // remove from end

OBJECT — key-value pairs:
const user = {
  name: "Alice",
  age: 25,
  isAdmin: false
};
console.log(user.name);    // "Alice" — dot notation
console.log(user["age"]);  // 25 — bracket notation
user.email = "a@test.com"; // add new property

TYPE CONVERSION
const num = Number("42");    // string to number: 42
const str = String(100);     // number to string: "100"
const bool = Boolean(0);     // 0 is false
const bool2 = Boolean("hi"); // non-empty string is true`,
        quiz: [{ question: 'Which keyword is used for a variable that should not change?', options: ['let', 'var', 'const', 'fixed'], correctAnswer: 2 }],
        isPremium: false
      },
      {
        title: 'Functions',
        content: `Functions are reusable blocks of code. Write once, call many times.

DECLARING FUNCTIONS
// Function declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Arrow function (modern, most common)
const greet = (name) => "Hello, " + name + "!";

// Arrow with body
const greet = (name) => {
  const message = "Hello, " + name + "!";
  return message;
};

PARAMETERS AND ARGUMENTS
function add(a, b) { return a + b; }
add(5, 3);    // returns 8
add(10, 20);  // returns 30

DEFAULT PARAMETERS
function greet(name = "World") {
  return "Hello, " + name + "!";
}
greet("Alice"); // "Hello, Alice!"
greet();        // "Hello, World!"

RETURN VALUES
The return statement sends a value back. Without it, functions return undefined.

function square(n) { return n * n; }
const result = square(5); // 25

SCOPE — variables inside a function are local:
function myFunc() {
  const localVar = "local";
  console.log(localVar); // works
}
console.log(localVar); // ERROR — does not exist here

HIGHER ORDER FUNCTIONS — functions passed as arguments:
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10]

const evens = numbers.filter(n => n % 2 === 0);
// [2, 4]

const sum = numbers.reduce((total, n) => total + n, 0);
// 15

map, filter, and reduce are three of the most powerful array methods in JavaScript.`,
        quiz: [{ question: 'What keyword sends a value back from a function?', options: ['send', 'output', 'return', 'give'], correctAnswer: 2 }],
        isPremium: false
      },
      {
        title: 'DOM Manipulation',
        content: `The DOM (Document Object Model) represents your HTML page as a tree of objects. JavaScript can read, change, add, or remove any element without reloading.

SELECTING ELEMENTS
const title = document.getElementById("main-title");
const button = document.querySelector(".btn");      // first match
const items = document.querySelectorAll("li");      // all matches

READING AND CHANGING CONTENT
const heading = document.querySelector("h1");
console.log(heading.textContent);        // read text
heading.textContent = "New Heading";     // change text
heading.innerHTML = "New <em>Heading</em>"; // with HTML tags

CHANGING STYLES
const box = document.querySelector(".box");
box.style.color = "red";
box.style.backgroundColor = "#f0f0f0";
box.style.display = "none";   // hide
box.style.display = "block";  // show

WORKING WITH CLASSES
card.classList.add("active");
card.classList.remove("hidden");
card.classList.toggle("selected");
card.classList.contains("active"); // true/false

WORKING WITH ATTRIBUTES
link.getAttribute("href");
link.setAttribute("href", "/home");
img.src = "new-image.jpg";
img.alt = "New description";

CREATING AND INSERTING ELEMENTS
const p = document.createElement("p");
p.textContent = "New paragraph";
p.classList.add("intro");
document.body.appendChild(p);

const list = document.querySelector("ul");
const item = document.createElement("li");
item.textContent = "New item";
list.prepend(item); // add to beginning

REMOVING ELEMENTS
const el = document.querySelector(".old-banner");
el.remove();`,
        quiz: [{ question: 'What does DOM stand for?', options: ['Data Object Model', 'Document Object Model', 'Dynamic Output Method', 'Document Output Mode'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'Events',
        content: `Events are actions in the browser — clicks, key presses, form submissions. JavaScript listens for events and responds with code.

ADDEVENTLISTENER
element.addEventListener(eventType, handlerFunction);

const button = document.querySelector("#myButton");
button.addEventListener("click", () => {
  console.log("Clicked!");
});

THE EVENT OBJECT
button.addEventListener("click", (event) => {
  console.log(event.type);   // "click"
  console.log(event.target); // the clicked element
});

document.addEventListener("keydown", (event) => {
  console.log(event.key);    // "Enter", "a", "ArrowUp"
});

COMMON EVENT TYPES
click, dblclick, mouseenter, mouseleave  // mouse
keydown, keyup                           // keyboard
submit, change, input, focus, blur       // forms
load, resize, scroll                     // window

PREVENT DEFAULT BEHAVIOR
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop page reload
  const email = document.querySelector("#email").value;
  console.log("Submitted:", email);
});

COMPLETE INTERACTIVE EXAMPLE:
const input = document.querySelector("#nameInput");
const button = document.querySelector("#greetBtn");
const output = document.querySelector("#output");

button.addEventListener("click", () => {
  const name = input.value.trim();
  if (name === "") {
    output.textContent = "Please enter your name.";
    output.style.color = "red";
  } else {
    output.textContent = "Hello, " + name + "!";
    output.style.color = "green";
  }
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") button.click();
});`,
        quiz: [{ question: 'Which method listens for events?', options: ['listenEvent()', 'onEvent()', 'addEventListener()', 'watchEvent()'], correctAnswer: 2 }],
        isPremium: false
      }
    ]
  },
  {
    title: 'Node.js and Express',
    description: 'Build backend servers with Node.js and Express. Learn routing, middleware, and REST API design.',
    category: 'programming',
    isPremium: false,
    lessons: [
      {
        title: 'What is Node.js?',
        content: `Node.js is a JavaScript runtime built on Chrome's V8 engine that lets you run JavaScript outside the browser — on servers, your local machine, or anywhere. Before Node.js, JavaScript was browser-only. Now you can use the same language for both frontend and backend.

WHY NODE.JS?
- JavaScript everywhere — same language front and back
- Non-blocking I/O — handles many requests simultaneously without waiting
- NPM — the world's largest package registry with over 2 million packages
- Fast — V8 compiles JavaScript to machine code
- Used by Netflix, LinkedIn, Uber, NASA

INSTALLING NODE.JS
Download from nodejs.org. After installing, verify:
node --version    // v20.x.x
npm --version     // 10.x.x

YOUR FIRST NODE PROGRAM
Create app.js:
console.log("Hello from Node.js!");

Run it:
node app.js

NODE BUILT-IN MODULES
Node includes built-in modules you can use without installing:

const fs = require('fs');
const path = require('path');
const http = require('http');

Reading a file:
const fs = require('fs');
const content = fs.readFileSync('file.txt', 'utf8');
console.log(content);

NPM — NODE PACKAGE MANAGER
Install packages:
npm install express         // install one package
npm install -D nodemon      // install dev dependency
npm install                 // install all from package.json

package.json tracks your project dependencies:
{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.0"
  }
}`,
        quiz: [{ question: 'What is Node.js?', options: ['A browser plugin', 'A JavaScript runtime for servers', 'A CSS framework', 'A database'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'Building REST APIs with Express',
        content: `Express is the most popular Node.js web framework. It simplifies building HTTP servers and REST APIs.

INSTALL AND BASIC SERVER
npm install express

const express = require('express');
const app = express();

app.use(express.json()); // parse JSON request bodies

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

HTTP METHODS AND REST
REST APIs use HTTP methods to indicate what action to take:

GET    — read data
POST   — create data
PUT    — update (replace) data
PATCH  — update (partial) data
DELETE — delete data

ROUTE EXAMPLES
// GET all users
app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// GET one user by ID
app.get('/api/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ msg: 'Not found' });
  res.json(user);
});

// POST create user
app.post('/api/users', async (req, res) => {
  const { name, email } = req.body;
  const user = new User({ name, email });
  await user.save();
  res.status(201).json(user);
});

// DELETE user
app.delete('/api/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ msg: 'Deleted' });
});

STATUS CODES
200 — OK
201 — Created
400 — Bad Request
401 — Unauthorized
403 — Forbidden
404 — Not Found
500 — Server Error

MIDDLEWARE
Middleware functions run before route handlers:
app.use(cors());          // allow cross-origin requests
app.use(express.json());  // parse JSON bodies
app.use('/api', router);  // mount router

Custom middleware:
app.use((req, res, next) => {
  console.log(\`\${req.method} \${req.path}\`);
  next(); // pass to next handler
});`,
        quiz: [{ question: 'Which HTTP method is used to create new data?', options: ['GET', 'POST', 'DELETE', 'PUT'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'Async JavaScript and Promises',
        content: `JavaScript is single-threaded but handles async operations (network requests, file reads, timers) without blocking. Understanding async is essential for backend development.

THE PROBLEM WITH SYNCHRONOUS CODE
// This blocks everything while waiting:
const data = readFileSyncFromServer(); // takes 2 seconds
console.log(data);
console.log("This waits 2 seconds"); // blocked!

CALLBACKS (OLD WAY)
fs.readFile('file.txt', 'utf8', (error, data) => {
  if (error) throw error;
  console.log(data);
});
console.log("This runs immediately");

Callbacks work but get messy with many nested async operations — "callback hell."

PROMISES
A Promise represents a value that will be available in the future. It has three states: pending, fulfilled, rejected.

const fetchUser = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Alice" }); // success
      // reject(new Error("Failed")); // failure
    }, 1000);
  });
};

fetchUser()
  .then(user => console.log(user))
  .catch(err => console.error(err));

ASYNC/AWAIT (MODERN WAY)
async/await makes async code look and behave like synchronous code:

const getUser = async (id) => {
  try {
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.error(err);
  }
};

Rules:
- async before a function makes it return a Promise
- await pauses execution until the Promise resolves
- Always wrap await in try/catch for error handling

PROMISE.ALL — run multiple async operations at the same time:
const [users, courses] = await Promise.all([
  User.find(),
  Course.find()
]);
// Both queries run simultaneously — faster than sequential`,
        quiz: [{ question: 'What does async/await do?', options: ['Makes code run faster', 'Makes async code look synchronous', 'Blocks the thread', 'Removes callbacks'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'Authentication with JWT',
        content: `Authentication verifies who a user is. JWT (JSON Web Token) is the most common authentication method for REST APIs.

HOW JWT WORKS
1. User logs in with email + password
2. Server verifies credentials
3. Server generates a JWT token signed with a secret key
4. Client stores the token (localStorage or cookie)
5. Client sends token with every protected request
6. Server verifies the token on each request

JWT STRUCTURE
A JWT has three parts separated by dots:
eyJhbGc.eyJ1c2VyS.SflKxwRJ

1. Header — algorithm used (base64 encoded)
2. Payload — data stored in token (base64 encoded)
3. Signature — verifies token hasn't been tampered with

IMPLEMENTATION WITH EXPRESS
npm install bcryptjs jsonwebtoken

// Register
app.post('/register', async (req, res) => {
  const { email, password } = req.body;

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({ email, password: hashedPassword });
  await user.save();

  // Generate token
  const token = jwt.sign(
    { userId: user._id },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );

  res.json({ token });
});

// Login
app.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

  const isMatch = await bcrypt.compare(req.body.password, user.password);
  if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
  res.json({ token });
});

// Auth middleware
const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ msg: 'No token' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Invalid token' });
  }
};

// Protected route
app.get('/profile', authMiddleware, async (req, res) => {
  const user = await User.findById(req.user.userId).select('-password');
  res.json(user);
});`,
        quiz: [{ question: 'What does JWT stand for?', options: ['JavaScript Web Transfer', 'JSON Web Token', 'Java Web Technology', 'JSON Web Transfer'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'Error Handling and Debugging',
        content: `Errors are inevitable. Good error handling makes your app reliable and your debugging faster.

TYPES OF ERRORS IN NODE.JS

Syntax errors — code won't run at all:
const x = ; // SyntaxError: Unexpected token

Runtime errors — happen while running:
const user = null;
user.name; // TypeError: Cannot read property of null

Async errors — unhandled promise rejections:
const data = await fetchSomething(); // might throw

TRY/CATCH
Always wrap async operations in try/catch:
app.get('/user/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ msg: 'Not found' });
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
});

GLOBAL ERROR HANDLER MIDDLEWARE
Add at the end of your Express app (after all routes):
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    msg: err.message || 'Internal server error'
  });
});

DEBUGGING TOOLS

console.log() — simplest debugging tool:
console.log('Value:', someVariable);
console.log('Object:', JSON.stringify(obj, null, 2));

Node.js debugger — built in:
node --inspect server.js
// Open Chrome → chrome://inspect

VS Code debugging — set breakpoints and step through code line by line in the Debug panel.

NODEMON — auto-restarts server when files change:
npm install -D nodemon
// In package.json scripts:
"dev": "nodemon server.js"
npm run dev

HTTP DEBUGGING — use Thunder Client, Postman, or curl to test API endpoints directly without a frontend.

ENVIRONMENT VARIABLES — never hardcode secrets:
require('dotenv').config();
const secret = process.env.JWT_SECRET;
const dbUrl = process.env.MONGO_URI;`,
        quiz: [{ question: 'Which statement catches errors in async code?', options: ['if/else', 'try/catch', 'switch/case', 'async/error'], correctAnswer: 1 }],
        isPremium: false
      }
    ]
  },
  {
    title: 'React Fundamentals',
    description: 'Build modern, dynamic user interfaces with React. Learn components, state, props, and hooks.',
    category: 'programming',
    isPremium: false,
    lessons: [
      {
        title: 'Introduction to React',
        content: `React is a JavaScript library for building user interfaces. Created by Facebook in 2013, it is now used by millions of developers and companies like Netflix, Airbnb, Twitter, and Meta.

WHY REACT?
Traditional web development required manually updating the DOM when data changed — slow, error-prone, and hard to scale. React solves this with:

Component-based architecture — break your UI into small, reusable pieces
Virtual DOM — React updates only what changed, not the entire page
Declarative — describe what the UI should look like, React handles the how
Huge ecosystem — thousands of compatible libraries and tools

GETTING STARTED
Create a new React app:
npx create-react-app my-app
cd my-app
npm start

Or with Vite (faster, modern):
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev

YOUR FIRST COMPONENT
React components are JavaScript functions that return JSX (HTML-like syntax):

function Hello() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>Welcome to React.</p>
    </div>
  );
}

export default Hello;

JSX looks like HTML but it is JavaScript. Rules:
- Every component must return one root element (wrap in <div> or <>)
- Use className instead of class
- Self-close tags: <img />, <input />, <br />
- JavaScript inside JSX goes in curly braces: {variable}

RENDERING A COMPONENT
// In App.js
import Hello from './Hello';

function App() {
  return (
    <div>
      <Hello />
      <Hello />
    </div>
  );
}

Each <Hello /> renders a separate instance of the component.`,
        quiz: [{ question: 'What is JSX?', options: ['A new programming language', 'JavaScript with HTML-like syntax', 'A CSS preprocessor', 'A database query language'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'Props and State',
        content: `Props and state are the two most important concepts in React.

PROPS — passing data to components
Props (properties) let you pass data from a parent component to a child:

// Parent passes props
function App() {
  return <UserCard name="Alice" age={25} isAdmin={true} />;
}

// Child receives and uses props
function UserCard({ name, age, isAdmin }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      {isAdmin && <span className="badge">Admin</span>}
    </div>
  );
}

Props are read-only — a component must never modify its own props.

STATE — data that changes over time
State is data managed inside a component. When state changes, React re-renders the component.

import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // initial value: 0

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

useState returns [currentValue, setterFunction]. Always use the setter to update state — never modify state directly.

STATE WITH OBJECTS
const [user, setUser] = useState({ name: '', email: '' });

// Update one field — spread the rest
const handleChange = (e) => {
  setUser({ ...user, [e.target.name]: e.target.value });
};

LIFTING STATE UP
When two components need the same data, lift state to their common parent:

function Parent() {
  const [value, setValue] = useState('');
  return (
    <>
      <Input value={value} onChange={setValue} />
      <Display value={value} />
    </>
  );
}`,
        quiz: [{ question: 'What hook manages component state in React?', options: ['useEffect', 'useState', 'useContext', 'useRef'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'React Hooks',
        content: `Hooks are functions that let you use React features in function components. The most important ones are useState, useEffect, and useContext.

useEFFECT — side effects and lifecycle
useEffect runs code after rendering. Use it for API calls, subscriptions, and DOM manipulation.

import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Runs after first render
    fetch('/api/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []); // Empty array = run once on mount

  if (loading) return <p>Loading...</p>;
  return (
    <ul>
      {users.map(user => <li key={user._id}>{user.name}</li>)}
    </ul>
  );
}

Dependency array controls when useEffect runs:
useEffect(() => { ... });         // every render
useEffect(() => { ... }, []);     // once on mount
useEffect(() => { ... }, [id]);   // when id changes

CLEANUP — return a function to clean up:
useEffect(() => {
  const timer = setInterval(() => tick(), 1000);
  return () => clearInterval(timer); // cleanup on unmount
}, []);

useCONTEXT — global state
Context shares data without passing props through every level:

// Create context
const ThemeContext = createContext();

// Provide it at top level
function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Layout />
    </ThemeContext.Provider>
  );
}

// Consume it anywhere in the tree
function Button() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Click</button>;
}

useREF — reference DOM elements
const inputRef = useRef(null);

<input ref={inputRef} />
<button onClick={() => inputRef.current.focus()}>Focus</button>`,
        quiz: [{ question: 'What does useEffect do?', options: ['Manages state', 'Handles side effects after rendering', 'Creates context', 'Refs DOM elements'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'React Router',
        content: `React Router lets you build single-page applications with multiple pages/routes without full page reloads.

INSTALLATION
npm install react-router-dom

BASIC SETUP — wrap your app in BrowserRouter:
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

NAVIGATION — use Link instead of <a> to avoid page reloads:
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
}

URL PARAMETERS — access with useParams:
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();
  // fetch user with this id
  return <div>User ID: {id}</div>;
}

PROGRAMMATIC NAVIGATION — use useNavigate:
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await login();
    navigate('/dashboard'); // redirect after login
  };
}

PROTECTED ROUTES — redirect if not authenticated:
function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);
  if (!user) return <Navigate to="/login" />;
  return children;
}

<Route path="/dashboard" element={
  <ProtectedRoute><Dashboard /></ProtectedRoute>
} />`,
        quiz: [{ question: 'Which component is used for navigation in React Router?', options: ['<a>', '<Navigate>', '<Link>', '<Router>'], correctAnswer: 2 }],
        isPremium: false
      },
      {
        title: 'Fetching Data and APIs',
        content: `Modern React apps fetch data from APIs. Here are the main patterns.

FETCH API
useEffect(() => {
  fetch('https://api.example.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
    .catch(err => console.error(err));
}, []);

ASYNC/AWAIT IN USEEFFECT
useEffect(() => {
  const fetchUsers = async () => {
    try {
      const res = await fetch('/api/users');
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      setError('Failed to load users');
    } finally {
      setLoading(false);
    }
  };
  fetchUsers();
}, []);

AXIOS — cleaner than fetch:
npm install axios

import axios from 'axios';

useEffect(() => {
  const load = async () => {
    try {
      const res = await axios.get('/api/users');
      setUsers(res.data); // axios automatically parses JSON
    } catch (err) {
      setError(err.response?.data?.msg || 'Error');
    }
  };
  load();
}, []);

SENDING DATA — POST, PUT, DELETE:
// Create
await axios.post('/api/users', { name, email });

// Update
await axios.put(\`/api/users/\${id}\`, { name });

// Delete
await axios.delete(\`/api/users/\${id}\`);

// With auth header
await axios.get('/api/profile', {
  headers: { Authorization: \`Bearer \${token}\` }
});

LOADING AND ERROR STATES — always handle them:
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  if (loading) return <div className="spinner">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <ul>
      {users.map(u => <li key={u._id}>{u.name}</li>)}
    </ul>
  );
}`,
        quiz: [{ question: 'Which library provides cleaner API requests than fetch?', options: ['jQuery', 'axios', 'superagent', 'request'], correctAnswer: 1 }],
        isPremium: false
      }
    ]
  },
  {
    title: 'MongoDB and Mongoose',
    description: 'Learn to use MongoDB with Mongoose to build data-driven Node.js applications.',
    category: 'programming',
    isPremium: false,
    lessons: [
      {
        title: 'Introduction to MongoDB',
        content: `MongoDB is the most popular NoSQL database for Node.js applications. It stores data as JSON-like documents instead of rows and tables, making it flexible and easy to work with in JavaScript.

WHY MONGODB?
- Documents match JavaScript objects — no conversion needed
- Flexible schema — add fields without altering a table
- Scales horizontally across many servers
- Rich query language
- MongoDB Atlas — free cloud hosting

CORE CONCEPTS

Database — contains collections (like a SQL database)
Collection — a group of documents (like a SQL table)
Document — a single record stored as BSON (like a SQL row)

A MongoDB document:
{
  "_id": ObjectId("64abc123"),
  "name": "Alice",
  "email": "alice@example.com",
  "age": 25,
  "courses": ["HTML", "CSS", "JavaScript"],
  "address": {
    "city": "New York",
    "zip": "10001"
  },
  "createdAt": ISODate("2024-01-15")
}

Notice: nested objects and arrays are stored directly in the document. No joining tables needed for simple relationships.

MONGODB ATLAS — FREE CLOUD DATABASE
1. Go to mongodb.com/cloud/atlas
2. Create a free account
3. Create a free M0 cluster
4. Get your connection string:
   mongodb+srv://username:password@cluster.mongodb.net/mydb

MONGODB COMPASS — visual GUI tool
Download MongoDB Compass to visually browse your database, run queries, and inspect documents without writing code.

BSON TYPES
MongoDB uses BSON (Binary JSON) which supports more types than JSON:
- ObjectId — unique 12-byte ID for every document
- Date — proper date objects
- NumberInt, NumberLong — integer types
- Binary — binary data`,
        quiz: [{ question: 'What is a MongoDB collection equivalent to?', options: ['A SQL database', 'A SQL table', 'A SQL row', 'A SQL column'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'Mongoose Schemas and Models',
        content: `Mongoose is an Object Document Mapper (ODM) for MongoDB in Node.js. It adds structure, validation, and convenience methods on top of MongoDB.

INSTALLATION
npm install mongoose

CONNECTING TO MONGODB
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

DEFINING A SCHEMA
A schema defines the structure of documents in a collection:

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: 2,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/\\S+@\\S+\\.\\S+/, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }],
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true // automatically adds createdAt and updatedAt
});

CREATING A MODEL
const User = mongoose.model('User', UserSchema);
module.exports = User;

The model name 'User' creates a collection called 'users' (lowercase, plural).

SCHEMA TYPES
String, Number, Boolean, Date, Buffer, ObjectId, Array, Mixed

VIRTUAL FIELDS — computed properties not stored in DB:
UserSchema.virtual('fullName').get(function() {
  return \`\${this.firstName} \${this.lastName}\`;
});`,
        quiz: [{ question: 'What does Mongoose add on top of MongoDB?', options: ['A GUI interface', 'Schema validation and structure', 'Cloud hosting', 'Automatic backups'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'CRUD Operations with Mongoose',
        content: `Mongoose provides clean methods for creating, reading, updating, and deleting documents.

CREATE
// Save a new document
const user = new User({
  name: 'Alice',
  email: 'alice@example.com',
  password: hashedPassword
});
await user.save();

// Shorthand
const user = await User.create({
  name: 'Alice',
  email: 'alice@example.com',
  password: hashedPassword
});

READ
// Find all
const users = await User.find();

// Find with filter
const admins = await User.find({ role: 'admin' });

// Find one
const user = await User.findOne({ email: 'alice@example.com' });

// Find by ID
const user = await User.findById(id);

// Select specific fields (exclude password)
const user = await User.findById(id).select('-password');

// Populate references
const user = await User.findById(id).populate('courses');

// Query operators
const users = await User.find({ age: { $gt: 18 } });      // greater than
const users = await User.find({ role: { $in: ['admin', 'mod'] } });

// Sort, limit, skip (for pagination)
const posts = await Post.find()
  .sort({ createdAt: -1 })   // newest first
  .limit(10)
  .skip(20);

UPDATE
// Find and update
const user = await User.findByIdAndUpdate(
  id,
  { name: 'New Name' },
  { new: true } // return updated document
);

// Update many
await User.updateMany({ role: 'guest' }, { role: 'user' });

DELETE
// Delete one by ID
await User.findByIdAndDelete(id);

// Delete many
await User.deleteMany({ role: 'test' });

QUERY CHAINING
const results = await User
  .find({ role: 'user' })
  .select('name email')
  .sort({ name: 1 })
  .limit(20);`,
        quiz: [{ question: 'Which method finds a document by its _id?', options: ['User.find()', 'User.findOne()', 'User.findById()', 'User.getById()'], correctAnswer: 2 }],
        isPremium: false
      },
      {
        title: 'Data Validation and Middleware',
        content: `Mongoose provides powerful validation and middleware (hooks) to keep your data clean and run logic automatically.

BUILT-IN VALIDATORS
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    minlength: [3, 'Name must be at least 3 characters'],
    maxlength: [100, 'Name cannot exceed 100 characters'],
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'Price cannot be negative'],
    max: [99999, 'Price too high']
  },
  category: {
    type: String,
    enum: {
      values: ['electronics', 'clothing', 'food'],
      message: 'Invalid category'
    }
  },
  email: {
    type: String,
    match: [/\\S+@\\S+\\.\\S+/, 'Invalid email format']
  }
});

CUSTOM VALIDATORS
age: {
  type: Number,
  validate: {
    validator: function(v) {
      return v >= 18;
    },
    message: 'Must be 18 or older'
  }
}

MONGOOSE MIDDLEWARE (HOOKS)
Middleware runs before or after certain operations.

Pre-save hook — hash password before saving:
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

Post-save hook — run after saving:
UserSchema.post('save', function(doc) {
  console.log('User saved:', doc.email);
});

Pre-find hook — automatically exclude deleted records:
UserSchema.pre(/^find/, function(next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

INSTANCE METHODS — add methods to documents:
UserSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Use it:
const isMatch = await user.comparePassword(inputPassword);

STATIC METHODS — add methods to the model:
UserSchema.statics.findByEmail = function(email) {
  return this.findOne({ email: email.toLowerCase() });
};

const user = await User.findByEmail('alice@example.com');`,
        quiz: [{ question: 'What does a Mongoose pre-save hook do?', options: ['Runs after saving', 'Runs before saving', 'Validates the schema', 'Connects to database'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'Relationships and Population',
        content: `MongoDB is not relational but you can still model relationships between documents using references and Mongoose's populate feature.

REFERENCING DOCUMENTS
Instead of embedding all data, store a reference (ObjectId):

const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',         // which model to reference
    required: true
  },
  tags: [String],
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }]
});

POPULATING REFERENCES
populate fetches the referenced documents:

// Basic populate
const post = await Post.findById(id).populate('author');
// post.author is now the full User object, not just an ID

// Select specific fields
const post = await Post.findById(id)
  .populate('author', 'name email');

// Multiple populations
const post = await Post.findById(id)
  .populate('author', 'name')
  .populate('comments');

// Nested population
const post = await Post.findById(id)
  .populate({
    path: 'comments',
    populate: { path: 'author', select: 'name' }
  });

EMBEDDING VS REFERENCING

Embed when:
- Data is always accessed together
- Data is specific to one parent (not shared)
- Dataset is small

// Embedded address (not shared, always read with user)
const UserSchema = new mongoose.Schema({
  name: String,
  address: {
    street: String,
    city: String,
    zip: String
  }
});

Reference when:
- Data is shared between documents
- Data grows independently
- You need to query the data on its own

MANY-TO-MANY with a junction collection:
const EnrollmentSchema = new mongoose.Schema({
  student: { type: ObjectId, ref: 'User' },
  course: { type: ObjectId, ref: 'Course' },
  enrolledAt: { type: Date, default: Date.now },
  completed: { type: Boolean, default: false }
});

// Get all courses a student is enrolled in
const enrollments = await Enrollment
  .find({ student: userId })
  .populate('course', 'title description');`,
        quiz: [{ question: 'What does Mongoose populate do?', options: ['Adds test data', 'Fetches referenced documents', 'Creates indexes', 'Validates schemas'], correctAnswer: 1 }],
        isPremium: false
      }
    ]
  },
  {
    title: 'Git and Version Control',
    description: 'Learn Git from scratch. Master branching, merging, pull requests, and GitHub workflows.',
    category: 'programming',
    isPremium: false,
    lessons: [
      {
        title: 'Introduction to Git',
        content: `Git is a distributed version control system. It tracks every change you make to your code so you can go back in time, collaborate with others, and manage multiple versions of your project simultaneously.

WHY GIT?
- Never lose work — every version is saved
- Collaborate — multiple developers work on the same codebase
- Branching — work on features without affecting main code
- History — see who changed what and when
- Rollback — revert to any previous state

INSTALLING GIT
Download from git-scm.com. Verify:
git --version

CONFIGURE GIT — do this once:
git config --global user.name "Your Name"
git config --global user.email "you@example.com"

CORE CONCEPTS

Repository (repo) — a folder tracked by Git. Contains your project and all its history.

Working directory — your actual files that you edit.

Staging area (index) — where you prepare changes before committing.

Commit — a snapshot of your staged changes saved permanently in history.

BASIC WORKFLOW
# Initialize a new repo
git init

# Check what's changed
git status

# Stage a file
git add filename.js

# Stage all changes
git add .

# Commit staged changes
git commit -m "Add user authentication"

# View commit history
git log
git log --oneline   # compact view

# See what changed
git diff            # unstaged changes
git diff --staged   # staged changes`,
        quiz: [{ question: 'What does git commit do?', options: ['Uploads to GitHub', 'Saves a snapshot of staged changes', 'Creates a branch', 'Merges branches'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'Branching and Merging',
        content: `Branches let you work on features or fixes in isolation without affecting the main codebase. This is how professional teams collaborate.

BRANCHES
# Create a branch
git branch feature/login

# Switch to it
git checkout feature/login

# Create and switch in one command (modern)
git switch -c feature/login

# List all branches
git branch

# List all branches including remote
git branch -a

WORKING ON A BRANCH
git switch -c feature/user-dashboard
# make your changes
git add .
git commit -m "Add user dashboard"
git commit -m "Add progress tracking"

MERGING
When your feature is done, merge it back into main:

# Switch to main
git switch main

# Merge the feature branch
git merge feature/user-dashboard

# Delete the branch after merging
git branch -d feature/user-dashboard

MERGE CONFLICTS
When two branches change the same lines, Git cannot automatically merge them:

<<<<<<< HEAD
const color = "blue";
=======
const color = "green";
>>>>>>> feature/styling

You must manually resolve the conflict — choose one version or combine them — then:
git add .
git commit -m "Resolve merge conflict"

REBASE — alternative to merge, creates cleaner history:
git switch feature/login
git rebase main      # replay your commits on top of main

GIT STASH — temporarily save changes without committing:
git stash            # save current changes
git stash pop        # restore saved changes
git stash list       # see all stashes`,
        quiz: [{ question: 'What is a Git branch?', options: ['A backup of your code', 'An isolated line of development', 'A remote repository', 'A merge conflict'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'GitHub and Remote Repositories',
        content: `GitHub is a cloud platform for hosting Git repositories. It adds collaboration features: pull requests, code review, issues, and CI/CD.

CONNECTING TO GITHUB
# Add a remote repository
git remote add origin https://github.com/username/repo.git

# Push your code to GitHub
git push -u origin main
# -u sets the upstream, so next time just: git push

# Pull latest changes
git pull

CLONING A REPOSITORY
git clone https://github.com/username/repo.git
cd repo

GITHUB WORKFLOW FOR TEAMS

1. Create a branch for your feature
git switch -c feature/search-bar

2. Make commits
git add .
git commit -m "Add search bar component"

3. Push branch to GitHub
git push origin feature/search-bar

4. Open a Pull Request (PR) on GitHub
- Compare your branch to main
- Write a description of what you changed
- Request a code review from teammates

5. Code review and discussion
- Reviewers leave comments
- You make changes and push more commits
- PR updates automatically

6. Merge the PR
- After approval, merge into main
- Delete the branch

GITIGNORE
The .gitignore file tells Git which files to never track:

node_modules/
.env
.DS_Store
dist/
*.log

Create it before your first commit. Never commit node_modules (hundreds of MB) or .env (contains secrets).

USEFUL GITHUB FEATURES
Issues — track bugs and feature requests
Projects — Kanban board for project management
Actions — automated CI/CD pipelines
Pages — free static site hosting`,
        quiz: [{ question: 'What is a Pull Request?', options: ['Downloading code from GitHub', 'Proposing changes for review before merging', 'Pulling the latest commits', 'Deleting a branch'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'Git Best Practices',
        content: `Professional developers follow conventions that make Git history readable and collaboration smooth.

COMMIT MESSAGE CONVENTIONS
Bad commit messages:
git commit -m "fix"
git commit -m "changes"
git commit -m "stuff"

Good commit messages (Conventional Commits format):
feat: add user authentication
fix: resolve login redirect bug
docs: update README with setup instructions
style: format code with prettier
refactor: extract auth logic to middleware
test: add unit tests for User model
chore: update dependencies

Format: type: short description (under 72 chars)

ATOMIC COMMITS
Each commit should do one thing. Do not bundle unrelated changes:
# Bad
git commit -m "fix bug, add feature, update styles"

# Good — separate commits for each change
git commit -m "fix: resolve null user redirect on login"
git commit -m "feat: add dark mode toggle"

BRANCH NAMING CONVENTIONS
feature/user-authentication
feature/search-bar
fix/login-redirect-bug
hotfix/critical-security-patch
docs/update-api-documentation
refactor/extract-auth-middleware

GIT ALIASES — shortcuts for common commands:
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.lg "log --oneline --graph --all"

UNDOING MISTAKES
# Undo last commit but keep changes staged
git reset --soft HEAD~1

# Undo last commit and unstage changes
git reset HEAD~1

# Undo last commit and discard changes (dangerous!)
git reset --hard HEAD~1

# Revert a commit (creates a new commit that undoes it — safer)
git revert abc1234

# Unstage a file
git restore --staged filename.js

# Discard changes in working directory
git restore filename.js

VIEWING HISTORY
git log --oneline --graph --all
git log --author="Alice"
git log --since="2024-01-01"
git show abc1234   # show details of a specific commit`,
        quiz: [{ question: 'What makes a good commit message?', options: ['Single word like "fix"', 'Descriptive, type-prefixed message under 72 chars', 'Long paragraph explaining everything', 'The date and time'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'CI/CD with GitHub Actions',
        content: `CI/CD (Continuous Integration / Continuous Deployment) automates testing and deployment every time you push code. GitHub Actions is a free, powerful CI/CD platform built into GitHub.

WHY CI/CD?
- Catch bugs before they reach production
- Automate repetitive tasks (tests, builds, deployments)
- Deploy faster and more reliably
- Every team member's code is automatically tested

GITHUB ACTIONS BASICS
Create .github/workflows/ci.yml in your repo:

name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test

      - name: Run linter
        run: npm run lint

Every push to main or pull request will now automatically run your tests.

DEPLOYING TO PRODUCTION
Example deploying a Node.js app to a server:

deploy:
  needs: test    # only deploy if tests pass
  runs-on: ubuntu-latest
  if: github.ref == 'refs/heads/main'

  steps:
    - uses: actions/checkout@v3

    - name: Deploy to server
      uses: appleboy/ssh-action@master
      with:
        script: |
          cd /app
          git pull
          npm install
          pm2 restart app

SECRETS — store sensitive values in GitHub repo settings:
Settings → Secrets and variables → Actions → New secret


COMMON CI/CD TOOLS
GitHub Actions — built into GitHub, free tier generous
Vercel — zero-config frontend deployments
Railway — backend deployments
Netlify — static site deployments`,
        quiz: [{ question: 'What does CI stand for in CI/CD?', options: ['Code Integration', 'Continuous Integration', 'Compiled Interface', 'Continuous Infrastructure'], correctAnswer: 1 }],
        isPremium: false
      }
    ]
  },
  {
    title: 'TypeScript Fundamentals',
    description: 'Add static typing to JavaScript. Learn types, interfaces, generics, and TypeScript with React.',
    category: 'programming',
    isPremium: false,
    lessons: [
      {
        title: 'Introduction to TypeScript',
        content: `TypeScript is a superset of JavaScript that adds static type checking. It compiles to plain JavaScript and runs anywhere JavaScript runs. TypeScript was created by Microsoft and is now used by the majority of large JavaScript projects.

WHY TYPESCRIPT?
- Catch errors at compile time, not runtime
- Better IDE support — autocomplete, refactoring, go to definition
- Self-documenting code — types explain what data looks like
- Scales better in large teams
- Used by Angular, NestJS, and increasingly React projects

INSTALLING TYPESCRIPT
npm install -g typescript
tsc --version    // TypeScript compiler

// Or in a project:
npm install -D typescript
npx tsc --init   // create tsconfig.json

COMPILING
tsc app.ts       // compiles to app.js
tsc --watch      // watch mode, recompile on change

BASIC TYPES
let name: string = "Alice";
let age: number = 25;
let isAdmin: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;

// Arrays
let fruits: string[] = ["apple", "banana"];
let scores: number[] = [95, 87, 92];
let mixed: (string | number)[] = ["hello", 42];

// Tuple — fixed-length array with specific types
let coordinates: [number, number] = [40.7128, -74.0060];
let entry: [string, number] = ["Alice", 25];

// Any — opt out of type checking (use sparingly)
let anything: any = "hello";
anything = 42;   // allowed

// Unknown — safer than any
let input: unknown = getUserInput();
if (typeof input === "string") {
  console.log(input.toUpperCase()); // safe
}

TYPE INFERENCE
TypeScript often infers types automatically:
const name = "Alice";      // TypeScript knows this is string
const age = 25;            // TypeScript knows this is number
const isAdmin = true;      // TypeScript knows this is boolean`,
        quiz: [{ question: 'What is TypeScript?', options: ['A new programming language replacing JavaScript', 'JavaScript with static type checking', 'A JavaScript framework', 'A CSS preprocessor'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'Interfaces and Types',
        content: `Interfaces and type aliases let you define the shape of complex data structures.

INTERFACES
interface User {
  id: number;
  name: string;
  email: string;
  age?: number;          // optional property
  readonly createdAt: Date; // cannot be changed after creation
}

const user: User = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  createdAt: new Date()
};

// Function parameter typing
function sendEmail(user: User, message: string): void {
  console.log(\`Sending to \${user.email}: \${message}\`);
}

EXTENDING INTERFACES
interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
  bark(): void;
}

const dog: Dog = {
  name: "Rex",
  age: 3,
  breed: "Labrador",
  bark: () => console.log("Woof!")
};

TYPE ALIASES
type Point = { x: number; y: number };
type ID = string | number;
type Status = "active" | "inactive" | "pending";

// Union types — can be one of several types
type Result = string | number | boolean;
let value: Result = "hello";
value = 42;    // also valid

// Intersection types — combine multiple types
type Admin = User & { permissions: string[] };

INTERFACE VS TYPE
Both work similarly. Key differences:
- Interfaces can be extended and implemented by classes
- Type aliases can represent union types and primitives
- Interfaces can be merged (declaration merging)
- Prefer interfaces for objects, types for unions/primitives

FUNCTION TYPES
type Callback = (error: Error | null, data: string) => void;

interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}

const calc: Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
};`,
        quiz: [{ question: 'What does the ? symbol mean on an interface property?', options: ['Required', 'Optional', 'Read-only', 'Private'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'Generics',
        content: `Generics let you write reusable code that works with different types while still being type-safe.

THE PROBLEM WITHOUT GENERICS
// Without generics — you lose type safety
function identity(value: any): any {
  return value;
}

const result = identity("hello");
result.toUpperCase(); // works but TypeScript can't verify this

WITH GENERICS
// T is a type parameter — a placeholder for the actual type
function identity<T>(value: T): T {
  return value;
}

const str = identity<string>("hello");   // T = string
const num = identity<number>(42);        // T = number
// TypeScript can infer: identity("hello") also works

GENERIC FUNCTIONS
function firstItem<T>(array: T[]): T | undefined {
  return array[0];
}

const first = firstItem([1, 2, 3]);    // number | undefined
const firstStr = firstItem(["a","b"]); // string | undefined

// Multiple type parameters
function pair<K, V>(key: K, value: V): [K, V] {
  return [key, value];
}
const p = pair("name", "Alice"); // [string, string]
const p2 = pair(1, true);        // [number, boolean]

GENERIC INTERFACES
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

interface User { name: string; email: string; }
interface Post { title: string; content: string; }

const userResponse: ApiResponse<User> = {
  data: { name: "Alice", email: "a@test.com" },
  status: 200,
  message: "OK"
};

const postResponse: ApiResponse<Post[]> = {
  data: [{ title: "Hello", content: "World" }],
  status: 200,
  message: "OK"
};

GENERIC CONSTRAINTS
// T must have a length property
function longest<T extends { length: number }>(a: T, b: T): T {
  return a.length >= b.length ? a : b;
}

longest("hello", "hi");        // works — strings have length
longest([1, 2], [1, 2, 3]);    // works — arrays have length
longest(10, 20);                // ERROR — numbers have no length

BUILT-IN GENERIC TYPES
Promise<T>        — async operation returning T
Array<T>          — same as T[]
Record<K, V>      — object with keys K and values V
Partial<T>        — all properties optional
Required<T>       — all properties required
Readonly<T>       — all properties read-only
Pick<T, K>        — pick subset of properties`,
        quiz: [{ question: 'What are generics used for?', options: ['Styling components', 'Writing reusable type-safe code', 'Connecting to databases', 'Handling errors'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'TypeScript with React',
        content: `TypeScript and React work extremely well together. TypeScript catches component errors that plain JavaScript misses entirely.

SETUP
npx create-react-app my-app --template typescript
// or with Vite:
npm create vite@latest my-app -- --template react-ts

FILES USE .tsx (JSX + TypeScript) or .ts (no JSX)

TYPING PROPS
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "danger";
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  variant = "primary"
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={\`btn btn-\${variant}\`}
    >
      {label}
    </button>
  );
};

TYPING STATE
const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<User | null>(null);
const [items, setItems] = useState<string[]>([]);

interface FormState {
  name: string;
  email: string;
  message: string;
}
const [form, setForm] = useState<FormState>({
  name: '', email: '', message: ''
});

TYPING EVENTS
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};

const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log(e.currentTarget.id);
};

TYPING USEREF
const inputRef = useRef<HTMLInputElement>(null);
inputRef.current?.focus(); // optional chaining because could be null

TYPING USECONTEXT
interface AuthContextType {
  user: User | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be inside AuthProvider');
  return context;
}`,
        quiz: [{ question: 'What file extension is used for React TypeScript components?', options: ['.ts', '.tsx', '.jsx', '.rtx'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'Advanced TypeScript Patterns',
        content: `Advanced TypeScript features help you write more expressive and maintainable code.

ENUMS
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT"
}

function move(direction: Direction) {
  console.log(\`Moving \${direction}\`);
}
move(Direction.Up);

enum HttpStatus {
  OK = 200,
  Created = 201,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
  ServerError = 500
}

DISCRIMINATED UNIONS — type-safe state management:
type LoadingState = { status: "loading" };
type SuccessState<T> = { status: "success"; data: T };
type ErrorState = { status: "error"; message: string };

type AsyncState<T> = LoadingState | SuccessState<T> | ErrorState;

function render<T>(state: AsyncState<T>) {
  switch (state.status) {
    case "loading": return "Loading...";
    case "success": return state.data; // TypeScript knows data exists here
    case "error": return state.message; // TypeScript knows message exists here
  }
}

TYPE GUARDS
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function isUser(obj: unknown): obj is User {
  return typeof obj === "object" && obj !== null && "email" in obj;
}

MAPPED TYPES
type Optional<T> = {
  [K in keyof T]?: T[K];
};

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

CONDITIONAL TYPES
type NonNullable<T> = T extends null | undefined ? never : T;

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

UTILITY TYPES
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type PublicUser = Omit<User, "password">;
// { id, name, email } — no password

type UserPreview = Pick<User, "id" | "name">;
// { id, name } only

type UpdateUser = Partial<User>;
// all fields optional — good for PATCH requests

type CreateUser = Required<Omit<User, "id">>;
// all fields required except id`,
        quiz: [{ question: 'What is a discriminated union used for?', options: ['Combining all types', 'Type-safe state variants', 'Creating class hierarchies', 'Generic constraints'], correctAnswer: 1 }],
        isPremium: false
      }
    ]
  },
  {
    title: 'Python for Beginners',
    description: 'Learn Python from scratch. Variables, control flow, functions, and file handling.',
    category: 'programming',
    isPremium: false,
    lessons: [
      {
        title: 'Getting Started with Python',
        content: `Python is one of the most popular programming languages in the world. It is known for its clean, readable syntax and is used for web development, data science, AI, automation, and more.

WHY PYTHON?
- Beginner friendly — reads almost like English
- Versatile — web, data, AI, scripting, automation
- Huge community and library ecosystem
- In high demand — one of the most sought-after skills
- Used by Google, Instagram, NASA, Netflix, Spotify

INSTALLING PYTHON
Download from python.org. Verify:
python --version    // Python 3.12.x

Your first Python program (hello.py):
print("Hello, World!")

Run it:
python hello.py

PYTHON SYNTAX BASICS
# This is a comment

# Variables — no declaration keyword needed
name = "Alice"
age = 25
price = 9.99
is_admin = True

# Print output
print(name)
print("Hello,", name)
print(f"My name is {name} and I am {age} years old")  # f-string

# Get user input
user_name = input("Enter your name: ")
print(f"Hello, {user_name}!")

PYTHON VS JAVASCRIPT DIFFERENCES
Python uses indentation (no curly braces) for code blocks:

# Python
if age >= 18:
    print("Adult")
    print("Can vote")
print("This is outside the if block")

// JavaScript equivalent
if (age >= 18) {
    console.log("Adult");
}

Python uses True/False (capital) not true/false
Python uses None not null
Python uses and/or/not not &&/||/!`,
        quiz: [{ question: 'How do you print output in Python?', options: ['console.log()', 'echo()', 'print()', 'System.out.println()'], correctAnswer: 2 }],
        isPremium: false
      },
      {
        title: 'Data Types and Variables',
        content: `Python has several built-in data types. Understanding them is fundamental to writing Python programs.

NUMBERS
age = 25           # integer
price = 9.99       # float
big = 1_000_000    # underscore for readability

# Math operations
print(10 + 3)   # 13
print(10 - 3)   # 7
print(10 * 3)   # 30
print(10 / 3)   # 3.333... (float division)
print(10 // 3)  # 3 (integer division)
print(10 % 3)   # 1 (remainder/modulo)
print(2 ** 10)  # 1024 (power)

STRINGS
name = "Alice"
greeting = 'Hello'
multiline = """This is
a multiline
string"""

# String methods
print(name.upper())          # ALICE
print(name.lower())          # alice
print(name.replace("A","E")) # Elice
print(len(name))             # 5
print("  hello  ".strip())   # "hello"
print("hello world".split()) # ["hello", "world"]

# f-strings (most common)
print(f"Hello, {name}! You are {age} years old.")

# String slicing
text = "Hello World"
print(text[0])      # H
print(text[-1])     # d (last character)
print(text[0:5])    # Hello
print(text[6:])     # World

LISTS (like JavaScript arrays)
fruits = ["apple", "banana", "orange"]
print(fruits[0])    # apple
print(fruits[-1])   # orange (last item)
print(len(fruits))  # 3

fruits.append("mango")  # add to end
fruits.pop()             # remove last
fruits.insert(1, "grape")# insert at index
fruits.remove("banana") # remove by value
fruits.sort()            # sort alphabetically

DICTIONARIES (like JavaScript objects)
user = {
    "name": "Alice",
    "age": 25,
    "email": "alice@example.com"
}

print(user["name"])      # Alice
print(user.get("age"))   # 25
user["phone"] = "555-1234"  # add key
del user["age"]              # delete key
print(user.keys())       # dict_keys(["name", "email", "phone"])
print(user.values())

TUPLES — like lists but immutable:
coordinates = (40.7128, -74.0060)
print(coordinates[0])    # 40.7128
# coordinates[0] = 0     # ERROR — cannot modify

SETS — unique values only:
unique = {1, 2, 3, 2, 1}
print(unique)  # {1, 2, 3}`,
        quiz: [{ question: 'What Python data type stores key-value pairs?', options: ['List', 'Tuple', 'Dictionary', 'Set'], correctAnswer: 2 }],
        isPremium: false
      },
      {
        title: 'Control Flow',
        content: `Control flow determines the order code executes. Python uses if/elif/else, for loops, and while loops.

IF STATEMENTS
age = 20

if age >= 21:
    print("Can drink in the US")
elif age >= 18:
    print("Adult but cannot drink in US")
else:
    print("Minor")

# Comparison operators
# ==  equal to
# !=  not equal to
# >   greater than
# <   less than
# >=  greater than or equal to
# <=  less than or equal to

# Logical operators
if age >= 18 and age < 65:
    print("Working age adult")

if name == "Alice" or name == "Bob":
    print("Hello, friend!")

if not is_admin:
    print("Access denied")

# Ternary (one-liner if)
status = "adult" if age >= 18 else "minor"

FOR LOOPS
# Loop over a list
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(fruit)

# Loop with index
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")

# Loop over a range
for i in range(5):         # 0, 1, 2, 3, 4
    print(i)

for i in range(1, 11):     # 1 to 10
    print(i)

for i in range(0, 10, 2):  # 0, 2, 4, 6, 8
    print(i)

# Loop over dictionary
user = {"name": "Alice", "age": 25}
for key, value in user.items():
    print(f"{key}: {value}")

WHILE LOOPS
count = 0
while count < 5:
    print(count)
    count += 1

# break — exit loop early
while True:
    answer = input("Type 'quit' to exit: ")
    if answer == "quit":
        break
    print(f"You typed: {answer}")

# continue — skip to next iteration
for num in range(10):
    if num % 2 == 0:
        continue    # skip even numbers
    print(num)      # only prints odd numbers

LIST COMPREHENSIONS — concise way to create lists:
squares = [x**2 for x in range(1, 6)]
# [1, 4, 9, 16, 25]

evens = [x for x in range(20) if x % 2 == 0]
# [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]`,
        quiz: [{ question: 'What does break do in a loop?', options: ['Skips current iteration', 'Exits the loop entirely', 'Pauses execution', 'Returns a value'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'Functions',
        content: `Functions in Python are defined with the def keyword. They make code reusable and organized.

DEFINING FUNCTIONS
def greet(name):
    return f"Hello, {name}!"

message = greet("Alice")
print(message)   # Hello, Alice!

DEFAULT PARAMETERS
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Alice"))            # Hello, Alice!
print(greet("Bob", "Hi"))        # Hi, Bob!
print(greet("Charlie", "Hey"))   # Hey, Charlie!

KEYWORD ARGUMENTS
def create_user(name, email, role="user"):
    return {"name": name, "email": email, "role": role}

user = create_user(
    name="Alice",
    email="alice@test.com",
    role="admin"
)

*ARGS — variable number of arguments:
def add(*numbers):
    return sum(numbers)

print(add(1, 2))          # 3
print(add(1, 2, 3, 4, 5)) # 15

**KWARGS — variable keyword arguments:
def print_info(**info):
    for key, value in info.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=25, city="NYC")

LAMBDA FUNCTIONS — short anonymous functions:
square = lambda x: x**2
print(square(5))   # 25

# Common with sort
users = [{"name": "Bob", "age": 30}, {"name": "Alice", "age": 25}]
users.sort(key=lambda u: u["age"])

SCOPE
x = 10   # global variable

def my_func():
    y = 20   # local variable
    print(x)  # can access global
    print(y)  # local is fine

my_func()
# print(y)  # ERROR — y doesn't exist here

DOCSTRINGS — document your functions:
def calculate_area(radius):
    """
    Calculate the area of a circle.
    
    Args:
        radius (float): The radius of the circle
    
    Returns:
        float: The area of the circle
    """
    import math
    return math.pi * radius ** 2

help(calculate_area)  # shows the docstring`,
        quiz: [{ question: 'What keyword defines a function in Python?', options: ['function', 'func', 'def', 'fn'], correctAnswer: 2 }],
        isPremium: false
      },
      {
        title: 'File Handling and Modules',
        content: `Python makes file operations simple and has a powerful module system for organizing code.

READING FILES
# Open and read entire file
with open("data.txt", "r") as file:
    content = file.read()
    print(content)

# Read line by line
with open("data.txt", "r") as file:
    for line in file:
        print(line.strip())

# Read all lines into a list
with open("data.txt", "r") as file:
    lines = file.readlines()

The with statement automatically closes the file even if an error occurs.

WRITING FILES
# Write (overwrites existing content)
with open("output.txt", "w") as file:
    file.write("Hello, World!\\n")
    file.write("Second line\\n")

# Append (adds to existing content)
with open("log.txt", "a") as file:
    file.write("New log entry\\n")

FILE MODES
"r"  — read (default)
"w"  — write (overwrites)
"a"  — append
"rb" — read binary (for images, etc.)
"wb" — write binary

WORKING WITH JSON
import json

# Write JSON
data = {"name": "Alice", "age": 25, "courses": ["Python", "HTML"]}
with open("user.json", "w") as file:
    json.dump(data, file, indent=2)

# Read JSON
with open("user.json", "r") as file:
    user = json.load(file)
    print(user["name"])  # Alice

# Convert between JSON string and Python dict
json_string = json.dumps(data)           # dict to string
parsed = json.loads('{"name": "Bob"}')   # string to dict

MODULES — importing code
# Built-in modules
import math
print(math.pi)          # 3.14159...
print(math.sqrt(16))    # 4.0
print(math.floor(3.7))  # 3

import random
print(random.randint(1, 10))     # random int 1-10
print(random.choice(["a","b","c"])) # random item

import datetime
now = datetime.datetime.now()
print(now.strftime("%Y-%m-%d %H:%M"))

# Import specific items
from math import sqrt, pi
print(sqrt(25))   # 5.0

# Import with alias
import numpy as np   # after: pip install numpy
import pandas as pd  # after: pip install pandas

CREATING YOUR OWN MODULES
# utils.py
def format_name(first, last):
    return f"{first.title()} {last.title()}"

def validate_email(email):
    return "@" in email and "." in email

# main.py
from utils import format_name, validate_email
print(format_name("alice", "smith"))  # Alice Smith`,
        quiz: [{ question: 'What does the "with" statement do when opening files?', options: ['Reads the whole file', 'Automatically closes the file after use', 'Creates the file', 'Locks the file'], correctAnswer: 1 }],
        isPremium: false
      }
    ]
  },
  {
    title: 'Data Structures and Algorithms',
    description: 'Master the fundamental data structures and algorithms used in technical interviews and real projects.',
    category: 'programming',
    isPremium: false,
    lessons: [
      {
        title: 'Big O Notation',
        content: `Big O Notation describes how an algorithm's performance scales with input size. It is the language of algorithm analysis and essential knowledge for technical interviews.

WHY BIG O MATTERS
If your algorithm takes 1ms for 100 items but 1 hour for 1 million items, you have a problem. Big O tells you how performance changes as data grows.

We always analyze the worst case scenario.

COMMON COMPLEXITIES (best to worst)

O(1) — Constant Time
Performance does not change regardless of input size.
// Array access by index
const first = arr[0];            // always 1 operation
const last = arr[arr.length-1];  // always 1 operation

// Hash table lookup
const value = map.get("key");    // always O(1)

O(log n) — Logarithmic Time
Performance grows very slowly. Doubles input → one extra operation.
Binary search — halves the search space each iteration:
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

O(n) — Linear Time
Performance grows proportionally with input size.
// Loop through all elements
for (const item of arr) { ... }    // n operations for n items

O(n log n) — Linearithmic Time
Efficient sorting algorithms: merge sort, quicksort, heapsort.
Array.sort() in JavaScript — O(n log n)

O(n²) — Quadratic Time
Nested loops over the same data. Gets very slow.
// Bubble sort — avoid for large datasets
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) { ... }
}

O(2ⁿ) — Exponential Time
Doubles with each added element. Avoid at all costs.
Naive recursive Fibonacci — O(2ⁿ)

SPACE COMPLEXITY
Also analyze memory usage:
// O(1) space — only stores a few variables
function sum(arr) {
  let total = 0;          // 1 variable
  for (const n of arr) total += n;
  return total;
}

// O(n) space — stores a copy of input
function doubled(arr) {
  return arr.map(n => n * 2); // new array same size as input
}`,
        quiz: [{ question: 'What is the Big O of accessing an array element by index?', options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'], correctAnswer: 2 }],
        isPremium: false
      },
      {
        title: 'Arrays and Strings',
        content: `Arrays and strings are the most common data structures in interviews. Master these patterns and you will solve the majority of easy/medium problems.

ARRAY BASICS
const arr = [1, 2, 3, 4, 5];

// Access — O(1)
arr[0]  // 1
arr[arr.length - 1]  // 5

// Insert at end — O(1) amortized
arr.push(6)

// Remove from end — O(1)
arr.pop()

// Insert at beginning — O(n) — shifts everything
arr.unshift(0)

// Remove from beginning — O(n) — shifts everything
arr.shift()

// Search — O(n)
arr.indexOf(3)   // 2
arr.includes(3)  // true

TWO POINTER TECHNIQUE
Used to solve many array/string problems in O(n) instead of O(n²).

// Check if array is palindrome
function isPalindrome(arr) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    if (arr[left] !== arr[right]) return false;
    left++;
    right--;
  }
  return true;
}

// Two sum in sorted array
function twoSum(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) return [left, right];
    if (sum < target) left++;
    else right--;
  }
  return [];
}

SLIDING WINDOW
Used for subarrays/substrings of a given size.

// Maximum sum of subarray of size k
function maxSubarraySum(arr, k) {
  let windowSum = 0;
  for (let i = 0; i < k; i++) windowSum += arr[i];

  let maxSum = windowSum;
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k]; // slide window
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}

HASH MAP FOR O(1) LOOKUPS
// Two sum — unsorted array
function twoSum(nums, target) {
  const seen = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) return [seen.get(complement), i];
    seen.set(nums[i], i);
  }
}

STRING MANIPULATION
const str = "Hello World";
str.split(" ")              // ["Hello", "World"]
str.toLowerCase()           // "hello world"
str.includes("World")       // true
str.startsWith("Hello")     // true
str.slice(0, 5)             // "Hello"
str.replace("World", "JS")  // "Hello JS"
[...str].reverse().join("")  // reverse a string`,
        quiz: [{ question: 'What technique uses two pointers moving toward each other?', options: ['Sliding window', 'Binary search', 'Two pointer', 'Hash map'], correctAnswer: 2 }],
        isPremium: false
      },
      {
        title: 'Linked Lists',
        content: `A linked list is a data structure where each element (node) contains data and a pointer to the next node. Unlike arrays, elements are not stored contiguously in memory.

STRUCTURE
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Add to end — O(n)
  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  // Add to beginning — O(1)
  unshift(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  // Find a node — O(n)
  find(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return current;
      current = current.next;
    }
    return null;
  }

  // Print all values
  print() {
    const values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }
}

COMPLEXITY
Access by index: O(n) — must traverse from head
Search: O(n) — must traverse
Insert at head: O(1)
Insert at tail: O(n) without tail pointer, O(1) with
Delete: O(n) to find, O(1) to remove

WHEN TO USE LINKED LISTS
- Frequent insertions/deletions at the beginning
- Don't know size in advance
- Implementing stacks and queues

COMMON INTERVIEW PROBLEMS

Reverse a linked list:
function reverse(head) {
  let prev = null;
  let current = head;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

Detect a cycle (Floyd's algorithm):
function hasCycle(head) {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}`,
        quiz: [{ question: 'What is the time complexity of inserting at the head of a linked list?', options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'], correctAnswer: 3 }],
        isPremium: false
      },
      {
        title: 'Stacks and Queues',
        content: `Stacks and queues are abstract data types used throughout computing.

STACK — Last In, First Out (LIFO)
Like a stack of plates — you add and remove from the top.

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();   // 3
stack.peek();  // 2

REAL USES OF STACKS
- Browser back/forward history
- Undo/redo in text editors
- Function call stack in JavaScript
- Parsing expressions and parentheses

CLASSIC STACK PROBLEM — Valid parentheses:
function isValid(s) {
  const stack = [];
  const map = { ')': '(', '}': '{', ']': '[' };

  for (const char of s) {
    if ('({['.includes(char)) {
      stack.push(char);
    } else {
      if (stack.pop() !== map[char]) return false;
    }
  }
  return stack.length === 0;
}

isValid("()[]{}");  // true
isValid("(]");      // false

QUEUE — First In, First Out (FIFO)
Like a line at a store — first person in is first served.

class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(item) {
    this.items[this.tail] = item;
    this.tail++;
  }

  dequeue() {
    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }

  peek() {
    return this.items[this.head];
  }

  isEmpty() {
    return this.head === this.tail;
  }
}

REAL USES OF QUEUES
- Task scheduling (print queue, CPU scheduling)
- Breadth-first search in graphs/trees
- Message queues (Redis, RabbitMQ)
- Handling async requests`,
        quiz: [{ question: 'What ordering does a Stack use?', options: ['First In First Out', 'Last In First Out', 'Random order', 'Sorted order'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'Recursion and Sorting',
        content: `Recursion and sorting algorithms are fundamental CS concepts that appear constantly in interviews.

RECURSION
A function that calls itself to solve smaller versions of the same problem. Every recursive function needs a base case to stop.

// Factorial
function factorial(n) {
  if (n <= 1) return 1;        // base case
  return n * factorial(n - 1); // recursive case
}
factorial(5); // 5 * 4 * 3 * 2 * 1 = 120

// Fibonacci
function fib(n) {
  if (n <= 1) return n;           // base cases: fib(0)=0, fib(1)=1
  return fib(n - 1) + fib(n - 2);
}
// Problem: O(2ⁿ) — exponential!

// Fibonacci with memoization — O(n)
function fib(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fib(n-1, memo) + fib(n-2, memo);
  return memo[n];
}

SORTING ALGORITHMS

Bubble Sort — O(n²) — simple but slow:
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]]; // swap
      }
    }
  }
  return arr;
}

Merge Sort — O(n log n) — divide and conquer:
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) result.push(left[i++]);
    else result.push(right[j++]);
  }

  return [...result, ...left.slice(i), ...right.slice(j)];
}

Binary Search — O(log n) — search sorted array:
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1; // not found
}

SORTING COMPARISON
Algorithm    | Best  | Average | Worst  | Space
Bubble Sort  | O(n)  | O(n²)   | O(n²)  | O(1)
Merge Sort   | O(n log n) | O(n log n) | O(n log n) | O(n)
Quick Sort   | O(n log n) | O(n log n) | O(n²) | O(log n)
Array.sort() | O(n log n) | O(n log n) | O(n log n) | O(log n)`,
        quiz: [{ question: 'What is required in every recursive function to prevent infinite loops?', options: ['A loop', 'A base case', 'A return type', 'A parameter'], correctAnswer: 1 }],
        isPremium: false
      }
    ]
  },

  // ============================================================
  // CLOUD — 7 courses
  // ============================================================
  {
    title: 'Introduction to Cloud Computing',
    description: 'Understand the fundamentals of cloud computing, service models, and major cloud providers.',
    category: 'cloud',
    isPremium: false,
    lessons: [
      {
        title: 'What is Cloud Computing?',
        content: `Cloud computing is the delivery of computing services — servers, storage, databases, networking, software, analytics, and intelligence — over the internet to offer faster innovation, flexible resources, and cost savings.

Before cloud computing, companies bought physical servers, set them up in offices or data centers, maintained them, and replaced them when they failed. This was expensive, slow, and required dedicated IT staff.

Cloud computing changed everything. Now you rent computing resources on demand and pay only for what you use — like paying for electricity instead of owning a power plant.

WHAT CAN YOU DO WITH THE CLOUD?

Store and access files — Google Drive, Dropbox, iCloud are cloud storage.
Run applications — Apps run on remote servers, accessible through a browser.
Host websites and APIs — AWS, Azure, and GCP let you deploy sites serving millions of users.
Process big data — Netflix analyzes viewing data from hundreds of millions of users in real time using cloud.
Machine learning — Training AI requires massive computing power available on demand.

KEY CHARACTERISTICS

On-demand self-service — provision resources instantly through a web console.
Broad network access — accessible over the internet from any device.
Resource pooling — provider serves multiple customers using same infrastructure.
Rapid elasticity — scale up in minutes when traffic spikes, scale down when it drops.
Measured service — pay for exactly what you use.

TYPES OF CLOUD DEPLOYMENT

Public cloud — resources owned by AWS/Azure/GCP, shared across organizations.
Private cloud — dedicated exclusively to one organization, highest security.
Hybrid cloud — combination of public and private, data moves between them.
Multi-cloud — using multiple providers to avoid vendor lock-in.`,
        quiz: [{ question: 'What is the main benefit of cloud computing?', options: ['Faster internet', 'Scalability and cost savings', 'Better graphics', 'More storage on your device'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'IaaS, PaaS, and SaaS',
        content: `Cloud services divide into three models. Think of it like pizza:

Make from scratch (on-premises) → buy frozen and cook yourself (IaaS) → delivery (PaaS) → restaurant (SaaS).

IAAS — INFRASTRUCTURE AS A SERVICE
You get: raw servers, storage, networking.
You manage: OS, middleware, runtime, apps, data.
They manage: physical hardware.

Examples: AWS EC2, Google Compute Engine, Azure VMs, DigitalOcean
Use case: Full control over server environment. Install Ubuntu, configure Nginx, deploy Node.js app.

PAAS — PLATFORM AS A SERVICE
You get: a platform to build and run apps.
You manage: your applications and data.
They manage: everything else including servers, OS, runtime.

Examples: Heroku, Railway, Render, Google App Engine
Use case: Push code with git push heroku main. Heroku handles provisioning, Node.js installation, and running the app.

SAAS — SOFTWARE AS A SERVICE
You get: complete ready-to-use software.
You manage: your data and how you use it.
They manage: everything.

Examples: Gmail, Slack, Zoom, GitHub, Salesforce, Dropbox
Use case: Company uses Slack for communication. No server to manage, no updates to handle.

COMPARISON
Feature          | IaaS      | PaaS       | SaaS
Control          | High      | Medium     | Low
Flexibility      | High      | Medium     | Low
Ease of use      | Complex   | Moderate   | Easy
Maintenance      | You manage| Shared     | Provider manages
Best for         | DevOps    | Developers | End users
Example          | EC2       | Heroku     | Gmail`,
        quiz: [{ question: 'Gmail is an example of which cloud model?', options: ['IaaS', 'PaaS', 'SaaS', 'DaaS'], correctAnswer: 2 }],
        isPremium: false
      },
      {
        title: 'AWS Core Services',
        content: `Amazon Web Services (AWS) is the largest cloud provider with over 200 services. These are the core services every developer should know.

COMPUTE

EC2 (Elastic Compute Cloud) — virtual servers in the cloud.
- Choose OS, CPU, RAM, storage
- Pay by the hour or second
- Common instance types: t3.micro (free tier), t3.medium, m5.large

Lambda — serverless functions. Run code without managing servers.
- Pay only when code runs
- Scales automatically to zero
- Great for APIs, scheduled jobs, event processing

const handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from Lambda!" })
  };
};

STORAGE

S3 (Simple Storage Service) — object storage for files.
- Store images, videos, documents, backups
- 99.999999999% durability
- Host static websites
- Used by Netflix, Airbnb, NASA

EBS (Elastic Block Store) — hard drives for EC2 instances.
EFS (Elastic File System) — shared file system for multiple instances.

DATABASES

RDS — managed relational databases. Supports MySQL, PostgreSQL, MariaDB.
DynamoDB — managed NoSQL, millisecond latency, infinite scale.
ElastiCache — managed Redis/Memcached for caching.

NETWORKING

VPC (Virtual Private Cloud) — private network for your resources.
Route 53 — DNS service, domain registration.
CloudFront — CDN, delivers content from servers closest to users.
Load Balancer — distributes traffic across multiple servers.

DEVELOPER TOOLS

CloudFormation — infrastructure as code (YAML/JSON).
CodePipeline — CI/CD pipeline.
ECR — Docker container registry.
ECS/EKS — run Docker containers and Kubernetes.

FREE TIER
AWS offers 12 months free including:
- 750 hours/month EC2 t2.micro
- 5GB S3 storage
- 750 hours/month RDS`,
        quiz: [{ question: 'Which AWS service is used for serverless functions?', options: ['EC2', 'S3', 'Lambda', 'RDS'], correctAnswer: 2 }],
        isPremium: false
      },
      {
        title: 'Cloud Security and IAM',
        content: `Security is the most critical aspect of cloud computing. The Shared Responsibility Model defines what you secure vs what the provider secures.

THE SHARED RESPONSIBILITY MODEL

Provider secures:
- Physical data centers
- Hardware (servers, networking)
- Hypervisor and virtualization layer

You secure:
- Your data
- Your applications
- Identity and access management
- Network configuration
- OS patches (for IaaS)

IDENTITY AND ACCESS MANAGEMENT (IAM)

IAM controls who can access your cloud resources and what they can do.

Users — individual accounts for people or services.
Groups — collections of users with the same permissions.
Roles — sets of permissions assigned to users or services.
Policies — JSON documents defining allowed/denied actions.

{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": ["s3:GetObject", "s3:PutObject"],
    "Resource": "arn:aws:s3:::my-bucket/*"
  }]
}

PRINCIPLE OF LEAST PRIVILEGE
Always give the minimum permissions needed. If a service only reads S3, do not give it write or delete access. If credentials are compromised, damage is limited.

ENCRYPTION

At rest — encrypt stored data. Most cloud services do this automatically.
In transit — always use HTTPS/TLS for data in motion.
Key management — AWS KMS, Azure Key Vault manage encryption keys.

NETWORK SECURITY

VPC — private, isolated network. Resources not accessible from internet unless explicitly allowed.
Security Groups — virtual firewalls. Only open necessary ports.
Never expose databases directly to the internet — put them in private subnets.

CRITICAL SECURITY RULES
1. Never commit credentials or .env files to GitHub
2. Never use root account for daily operations
3. Enable MFA on all cloud accounts
4. Regularly audit and remove unused IAM permissions
5. Never open all ports in security groups (0.0.0.0/0)
6. Enable CloudTrail (AWS) to log all API activity`,
        quiz: [{ question: 'What does IAM stand for?', options: ['Internet Access Management', 'Identity and Access Management', 'Internal Admin Module', 'Integrated App Manager'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'Containers and Docker',
        content: `Containers solve the "works on my machine" problem by packaging your application with all its dependencies into a portable unit.

WHAT IS A CONTAINER?
A container is a lightweight, standalone, executable package that includes everything needed to run code: runtime, libraries, environment variables, and config files.

VM vs Container:
- VM: includes full OS (GBs), slow to start (minutes)
- Container: shares host OS kernel (MBs), starts in seconds

DOCKER BASICS
Docker is the most popular container platform.

Install Docker Desktop from docker.com.

KEY CONCEPTS
Image — read-only template for creating containers (like a class).
Container — running instance of an image (like an object).
Dockerfile — instructions for building an image.
Registry — storage for images (Docker Hub, AWS ECR).

DOCKERFILE
Create Dockerfile in your project root:

# Start from official Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of app
COPY . .

# Expose port
EXPOSE 5000

# Start command
CMD ["node", "server.js"]

DOCKER COMMANDS
# Build an image
docker build -t my-app .

# Run a container
docker run -p 5000:5000 my-app

# Run in background
docker run -d -p 5000:5000 my-app

# List running containers
docker ps

# Stop a container
docker stop container-id

# List images
docker images

# Pull from Docker Hub
docker pull node:20-alpine

DOCKER COMPOSE — run multiple containers:
version: '3'
services:
  app:
    build: .
    ports:
      - "5000:5000"
    environment:
      - MONGO_URI=mongodb://mongo:27017/mydb
    depends_on:
      - mongo

  mongo:
    image: mongo:7
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:

Run: docker-compose up`,
        quiz: [{ question: 'What does a Dockerfile define?', options: ['Network rules', 'Instructions for building an image', 'Database schema', 'Load balancing rules'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'Serverless Architecture',
        content: `Serverless does not mean no servers — it means you do not manage servers. The cloud provider handles infrastructure, scaling, and maintenance.

WHY SERVERLESS?
- No server provisioning or management
- Automatic scaling to zero (pay nothing when idle)
- Pay per request — not per hour
- Built-in high availability
- Focus on code, not infrastructure

FUNCTION AS A SERVICE (FAAS)
AWS Lambda, Google Cloud Functions, Azure Functions.

Each function:
- Does one thing
- Runs in response to an event
- Scales automatically
- Runs max 15 minutes (Lambda)

TRIGGERS — events that invoke functions:
- HTTP requests (API Gateway → Lambda)
- Database changes (DynamoDB Streams)
- File uploads (S3 Events → Lambda)
- Scheduled (CloudWatch Events / cron)
- Message queues (SQS, SNS)

AWS LAMBDA + API GATEWAY EXAMPLE

Create a REST API without a server:

// GET /users
exports.getUsers = async (event) => {
  const users = await db.scan({ TableName: 'users' }).promise();
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(users.Items)
  };
};

// POST /users
exports.createUser = async (event) => {
  const { name, email } = JSON.parse(event.body);
  await db.put({
    TableName: 'users',
    Item: { id: uuid(), name, email }
  }).promise();
  return { statusCode: 201, body: JSON.stringify({ message: 'Created' }) };
};

SERVERLESS FRAMEWORK — deploy easily:
npm install -g serverless

serverless.yml:
service: my-api
provider:
  name: aws
  runtime: nodejs20.x

functions:
  getUsers:
    handler: handler.getUsers
    events:
      - http: GET /users
  createUser:
    handler: handler.createUser
    events:
      - http: POST /users

Deploy: serverless deploy

COLD STARTS
First request after inactivity takes longer (~100-500ms). Solutions:
- Provisioned concurrency (AWS) — keep functions warm
- Use lighter runtimes (Node.js faster than Java)
- Optimize bundle size

WHEN TO USE SERVERLESS
Good for: Event-driven processing, APIs with variable traffic, scheduled jobs, microservices
Not ideal for: Long-running processes, predictable steady traffic (EC2 cheaper), real-time communication`,
        quiz: [{ question: 'What is a cold start in serverless?', options: ['Server shutdown', 'First invocation delay after inactivity', 'Database initialization', 'Container build time'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'DevOps and CI/CD in the Cloud',
        content: `DevOps combines development and operations to deliver software faster and more reliably. CI/CD is the backbone of modern software delivery.

DEVOPS PRINCIPLES
Collaboration — developers and operations work together throughout.
Automation — automate repetitive tasks: testing, building, deploying.
Continuous improvement — measure, learn, and iterate.
Infrastructure as Code — manage servers with code, not manual clicks.

CI — CONTINUOUS INTEGRATION
Every code commit automatically:
1. Triggers a build
2. Runs automated tests
3. Reports pass/fail to developers

Goal: catch bugs early, before they reach production.

CD — CONTINUOUS DELIVERY/DEPLOYMENT
Delivery — code is automatically prepared for release but needs manual approval.
Deployment — code automatically deploys to production after tests pass.

GITHUB ACTIONS + AWS DEPLOYMENT

.github/workflows/deploy.yml:
name: Deploy to AWS

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with: { node-version: '20' }
      - run: npm install
      - run: npm test

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-region: us-east-1
      - name: Deploy to Elastic Beanstalk
        run: |
          zip -r app.zip . -x "*.git*"
          aws s3 cp app.zip s3://my-deploy-bucket/app.zip
          aws elasticbeanstalk create-application-version ...
          aws elasticbeanstalk update-environment ...

INFRASTRUCTURE AS CODE (IaC)

AWS CloudFormation — define infrastructure in YAML:
Resources:
  MyBucket:
    Type: AWS::S3::Bucket
    Properties:
      BucketName: my-app-uploads

  MyDatabase:
    Type: AWS::RDS::DBInstance
    Properties:
      DBInstanceClass: db.t3.micro
      Engine: mysql

Terraform — popular multi-cloud IaC tool:
resource "aws_s3_bucket" "uploads" {
  bucket = "my-app-uploads"
}

resource "aws_instance" "web" {
  ami           = "ami-0c02fb55956c7d316"
  instance_type = "t3.micro"
}

MONITORING AND OBSERVABILITY
AWS CloudWatch — metrics, logs, alarms.
Datadog, New Relic — application performance monitoring.
PagerDuty — incident alerting.

Key metrics to monitor:
- Error rate
- Response time (p50, p95, p99)
- CPU and memory usage
- Request rate`,
        quiz: [{ question: 'What does CI stand for in CI/CD?', options: ['Code Infrastructure', 'Continuous Integration', 'Container Image', 'Cloud Instance'], correctAnswer: 1 }],
        isPremium: false
      }
    ]
  },

  // ============================================================
  // DATABASE — 10 courses
  // ============================================================
  {
    title: 'Database Fundamentals',
    description: 'Learn how databases work, SQL basics, and the difference between relational and NoSQL databases.',
    category: 'database',
    isPremium: false,
    lessons: [
      {
        title: 'What is a Database?',
        content: `A database is an organized collection of structured data that can be easily accessed, managed, and updated. Databases power virtually every application — social media feeds, bank transactions, e-commerce stores, and more.

WHY NOT JUST USE FILES?
Files fail at scale:
- Searching is slow — scan millions of rows to find one record
- Multiple users editing causes conflicts
- No enforcement of data rules
- No relationships between data
- No built-in backup or recovery

Databases solve all of these.

DBMS — DATABASE MANAGEMENT SYSTEM
Software that manages databases:
- Stores data efficiently on disk
- Retrieves data quickly using queries
- Manages concurrent users
- Ensures data integrity and consistency
- Provides backup and recovery

Popular DBMS: MySQL, PostgreSQL, MongoDB, SQLite, Oracle, Redis, SQL Server.

HOW DATA IS ORGANIZED (Relational)
Data is stored in tables with rows and columns:

users table:
| id | name    | email              | age |
|----|---------|---------------------|-----|
| 1  | Alice   | alice@example.com   | 25  |
| 2  | Bob     | bob@example.com     | 30  |
| 3  | Charlie | charlie@example.com | 22  |

Each row = one record. Each column = one field.

ACID PROPERTIES
Good databases guarantee:
Atomicity — transactions fully succeed or fully fail. No partial transfers.
Consistency — data always follows rules. Required fields cannot be empty.
Isolation — concurrent transactions do not interfere.
Durability — committed data stays committed even if system crashes.

DATABASE TYPES
Relational — tables, rows, SQL (MySQL, PostgreSQL)
Document — JSON documents (MongoDB, Firestore)
Key-Value — simple pairs (Redis, DynamoDB)
Graph — nodes and edges (Neo4j)
Column-family — wide columns (Cassandra)
Time-series — time-stamped data (InfluxDB)`,
        quiz: [{ question: 'What does DBMS stand for?', options: ['Data Build Management System', 'Database Management System', 'Dynamic Base Memory Store', 'Data Backup Management System'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'SQL Basics',
        content: `SQL (Structured Query Language) is the standard language for relational databases. It lets you create tables, insert, retrieve, update, and delete data.

CREATING TABLES
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  age INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT — Create data:
INSERT INTO users (name, email, age)
VALUES ('Alice', 'alice@example.com', 25);

SELECT — Read data:
SELECT * FROM users;                          -- all columns, all rows
SELECT name, email FROM users;               -- specific columns
SELECT * FROM users WHERE age > 25;          -- filter
SELECT * FROM users ORDER BY age ASC;        -- sort ascending
SELECT * FROM users ORDER BY name DESC;      -- sort descending
SELECT * FROM users LIMIT 10;               -- first 10 rows
SELECT * FROM users WHERE age > 20 AND age < 30;
SELECT * FROM users WHERE name LIKE 'A%';   -- starts with A
SELECT * FROM users WHERE age IN (25, 30);
SELECT COUNT(*) FROM users;                 -- count rows
SELECT AVG(age) FROM users;                 -- average

UPDATE — Modify data:
UPDATE users SET age = 26 WHERE name = 'Alice';
UPDATE users SET email = 'new@test.com', age = 31 WHERE id = 2;
-- ALWAYS use WHERE — without it you update every row!

DELETE — Remove data:
DELETE FROM users WHERE id = 3;
DELETE FROM users WHERE age < 18;
-- ALWAYS use WHERE — without it you delete every row!

AGGREGATE FUNCTIONS
SELECT COUNT(*) FROM orders;
SELECT SUM(price) FROM orders;
SELECT AVG(price) FROM orders;
SELECT MAX(price) FROM orders;
SELECT MIN(price) FROM orders;

GROUP BY — group results:
SELECT category, COUNT(*) FROM products GROUP BY category;
SELECT user_id, SUM(amount) FROM orders GROUP BY user_id;

HAVING — filter groups (like WHERE but for GROUP BY):
SELECT category, COUNT(*) as total
FROM products
GROUP BY category
HAVING total > 10;`,
        quiz: [{ question: 'Which SQL command retrieves data?', options: ['GET', 'FETCH', 'SELECT', 'FIND'], correctAnswer: 2 }],
        isPremium: false
      },
      {
        title: 'Database Relationships and JOINs',
        content: `Relationships connect data across tables. JOINs combine that data in queries.

THREE TYPES OF RELATIONSHIPS

ONE-TO-ONE — each record in A relates to exactly one in B:
users → profiles (one user, one profile)

ONE-TO-MANY — each record in A can relate to many in B:
users → orders (one user, many orders) — most common

MANY-TO-MANY — records in A relate to many in B and vice versa:
students → courses (many students per course, many courses per student)
Requires a junction table: enrollments (student_id, course_id)

FOREIGN KEYS
A foreign key references the primary key in another table:

CREATE TABLE orders (
  id INT PRIMARY KEY,
  user_id INT,
  product VARCHAR(200),
  amount DECIMAL(10,2),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

ON DELETE CASCADE — if user is deleted, all their orders are deleted too.
ON DELETE SET NULL — set foreign key to NULL instead.

JOIN TYPES

INNER JOIN — only matching rows from both tables:
SELECT users.name, orders.product
FROM users
INNER JOIN orders ON users.id = orders.user_id;

LEFT JOIN — all rows from left, matching from right (null if no match):
SELECT users.name, orders.product
FROM users
LEFT JOIN orders ON users.id = orders.user_id;
-- Shows users with NO orders too (orders columns will be NULL)

RIGHT JOIN — all rows from right, matching from left.

SELF JOIN — join a table to itself:
SELECT e.name, m.name AS manager
FROM employees e
JOIN employees m ON e.manager_id = m.id;

MULTIPLE JOINS:
SELECT users.name, orders.product, products.category
FROM users
JOIN orders ON users.id = orders.user_id
JOIN products ON orders.product_id = products.id
WHERE users.id = 1;

SUBQUERIES
SELECT name FROM users
WHERE id IN (
  SELECT user_id FROM orders WHERE amount > 100
);`,
        quiz: [{ question: 'Which JOIN returns all rows from both tables where there is a match?', options: ['LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN', 'OUTER JOIN'], correctAnswer: 2 }],
        isPremium: false
      },
      {
        title: 'Indexes and Performance',
        content: `As databases grow, query performance becomes critical. Indexes are the primary tool for keeping queries fast at scale.

WHAT IS AN INDEX?
An index is a data structure (usually a B-tree) that the database maintains alongside a table. It stores a sorted copy of column values with pointers to original rows — like a book index.

Without index: full table scan — reads every row. O(n).
With index: jumps directly to matching row. O(log n).

CREATING INDEXES
-- Basic index
CREATE INDEX idx_email ON users(email);

-- Unique index (also enforces uniqueness)
CREATE UNIQUE INDEX idx_email ON users(email);

-- Composite index (multiple columns)
CREATE INDEX idx_name_age ON users(name, age);

-- Drop an index
DROP INDEX idx_email ON users;

WHEN TO CREATE INDEXES
Index columns you filter by often:
SELECT * FROM orders WHERE user_id = 42;        -- index user_id
SELECT * FROM users WHERE email = 'x@test.com'; -- index email

Index columns you sort by:
SELECT * FROM posts ORDER BY created_at DESC;   -- index created_at

Index foreign key columns:
JOIN orders ON users.id = orders.user_id        -- index orders.user_id

THE COST OF INDEXES
Read performance: dramatically improved.
Write performance: slightly slower — every INSERT/UPDATE/DELETE must update the index.
Storage: indexes take additional disk space.

Rule: index columns read often. Be careful with tables written to very frequently.

EXPLAIN — see how a query executes:
EXPLAIN SELECT * FROM users WHERE email = 'alice@example.com';

Look for:
- "Using index" — good, fast
- "Full table scan" — bad, needs an index

QUERY OPTIMIZATION TIPS
Only select needed columns (avoid SELECT *):
SELECT id, name FROM users WHERE age > 25;

Use LIMIT for pagination:
SELECT * FROM posts ORDER BY created_at DESC LIMIT 20 OFFSET 40;

Avoid functions on indexed columns:
-- Bad (cannot use index):
WHERE YEAR(created_at) = 2024

-- Good (can use index):
WHERE created_at BETWEEN '2024-01-01' AND '2024-12-31'`,
        quiz: [{ question: 'What is the main purpose of a database index?', options: ['Store more data', 'Speed up queries', 'Encrypt data', 'Back up data'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'Transactions and ACID',
        content: `Transactions group multiple operations into a single unit that either fully succeeds or fully fails. They are essential for data integrity in critical systems like banking and e-commerce.

WHY TRANSACTIONS?
Without transactions, problems occur:
1. Transfer $100 from Alice to Bob:
   - Deduct $100 from Alice ✓
   - Power outage!
   - Add $100 to Bob ✗ — money disappeared!

With a transaction, both operations happen or neither does.

TRANSACTION SYNTAX
-- Start transaction
BEGIN;  -- or START TRANSACTION;

-- Deduct from Alice
UPDATE accounts SET balance = balance - 100 WHERE user_id = 1;

-- Add to Bob
UPDATE accounts SET balance = balance + 100 WHERE user_id = 2;

-- Commit if both succeed
COMMIT;

-- OR rollback if something went wrong
ROLLBACK;

SAVEPOINTS — partial rollback:
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
SAVEPOINT before_credit;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

-- If something went wrong with just the second operation:
ROLLBACK TO before_credit;

-- Try a different approach, then commit
COMMIT;

ACID DEEP DIVE

Atomicity — all or nothing. Transaction is an indivisible unit.

Consistency — transaction brings database from one valid state to another. No constraint violations allowed. If balance cannot be negative, transaction enforcing that is consistent.

Isolation — concurrent transactions do not see each other's intermediate states.

ISOLATION LEVELS (from least to most strict):
READ UNCOMMITTED — can see uncommitted changes from other transactions. Fastest, least safe. (Dirty reads possible)
READ COMMITTED — only see committed data. Default in PostgreSQL.
REPEATABLE READ — same query returns same results within transaction. Default in MySQL.
SERIALIZABLE — transactions execute as if one at a time. Safest, slowest.

SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

Durability — once committed, data survives crashes. Achieved through write-ahead logging (WAL).

DEADLOCKS
Occur when two transactions each wait for the other to release a lock:
Transaction A holds lock on table users, wants orders.
Transaction B holds lock on orders, wants users.

Prevention:
- Always lock resources in the same order
- Keep transactions short
- Databases detect and automatically kill one deadlock participant`,
        quiz: [{ question: 'What does COMMIT do in a transaction?', options: ['Cancels the transaction', 'Permanently saves transaction changes', 'Starts a new transaction', 'Creates a savepoint'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'NoSQL with MongoDB',
        content: `MongoDB is the most popular NoSQL database. It stores data as JSON-like documents making it natural to work with in JavaScript applications.

CORE CONCEPTS
Database → Collection → Document
(Like: Database → Table → Row in SQL)

A document:
{
  "_id": ObjectId("64abc123"),
  "name": "Alice",
  "email": "alice@example.com",
  "courses": ["HTML", "CSS", "JavaScript"],
  "address": {
    "city": "New York",
    "zip": "10001"
  },
  "enrolledAt": ISODate("2024-01-15")
}

MONGODB SHELL COMMANDS
// Switch to database
use learnorama

// Insert one
db.users.insertOne({ name: "Alice", email: "alice@test.com" })

// Insert many
db.users.insertMany([
  { name: "Bob", email: "bob@test.com" },
  { name: "Charlie", email: "charlie@test.com" }
])

// Find all
db.users.find()

// Find with filter
db.users.find({ name: "Alice" })
db.users.find({ age: { $gt: 18 } })

// Find one
db.users.findOne({ email: "alice@test.com" })

// Update one
db.users.updateOne(
  { name: "Alice" },
  { $set: { age: 26 } }
)

// Update many
db.users.updateMany({}, { $set: { active: true } })

// Delete
db.users.deleteOne({ name: "Alice" })
db.users.deleteMany({ active: false })

QUERY OPERATORS
$gt, $gte, $lt, $lte — comparison
$eq, $ne — equal, not equal
$in, $nin — in array, not in array
$and, $or, $not — logical
$exists — field exists
$regex — pattern matching

db.products.find({
  price: { $gte: 10, $lte: 50 },
  category: { $in: ["electronics", "books"] }
})

AGGREGATION PIPELINE
db.orders.aggregate([
  { $match: { status: "completed" } },
  { $group: { _id: "$userId", total: { $sum: "$amount" } } },
  { $sort: { total: -1 } },
  { $limit: 10 }
])

INDEXING IN MONGODB
db.users.createIndex({ email: 1 }, { unique: true })
db.posts.createIndex({ createdAt: -1 })`,
        quiz: [{ question: 'What is a MongoDB collection equivalent to?', options: ['A SQL database', 'A SQL table', 'A SQL column', 'A SQL row'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'Database Design',
        content: `Good database design prevents data problems, improves performance, and makes applications easier to maintain. Normalization is the process of organizing data to reduce redundancy.

NORMALIZATION

1NF — First Normal Form:
- All values in a column are atomic (no lists in a cell)
- Each row is unique

Bad (violates 1NF):
| id | name  | courses               |
|----|-------|------------------------|
| 1  | Alice | HTML, CSS, JavaScript  |

Good (1NF):
| id | name  | course     |
|----|-------|------------|
| 1  | Alice | HTML       |
| 1  | Alice | CSS        |
| 1  | Alice | JavaScript |

2NF — Second Normal Form:
- Must be in 1NF
- No partial dependencies (every non-key column depends on the whole primary key)

3NF — Third Normal Form:
- Must be in 2NF
- No transitive dependencies (non-key columns should not depend on other non-key columns)

Bad (violates 3NF):
| order_id | customer_id | customer_city |
|----------|-------------|---------------|
| 1        | 42          | New York      |

customer_city depends on customer_id, not order_id. Move it to customers table.

ER DIAGRAMS — Entity Relationship Diagrams
Visually model your database before writing code:

[User] 1---* [Order] *---1 [Product]
  |
  1
  |
  * 
[Address]

DESIGN CHECKLIST
- Each table represents one entity
- Every table has a primary key
- Foreign keys link related tables
- Commonly queried fields are indexed
- No data duplication across tables
- Names are clear and consistent (snake_case)

DENORMALIZATION — intentionally breaking normalization for performance:
Sometimes duplicating data is faster than joining tables:

// posts table with author name embedded (denormalized)
{ title: "Hello", content: "...", authorName: "Alice" }

Use when:
- Read performance is critical
- Data does not change often
- Joins are becoming bottlenecks

DATABASE NAMING CONVENTIONS
Tables: plural snake_case (users, blog_posts, order_items)
Columns: singular snake_case (user_id, created_at, first_name)
Primary key: id
Foreign keys: table_name_id (user_id, product_id)
Booleans: is_active, has_access, can_edit`,
        quiz: [{ question: 'What is the goal of database normalization?', options: ['Increase redundancy', 'Reduce redundancy and improve integrity', 'Improve query speed', 'Add more indexes'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'Redis and Caching',
        content: `Redis is an in-memory data store used for caching, session storage, message queues, and real-time features. It is extremely fast because data lives in RAM.

WHY REDIS?
Database queries can be slow (10-100ms). Redis reads take microseconds. By caching expensive database results in Redis, you dramatically reduce response times.

INSTALLING REDIS
# On Mac:
brew install redis
brew services start redis

# On Ubuntu:
sudo apt install redis-server

# Test:
redis-cli ping   # PONG

REDIS DATA TYPES

Strings — simple key-value:
SET username "alice"
GET username          # "alice"
SET counter 0
INCR counter          # 1
INCR counter          # 2

Lists — ordered collection:
RPUSH tasks "task1"
RPUSH tasks "task2"
LRANGE tasks 0 -1     # ["task1", "task2"]

Hashes — like objects:
HSET user:1 name "Alice" email "alice@test.com"
HGET user:1 name      # "Alice"
HGETALL user:1        # { name: "Alice", email: "alice@test.com" }

Sets — unique values:
SADD tags "javascript"
SADD tags "nodejs"
SADD tags "javascript"   # duplicate, ignored
SMEMBERS tags             # ["javascript", "nodejs"]

EXPIRATION — automatically delete data:
SET session:abc123 "user_data"
EXPIRE session:abc123 3600   # expires in 1 hour
TTL session:abc123           # seconds remaining

CACHING PATTERN IN NODE.JS
const redis = require('redis');
const client = redis.createClient();

app.get('/api/courses', async (req, res) => {
  const cacheKey = 'all_courses';

  // Check cache first
  const cached = await client.get(cacheKey);
  if (cached) {
    return res.json(JSON.parse(cached));
  }

  // Cache miss — fetch from database
  const courses = await Course.find();

  // Store in cache for 10 minutes
  await client.setEx(cacheKey, 600, JSON.stringify(courses));

  res.json(courses);
});

// Invalidate cache when data changes
app.post('/api/courses', async (req, res) => {
  const course = await Course.create(req.body);
  await client.del('all_courses');  // clear stale cache
  res.json(course);
});

SESSION STORAGE WITH REDIS
const session = require('express-session');
const RedisStore = require('connect-redis').default;

app.use(session({
  store: new RedisStore({ client }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 86400000 }  // 1 day
}));`,
        quiz: [{ question: 'Why is Redis so fast?', options: ['Uses SSDs', 'Stores data in RAM', 'Uses special algorithms', 'Has no indexes'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'PostgreSQL Advanced Features',
        content: `PostgreSQL is the most advanced open-source relational database. It goes far beyond basic SQL with powerful features for complex applications.

SETUP
# Install (Mac)
brew install postgresql
brew services start postgresql

# Create database
createdb myapp

# Connect
psql myapp

ADVANCED DATA TYPES
PostgreSQL supports rich data types beyond basic strings and numbers:

-- JSON/JSONB
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200),
  attributes JSONB  -- binary JSON, indexed and queryable
);

INSERT INTO products (name, attributes)
VALUES ('Laptop', '{"brand": "Dell", "ram": 16, "tags": ["computers", "work"]}');

-- Query JSON fields
SELECT name, attributes->>'brand' FROM products;
SELECT * FROM products WHERE attributes @> '{"ram": 16}';

-- Arrays
CREATE TABLE posts (
  id SERIAL,
  title TEXT,
  tags TEXT[]
);
INSERT INTO posts VALUES (1, 'Hello', ARRAY['tech', 'news']);
SELECT * FROM posts WHERE 'tech' = ANY(tags);

-- UUID
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE users (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email TEXT UNIQUE
);

FULL-TEXT SEARCH
CREATE INDEX idx_fts ON articles USING GIN(to_tsvector('english', content));

SELECT title
FROM articles
WHERE to_tsvector('english', content) @@ to_tsquery('javascript & react');

WINDOW FUNCTIONS — calculations across related rows:
-- Row number per category
SELECT name, category, price,
  ROW_NUMBER() OVER (PARTITION BY category ORDER BY price DESC) as rank
FROM products;

-- Running total
SELECT date, amount,
  SUM(amount) OVER (ORDER BY date) as running_total
FROM sales;

VIEWS — saved queries:
CREATE VIEW active_users AS
SELECT id, name, email, last_login
FROM users
WHERE last_login > NOW() - INTERVAL '30 days';

SELECT * FROM active_users;  -- use like a table

STORED PROCEDURES
CREATE OR REPLACE FUNCTION transfer_funds(
  from_id INT, to_id INT, amount DECIMAL
) RETURNS VOID AS $$
BEGIN
  UPDATE accounts SET balance = balance - amount WHERE id = from_id;
  UPDATE accounts SET balance = balance + amount WHERE id = to_id;
END;
$$ LANGUAGE plpgsql;

SELECT transfer_funds(1, 2, 100.00);

PERFORMANCE TUNING
EXPLAIN ANALYZE SELECT * FROM users WHERE email = 'alice@test.com';
-- Shows actual execution time, rows scanned, index usage

VACUUM — reclaim storage from deleted rows:
VACUUM ANALYZE users;`,
        quiz: [{ question: 'What does JSONB in PostgreSQL provide?', options: ['Compressed storage only', 'Queryable, indexed JSON data', 'Encrypted JSON', 'Remote JSON fetching'], correctAnswer: 1 }],
        isPremium: false
      },
      {
        title: 'Database Backup and Recovery',
        content: `Data is one of the most valuable assets in any application. Losing it can be catastrophic. Proper backup and recovery strategies are non-negotiable.

BACKUP TYPES

Full Backup — complete copy of the entire database. Slowest to create, fastest to restore.

Incremental Backup — only changes since last backup. Fast to create, slower to restore (need full + all incrementals).

Differential Backup — all changes since last full backup. Middle ground.

Transaction Log Backup — backs up the transaction log. Enables point-in-time recovery.

POSTGRESQL BACKUP

pg_dump — backup a single database:
# Full database backup
pg_dump myapp > backup.sql

# Compressed backup
pg_dump -Fc myapp > backup.dump

# Backup specific tables
pg_dump -t users -t orders myapp > tables.sql

# Restore
psql myapp < backup.sql
pg_restore -d myapp backup.dump

pg_dumpall — backup all databases:
pg_dumpall > all_databases.sql

MYSQL BACKUP
# Backup
mysqldump -u root -p myapp > backup.sql

# Backup all databases
mysqldump -u root -p --all-databases > all.sql

# Restore
mysql -u root -p myapp < backup.sql

MONGODB BACKUP
# Backup
mongodump --db myapp --out ./backup

# Restore
mongorestore --db myapp ./backup/myapp

AUTOMATED BACKUP SCRIPT (Linux cron):
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/backups"
DB_NAME="myapp"

pg_dump $DB_NAME > $BACKUP_DIR/backup_$DATE.sql
gzip $BACKUP_DIR/backup_$DATE.sql

# Upload to S3
aws s3 cp $BACKUP_DIR/backup_$DATE.sql.gz s3://my-backups/

# Delete local backups older than 7 days
find $BACKUP_DIR -name "*.sql.gz" -mtime +7 -delete

# Add to cron (run daily at 2 AM):
# 0 2 * * * /path/to/backup.sh

RECOVERY STRATEGIES

RTO (Recovery Time Objective) — maximum time to restore service.
RPO (Recovery Point Objective) — maximum data loss acceptable.

Point-in-time recovery — restore to any specific moment using logs.

DISASTER RECOVERY CHECKLIST
- Automate backups — never rely on manual
- Test restores regularly — untested backups are useless
- Store backups offsite (S3, different region)
- Encrypt backups (they contain sensitive data)
- Monitor backup success/failure with alerts
- Document the recovery procedure
- Keep multiple backup generations (daily for 7 days, weekly for 4 weeks)`,
        quiz: [{ question: 'What does RPO stand for in disaster recovery?', options: ['Recovery Point Objective', 'Restore Process Order', 'Redundant Point Operations', 'Recovery Protocol Output'], correctAnswer: 0 }],
        isPremium: false
      },
      {
        title: 'Database Scaling Strategies',
        content: `As your application grows, a single database server will eventually hit its limits. Scaling strategies let you handle millions of users.

VERTICAL SCALING (Scale Up)
Add more resources to the existing server: more CPU, RAM, faster SSD.
Simple — just upgrade the server.
Has limits — can only go so big. Expensive at top end.
Single point of failure.

HORIZONTAL SCALING (Scale Out)
Add more servers. Distribute load across multiple machines.
Theoretically unlimited scale.
More complex to implement.

REPLICATION

Master-Replica (Primary-Secondary):
- One primary handles all writes
- Multiple replicas handle reads
- Replicas automatically sync from primary

Benefits:
- Read queries distributed across replicas (3x, 5x, 10x read capacity)
- If primary fails, promote a replica
- Replicas for reporting queries — don't slow down production

In PostgreSQL:
# Primary server config (postgresql.conf):
wal_level = replica
max_wal_senders = 3

# Replica server:
pg_basebackup -h primary-host -D /data/postgres -P -Xs -R

In MongoDB Replica Set:
rs.initiate({
  _id: "rs0",
  members: [
    { _id: 0, host: "mongo1:27017" },
    { _id: 1, host: "mongo2:27017" },
    { _id: 2, host: "mongo3:27017" }
  ]
})

SHARDING — horizontal partitioning of data
Split data across multiple servers by a shard key:

-- User IDs 1-1000000 → Shard 1
-- User IDs 1000001-2000000 → Shard 2
-- User IDs 2000001-3000000 → Shard 3

MongoDB sharding:
sh.enableSharding("mydb")
sh.shardCollection("mydb.users", { user_id: "hashed" })

Choose shard key carefully:
- High cardinality (many unique values)
- Even distribution (no hot spots)
- Often queried — so queries go to one shard

CACHING LAYER
Add Redis between application and database:
- Cache frequent, expensive queries
- Reduce database load by 90%+
- Sub-millisecond response times

CONNECTION POOLING
Opening a new database connection is expensive (10-50ms). Connection pools maintain a set of open connections and reuse them.

// With pg (PostgreSQL Node.js client)
const pool = new Pool({
  max: 20,           // max connections
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Mongoose connection pooling
mongoose.connect(uri, {
  maxPoolSize: 10
});

READ REPLICAS WITH MONGOOSE
const readConnection = mongoose.createConnection(replicaUri);
const writeConnection = mongoose.createConnection(primaryUri);

const ReadUser = readConnection.model('User', UserSchema);
const WriteUser = writeConnection.model('User', UserSchema);

// Use ReadUser for queries, WriteUser for mutations`,
        quiz: [{ question: 'What is database replication?', options: ['Encrypting data', 'Copying data to multiple servers for redundancy', 'Compressing data', 'Indexing all columns'], correctAnswer: 1 }],
        isPremium: false
      }
    ]
  }
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
    await Course.deleteMany({});
    console.log('Cleared existing courses');
    await Course.insertMany(courses);
    console.log(`Seeded ${courses.length} courses successfully`);
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seed();
