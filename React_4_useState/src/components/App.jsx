import { useEffect, useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(1);

  const increase = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const decrease = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  useEffect(() => {
    const updateEverySeconds = setInterval(increase, 1000);
    return () => {
      clearInterval(updateEverySeconds);
    };
  }, [increase]);

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
