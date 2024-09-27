import React from 'react'

export default function () {
  return (
    <div>
      <h3 className="p-4 text-3xl bold text-center">Frequenty Asked Questions</h3>

      <div className="collapse collapse-plus ">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">What is React.js and Explain the concept of "components" in React in brief?</div>
        <div className="collapse-content">
          <p>React.js is a JavaScript library used to build dynamic user interfaces, particularly for single-page applications. It allows developers to efficiently manage UI rendering using a virtual DOM, improving performance.
            Components in React:
            Components are the building blocks of a React application. They represent parts of the UI and can be reused across the app. There are two types:
            1.	Functional Components: Stateless components defined as JavaScript functions that receive props and return JSX.
            2.	Class Components: Stateful components defined using ES6 classes, capable of managing their own state and using lifecycle methods.
            Components allow for a modular, reusable, and efficient approach to UI development.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus ">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">What is JSX in React, and how does it work?</div>
        <div className="collapse-content">
          <p>JSX (JavaScript XML) is a syntax extension for JavaScript used in React to describe what the UI should look like. It allows developers to write HTML-like code directly within JavaScript, making the code more readable and expressive.
            How JSX Works:
            •	Looks like HTML: JSX allows you to structure components with an HTML-like syntax inside JavaScript.
            •	Compiles to JavaScript: Under the hood, JSX is converted by tools like Babel into standard JavaScript React.createElement() calls, which React uses to build the UI.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus ">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">What is the Virtual DOM, and how does React use it to optimize performance?</div>
        <div className="collapse-content">
          <p>The Virtual DOM is a lightweight, in-memory representation of the real DOM in React. It acts as a virtual copy that React uses to efficiently manage updates to the user interface.
            How React Uses the Virtual DOM to Optimize Performance:
            1.	Initial Rendering: When a React component is first rendered, a Virtual DOM tree is created.
            2.	State or Prop Changes: When the component's state or props change, React creates a new Virtual DOM tree.
            3.	Diffing Algorithm: React compares (or "diffs") the new Virtual DOM with the previous version to identify what has changed.
            4.	Efficient Updates: Instead of re-rendering the entire real DOM, React only updates the parts of the real DOM that have changed, reducing the number of manipulations and improving performance.
            This selective updating minimizes costly DOM operations, making the UI faster and more efficient.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus ">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">Explain the concept of "props" in React and how they are used.</div>
        <div className="collapse-content">
          <p>State in React is an object that holds dynamic data specific to a component. It allows a component to manage and respond to user interactions, updates, or changes over time.
            Key Differences Between State and Props:
            •	Mutability:
            o	State is mutable and can be changed within the component using setState() or the useState hook in functional components.
            o	Props are immutable and passed down from parent to child components.
            •	Ownership:
            o	State is managed within the component itself and can only be updated by that component.
            o	Props are passed from a parent component and cannot be changed by the receiving component.
            •	Use Case:
            o	State is used to track data that changes over time, like form input, counters, or UI toggles.
            o	Props are used to pass static or external data from one component to another.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">Explain the useState hook and provide an example of how it is used.</div>
        <div className="collapse-content">
          <p>The useState hook in React is a function that allows functional components to have state. It enables you to add state to a component and manage changes over time. useState returns an array with two values: the current state and a function to update that state.</p>
        </div>
      </div>
      <div className="collapse collapse-plus ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">What is the purpose of the useEffect hook in React, and when would you use it?</div>
        <div className="collapse-content">
          <p>The useEffect hook in React is used to handle side effects in functional components, such as fetching data, updating the DOM, or subscribing to events. It runs after the component renders and can also handle cleanup operations when a component unmounts or dependencies change.
            When to Use useEffect:
            •	Data fetching (e.g., API calls after the component mounts).
            •	Setting up subscriptions or event listeners.
            •	Updating the DOM outside the normal render cycle.
            •	Cleaning up resources like timers or subscriptions when a component unmounts.
          </p>
        </div>
      </div>
    </div>
  )
}
