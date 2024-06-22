import React,{ useState, useEffect } from 'react';


function MyApp() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log('Value is updated:', value);
  }, [value]);

  return (
    <div>
      <header>
        <p>The current value is: {value}</p>
        <button onClick={() => setValue(value + 1)}>Update Value</button>
      </header>
    </div>
    
  );
}

export default MyApp;