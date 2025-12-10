/* import { useRef } from "react"; */

/* function Ref() {
  const box = useRef(0);

  const increase = () => {
    box.current = box.current + 10;
    console.log(box.current);
  };

  return (
    <>
      <h1>Check console</h1>
      <button onClick={increase}>Increase</button>
      
    </>
  );
} */


/* function Ref() {
    const inputBox = useRef("hello");

    const focusInput = () => {
        inputBox.current.focus();
    };

    return (
        <>
            <input ref={inputBox} />
            <button onClick={focusInput}>Focus Input</button>
        </>
    );
} */


import { func } from "prop-types";
import { useEffect, useRef, useState } from "react";

/* function Ref() {
    const [count, setCount] = useState(0);
    const renders = useRef(0);

    useEffect(() => {
        renders.current = renders.current + 1;
    });

    return (
        <>
            <h1>Count: {count}</h1>
            <h2>Renders: {renders.current}</h2>

            <button onClick={() => setCount(count + 1)}>Increase</button>
        </>
    );
} 


function Ref(){
    const inputRef =useRef();

    function focusInput(){
        inputRef.current.focus();
    }

    return(
        <>
            <input ref={inputRef} />
            <button onClick={focusInput}>Focus Input</button>
        </>
    )
}

function Ref(){
    const [count, setcount] = useState(0);
    const prevCount = useRef(0);

    return(
        <>
            <h1>Current Count : {count}</h1>
            <h2>Previous Count : {prevCount.current}</h2>

            <button onClick={()=>{prevCount.current = count; setcount(count + 1);}}>Increase Count</button>
        </>
    )
}

*/

function Ref(){
    const[timer , setTimer] = useState(0);
    const intervalRef = useRef();

    function startTimer(){
        intervalRef.current = setInterval(()=>{
            setTimer((prev)=> prev + 1);
        }, 1000);
    }

    return (
        <>
            <h1>Timer : {timer} sec</h1>
            <button onClick={startTimer}>Start Timer</button>
            <button onClick={()=> clearInterval (intervalRef.current)}>Stop Timer</button>
            <button onClick={()=>{timer > 0 && setTimer(0);}}>Reset Timer</button>
        </>
    )
}


export default Ref;
