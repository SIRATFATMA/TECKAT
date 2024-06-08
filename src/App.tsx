import {useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState<string>(23);

  useEffect(() => {
    setData("WORLD");
  },[]);

  return (
    <>
      <div>{data}</div>
    </>
  );
}

export default App
