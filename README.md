# React useEffect Shallow Comparison Bug
This repository demonstrates a common bug in React's `useEffect` hook related to shallow comparisons of objects.  When using the `useEffect` hook with an object as a dependency, simply comparing the object using `!==` will not detect changes in the object's properties.

## The Problem
The `bug.js` file contains a component that uses `useEffect` to detect changes in a `props.data` object. However, the comparison `prevProps.data !== props.data` only checks for reference equality, not deep equality. This means that if the object's properties change, the effect won't trigger unless a new object is assigned to `props.data`.

## The Solution
The `bugSolution.js` file demonstrates the correct approach using `useDeepCompareEffect` for deep comparison. This ensures that the effect will trigger even if nested properties within the object change.

## Setup
Clone the repository and run `npm install`.

## Run
Run `npm start` to start the development server and view the example in your browser.