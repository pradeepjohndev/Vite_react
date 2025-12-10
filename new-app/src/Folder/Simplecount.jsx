import { useState, useEffect } from 'react'

function Simplecount() {
    const [count, setCount] = useState(0);
    const display = count < 10 ? `0${count}` : count;

    useEffect(() => {
        console.log("Count changed:", count);
    }, [count]);

    if (count < 0 || count > 10) {
        { setCount(0) }
    }

/*     useEffect(() => {
        const timer = setInterval(() => {
            console.log("Running...");
        }, 1000);

        return () => clearInterval(timer); // STOP timer
    }, []); */


    return (
        <>
            <h1>Simple Count App : {display}</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </>
    )
}

export default Simplecount