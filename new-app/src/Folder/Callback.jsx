import { useCallback, useState, useEffect, useMemo, useRef } from "react";

function Callback() {
    const [count, setCount] = useState(0);

    const increase = useCallback(() => {
        setCount(prev => prev + 1);
    }, [count]);

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={increase}>Click Me</button>
        </>
    )
}


export default Callback;