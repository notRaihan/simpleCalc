# Changelog  ver. 0.2

<ol>

<li>Separated JavaScript from HTML: The JavaScript code was moved to a separate file (calculator.js). This separation of concerns makes the code easier to maintain and understand.</li>

<li>Removed inline JavaScript: The onclick attributes were removed from the HTML elements. Instead, event listeners were added in the JavaScript file using addEventListener. This approach is generally considered better practice because it separates the JavaScript code from the HTML, making both easier to read and maintain.</li>

<li>Avoided global variables: The global variables in your original code (values, opValue, and resultInput) were moved inside the DOMContentLoaded event listener. This encapsulation prevents these variables from being global, reducing the risk of unexpected behavior.</li>

<li>Used let and const instead of var: The var keyword was replaced with let and const. The var keyword is function-scoped and can lead to unexpected behavior if you're not careful. let and const are block-scoped and generally safer to use.</li>

<li></li>Used strict equality (===) instead of loose equality (==): The loose equality checks in your original code were replaced with strict equality checks. Loose equality can lead to unexpected behavior because it performs type coercion. Strict equality checks both value and type, which is usually what you want.</li>

<li>Added operator button press restriction: A flag (lastButtonWasOperator) was added to track whether the last button pressed was an operator. If it was, another operator can't be added until a number is pressed. This prevents the user from entering invalid input like "2++2" or "2+-2".</li>

</ol>
