# Dev Stack Builder

Dev Stack Builder is a React and TypeScript based web application that helps developers explore different technologies and build their own development stack.

## Live Project

Add your live deployment link here.

## GitHub Repository

https://github.com/alfojan/Assignment-5

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- React Icons
- React Toastify
- JSON

## Features

1. Users can explore different development technologies.
2. Users can add technologies to their personal development stack.
3. Users can remove individual technologies or remove all selected technologies.
4. The application prevents duplicate technologies from being added.
5. Users can see the total number of technologies in their stack.
6. Toast notifications are shown for add, duplicate, remove and remove-all actions.
7. The application is responsive for mobile, tablet and desktop devices.

## React Questions

### 1. What is the difference between state and props?

Props are used to pass data from a parent component to a child component.

State is used to store data inside a component and can change when the user interacts with the application.

For example, in this project the selected technology stack is stored in state and passed to child components through props.

### 2. What is the purpose of useState?

useState is a React Hook used to create and manage state inside a functional component.

When the state changes, React updates the component so the new data can be displayed.

### 3. What is the purpose of useEffect?

useEffect is used to perform side effects in React.

In this project, useEffect is used to fetch technology data from the JSON file when the application loads.

### 4. What is conditional rendering?

Conditional rendering means displaying different UI based on a condition.

For example, if the stack is empty, we show an empty message. If technologies are loading, we show a loading state.

### 5. What is the difference between map() and filter()?

map() creates a new array by changing or transforming every item.

filter() creates a new array containing only the items that match a condition.

In this project, map() is used to display technology cards and filter() is used to remove technologies from the stack.

### 6. Why do we use keys in React lists?

Keys help React identify individual elements in a list.

When a list changes, React uses keys to understand which items were added, removed or changed.

### 7. What is TypeScript and why is it useful in React?

TypeScript is a typed version of JavaScript.

It helps developers catch many errors before running the application and makes the code easier to understand and maintain.

In this project, TypeScript interfaces are used to define the structure of technology data.
