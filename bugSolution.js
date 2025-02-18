```javascript
import React, { useState, useEffect } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect'; // Install this package

function MyComponent(props) {
  const [count, setCount] = useState(0);

  useDeepCompareEffect(() => {
    console.log('Data changed!');
  }, [props.data]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
```