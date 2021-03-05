# Pre-Class Lesson 1: The Internet/Web, Our Job as Developers, and Ways to Think About It

## How The Internet Works

In this course we'll be learning how to build websites. No, not apps yet but trust that the technology used for apps is the same technology used to build website and anything you'll ever want to build in the future, is also built on the foundations we'll learn in this course.....

### What is the Internet?

The internet is a continuous connection of various computer and devices that includes your phone, computer, watch, and doorbell. More here...

### How Does it Work?

In order for these devices to talk to one another they must rely on a series of steps that detail how, when, and what data transfers look like. More here...

<!-- ! END OF VIDEO 101.1.1.1 - How to the Internet Work? -->

<!-- ? Video Numbering and Title system: CourseNumber.ModuleNumber.LessonNumber.VideoNumber -->
<!-- * VIDEO 101.2.4.3 - "CSS Selectors" === 101 Course, Module 2, Lesson 4, Video 3 - "CSS Selectors" -->

## Three Jobs of a Web Developer

At any given point of a web developer's typical work day they are doing one these three jobs:

1 - **Storing Data**
2 - **Moving & Manipulating Data**
3 - **Rendering Data**


## Ways of Thinking

The [way computers work](https://www.youtube.com/watch?v=QZwneRb-zqA) does seem like magic. more here...

### What Layer of Abstraction are We?

Now that we've know about electrons passing through our phone screen and binary representing red actions, where are we actually developing? What level of abstraction are we working in if not in electrons or binary? In this course and the entire program, we'll be building websites and web apps that depend on the pre-determined structure of a computer and the protocol we've just learned about earlier. That structure and protocol are just two of the many layers of abstracted tools that we get to use to build!

To answer the question, in web development we are working at the 10th layer of abstraction.

1st - Electrons and Transistors
2nd - DRAM memory and a [CPU](https://en.wikipedia.org/wiki/Central_processing_unit) using binary(1s & 0s)
3rd - Bits & Bytes
4th - Logic Gates - [AND, NOT, NAND, OR, XOR, ADDER](https://whatis.techtarget.com/definition/logic-gate-AND-OR-XOR-NOT-NAND-NOR-and-XNOR)
5th - Functions - small packets of instructions
6th - Operating System - computing the memory with functions
7th - Service Workers - small but massively important programs that keep your computer running smoothly
8th - Interpreters - programs used to interpret instructions from other apps into binary
9th - Browser App - an app that interprets your HTML, CSS, and JavaScript into visual elements with executable actions.
10th - HTTP, HTML, CSS, JS

IT IS MOST IMPORTANT THAT YOU REALIZE YOU DON'T NEED TO UNDERSTAND THE FIRST 9 LAYERS OF ABSTRACTION! Use this list to appreciate the work many scientists and engineers have done to create the environment we are lucky to inherit and develop within AND to know that this layers of abstraction create the fundamentals of how computers operate and communicate with one another. This means that our HTML, CSS, and JS code is just following the same foundational principals of computer science. Now all that's left to do is learn to use these abstracted tools(layers) to build website and web apps!

To learn and use these tools/abstractions doesn't require CS degrees or knowledge of bits, bytes, interpreters, or service workers. It only requires you to see this development world from two perspectives at the same time while keeping another idea in mind, Object Modeling.

<!-- ! END OF VIDEO 101.1.1.4 - Layers of Abstraction -->

### The Two Perspectives + Object Modeling

* Perspective One: Objects are how the computer keeps up with memory and interacts with the world and people around it?
* Perspective Two: We use code to organize our thoughts about how to access that memory and give instructions on what to do with that memory to both the computer and other human-beings(fellow developers).

In the next session we'll explore the following questions:

    * How do we accomplish the invisible task of seeing the memory of computers? 
    * How does code represent our programming intentions to the computer?

To do this we'll break them down in three parts: Objects, Object Modeling, Code as Communication.

<!-- ! END OF VIDEO 101.1.1.5 - Two Perspectives Overview -->

#### Part One: Objects

Computers don't have eyes or ears...yet.

#### Part Two: Object Modeling.

Object Modeling... try it!

  > Draw a large box nearly the size of a sheet of notebook paper. At the top label it `window`. Inside draw another box nearly 3/4 the size of the first box. Label this one `document`.
    > Inside the `window` box create two lists titled: "Properties" & "Methods"
    > Under the "Properties" list write down the first five properties you find at this website: [W3S Window Object](https://www.w3schools.com/jsref/obj_window.asp) *NOTICE: The 2nd property is "Console" and the 4th is "Document"* These are two objects you've already come across; the "Console" is the one you opened in your Inspect > Developer Tools earlier and typed "window". And the "Document" is the other box on your page!!
    > In the "Methods" list write the first 5 methods you see on that same website: [W3S Window Object](https://www.w3schools.com/jsref/obj_window.asp)
    > Repeat these steps for the smaller box, the "Document" object, but with this page instead: [W3S Document Object](https://www.w3schools.com/jsref/dom_obj_document.asp) *NOTE: the ones with parenthesis() following them are methods and the ones without are properties.*
  > What you see on your paper is a simple model of two objects, Window and Document, and shorts lists of each of their properties and methods. This is Object Modeling. And this is how we will talk about EVERYTHING we learn. Everything is an object with properties, methods, and events.

To continue on this Object Modeling exploration we'll need to cover some new terms: **Properties**, **Methods**, and **Events**. These three new terms are called the **members** of an object.

<!-- ! END OF VIDEO 101.1.1.7 - Object Modeling Overview -->

##### Properties

All objects have **properties**. Properties are descriptions of the object. If you were an object you would have properties that might include: `name:`, `gender:`, `height:`, `weight:`, `age:`, `DOB:`, `job:`. The same goes for our web page objects. All visible objects have `color:`, `height:`, `width:`, `z-index:`, `font-size:`, etc... Properties are things that describe what something is, what it contains, and what it looks like when rendered. You'll also see properties referred to as **attributes** and **keys** while the value that is assigned to each of them (the part after the colon and before comma) is called a **value** leading to the common expression: **key/value pairs**, i.e. `name: "Rebecca",`, `age: 33,` or `width: 500px,`

##### Methods

Most objects have **methods**. Methods are like special properties in that they don't describe the object but instead they describe actions the object can do! You might have methods like `eat()`, `sleep()`, `run()`, and `beStill()`. However, as you saw in your exercise, objects on our web pages might have methods like: `confirm()`, `clearInterval()`, `createElement()`, `execCommand()` and `open()` because they are computer object-things and not human-being things with needs like food, water, and shelter.

Methods are also called **built-in functions** because they work like functions. They're small sets of instructions that can be executed just like other functions. Now, we haven't fully covered functions yet but suffice it to say that if you just learned how to mix cocktails you would now have two new functions written into your system that are maybe called: `mixIngredients()` and `shakeVigoursly()`. So every time you need to make a cocktail for your party you would first call `mixIngredients()` then `shakeVigoursly()`. Not everyone needs or want to learn how to make cocktails but everyone needs to eat, sleep, and drink. So the good Lord gave us all built-in functions/**methods** called: `sleep()`, `eat()`, and `drink()`. In web development, the reason we have methods is because some functions need to be called regularly, by all developers for most apps and don't need to be special or customized. So the engineers of HTML created "built-in functions" that are readily available to be used by us. The "built-in" functions are **methods**.

##### Events

Most objects also have a third category of **members**: **Events**. You can think of events as interactions. Interactions that happen between objects and other objects or objects and humans. See, we can move our mouse, place our icon on an element on our screen, and click on that icon. In that single move there are three distinct events/interactions that happen: 1) `onmousemove`, `onmouseenter`, and `onmousedown`. The events are built into object so that they can be interacted with. We have event like: `lookedAt`, `smiledAt`, `handShaked`, `poked`, `hugged`, `shoved`, `greeted`. All of these are ways in which our bodies are interacted with the world around them.

In web development terms, these Events are used to "capture" an interaction and then do something because of it. For the most part all of these built-in events are attached to a "blank"; in that, they fire every time the event happens but nothing is triggered. It's up to us, the developer to create reactions and then attach them to the the events. So we might say something like: `onmouseenter="openGreetingWindow()"`. This could be equivalent to our bodies being programmed with: `smiledAt="smileBack()"`.

At this point you may be a bit confused on the difference between methods and events so for now separate them by this distinctions:
  
    * Events capture interactions with the object from the outside world, in order for us to attach instructions to be carried out when the event happens.
    * Methods are actions the the object can take to outwardly interact with the world.
    * And properties are bits information that describe the object.

While object modeling is a great way to understand how a computer interacts with the world it is not how we communicate to the computer our programming intentions. The computer, frankly doesn't know anything about this Object Modeling stuff. It just knows about objects because what we interpret as a "model" is the complete and total reality of a computer. It knows nothing else. Because of this, we have to use a language that communicates to the computer our intentions with its objects their subsequent properties, methods, and events. This language is what generally call **code**. The great thing about learning code now is that you've already built-thing with three different coding languages and you've been reading code in all of these textual examples.

<!-- ! END OF VIDEO 101.1.1.8 - Objects, Properties, Methods, and Events -->

#### Part Three: Code as Communication.

In order for us to communicate our programming needs and intentions we need a language that can be interpreted by the computer and understood by humans. This is what we call **code**. Code comes in many different names and flavors that we call languages, or **programming languages**.

We use programming languages to communicate to both humans and computers what our programming needs and intentions are. Notice earlier, we used the word "interpret" for computers and "understand" for humans. This is because, as long as your fellow developers know the syntax and semantics of the language you chose to write, they will understand what you meant. But the computer must "interpret" what you wrote because the computer doesn't actually know JavaScript from Closure or Haskell. Our computers use interpreters that convert your programming language of choice to binary before it executes the program you built.

Programming languages are similar to our human languages in that they were all created to represent and communicate our needs and intentions. It doesn't matter what language you are speaking...as long as you are speaking to someone who understands the language they will know what you're saying. This goes for computers as well. When we're building websites and web app we're talking to web browsers who know three languages: HTML, JS, and CSS. If we are building iOS apps we're talking to an operating system that understands Swift and if we're build apps for Android we're talking to a system that understands Java. All languages are built in similar ways because they all have to accomplish the same goals: store data, move data, and render data. In this way, you can feel confident that once you now how to program in JavaScript, learning to program with Python, Swift, Java, Go, or C# will come much easier!

This layer of "abstraction" is not so important for us to learn, so much, as it is helpful for us to understand that programming languages like JavaScript are just languages with nouns, verbs, sentence structure, actions, and objects that all represent to the computer our programming needs and intention of how to we would like to move, manipulate, and display the objects our computers know about.

<!-- ! END OF VIDEO 101.1.1.9 - Code as Communication -->

## In Summary: Our Three Jobs, Object Modeling & Code as Communication

Now that we've learned our three jobs as web developers are to store, move, and render data inside an invisible world with 10 levels of abstractions with a computer that see only objects with properties, methods, & events and interprets only code it recognizes we have our work cut out for us. How do we do it?

We first have to remember that our three jobs as web developers is to store data, move data, and render data. The next is to always draw out our objects on paper, whiteboard and in our mind so we don't forget that everything is an object. Third, we have to practice gratitude for the languages we get to learn and be happy that we get to create stories and books with these programming languages instead of new words for every thought. After that, we must always reference our docs. [Docs are how to learn and remember object, properties, methods, and events](https://www.w3schools.com/jsref/obj_window.asp). And lastly, we have to keep learning and trusting that we can do this!

<!-- ! END OF VIDEO 101.1.1.10 - In Summary: Our Three Jobs, Object Modeling & Code as Communication -->
<!-- SEND THEM OFF @CLAYTON -->