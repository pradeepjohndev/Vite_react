import { useEffect, useState } from "react";

function Effect_title() {
    const [title, settitle] = useState("");
    const [count, setcount] = useState(0);

    useEffect(() => {
        if (count >= 5) {
            document.title = `count : ${count}`;
        }
     }, [count])

return (
    <>
        <h1>Change Document Title</h1>
        <h2>current value is : {count}</h2>
        <button onClick={() => setcount(count + 1)}>Increase Count</button>
        <button onClick={() => setcount(count - 1)}>Decrease Count</button>
    </>
);
}

export default Effect_title;