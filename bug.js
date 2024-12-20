```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: this will cause an infinite loop
    setCount(count + 1);
  }, [count]); // Dependency array includes 'count', causing the effect to run after every state update

  return <div>Count: {count}</div>;
}
```