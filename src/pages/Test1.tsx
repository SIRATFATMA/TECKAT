import React,{ useState ,useEffect} from 'react';


const Test1  = () => {
    const [value, setValue] = useState(0);

    
    useEffect(() => {
        console.log("Value is updated:", value);
      }, [value]);
    
  return (<>
    <h1>todo</h1>
    <button onClick={() => setValue(value + 1)}>Value</button>

    <div>Test1</div>
    </>
  )
}

export default Test1