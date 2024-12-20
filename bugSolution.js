```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: the effect only runs once after initial render.
    const interval = setInterval(() => {
       setCount(prevCount => prevCount + 1)
    }, 1000);
    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures the effect only runs once

  return <div>Count: {count}</div>;
}
```