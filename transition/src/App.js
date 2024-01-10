import "./App.css";
import { useState, useTransition, useDeferredValue } from "react";

let a = new Array(10000).fill(0);

function App() {
  let [name, setName] = useState('')
  let [isPending, startTransition] = useTransition()
  let state = useDeferredValue(name);

  return (
    <>
      <div className="App">
        <input onChange={ (e)=>{ 
          //// 여기에 사용
          startTransition(()=>{
            setName(e.target.value) 
        })
      }}/>
      </div>
      {a.map(() => {
        return <div>{state}</div>;
      })}
    </>
  );
}

export default App;
