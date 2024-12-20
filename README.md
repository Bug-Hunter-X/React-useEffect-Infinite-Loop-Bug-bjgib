# React useEffect Infinite Loop

This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by including the state variable in the dependency array.  The `bug.js` file shows the problematic code, leading to an uncontrolled re-rendering.  The solution is provided in `bugSolution.js`.

## Problem
The issue arises from an incorrect implementation of the `useEffect` hook. The `count` state is included in the dependency array, causing the effect to run every time the `count` value changes. This creates a loop because the effect itself modifies the `count` state, triggering another execution of the effect.

## Solution
The solution removes the `count` state variable from the dependency array. This ensures the effect runs only when other relevant variables or data changes.