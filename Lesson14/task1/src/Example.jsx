import React, { useState, useEffect } from 'react';
import moment from 'moment';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const id = setInterval(() => {
      console.log(count);
      setCount(c => c + 1); // ✅ This doesn't depend on `count` variable outside
    }, 1000);
    return () => clearInterval(id);
  }, []); 

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
};

export default Example;