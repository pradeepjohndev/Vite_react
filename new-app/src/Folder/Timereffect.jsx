import { useEffect, useState } from "react";

function Timereffect() {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);

        console.log(`timer: ${time}`);

        return () => clearInterval(timer);
    },[]);

    return (
        <>
            <h1>Timer Effect App</h1>
            <h2>Time Elapsed: {time} seconds</h2>
        </>
    );
}

export default Timereffect;
