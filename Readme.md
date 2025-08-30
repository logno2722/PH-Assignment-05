###1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?  
Answer:  
>getElementById - It selects one element by its unique ID and use it when we know exactly which element we need.
>getElementsByClassName - It selects all elements with the same class name and returns a live collection that updates if the DOM changes.
>querySelector - It selects the first element matching any CSS selector and returns only one element, the first match found.
>querySelectorAll - Gets all elements that match a CSS selector and returns a fixed list that we can apply loops.

###2.How do you create and insert a new element into the DOM?
Answer:
By creating element we make a new HTML tag using JavaScript. It exists in memory but is not yet visible in the webpage until we want.
For example:
let newElement = document.createElement("p");
newElement.textContent = "Programming Hero";
By inserting an element we placed the created element into the actual HTML document which makes it visible on the page as part of the DOM tree.
For example:
let c = document.getElementById("container");
c.appendChild(newElement);

###3. What is Event Bubbling and how does it work?
Answer:
Event bubbling is a process in JavaScript where an event starts from the target (child) element and then bubbles up to its parent, grandparent and so on.
For example, if we click a <button> inside a <div> both the button's and the div's event listeners can be triggered. It allows parent elements to handle events from their children.

###4. What is Event Delegation in JavaScript? Why is it useful?
Answer:
Event delegation is a technique where we can add a single addEventListener to a parent element instead of adding to many child elements. 
This saves memory and improves performance because of using few addEventListener.It also makes it easy to handle events without adding new addEventListener.

###5. What is the difference between preventDefault() and stopPropagation() methods?
Answer:
preventDefault() - It stops the browser's default action for an event.
stopPropagation() - stops the event from bubbling up to the parent elements.

