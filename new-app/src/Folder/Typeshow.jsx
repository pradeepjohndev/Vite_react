import { useState } from "react";


function Typeshow() {
    const [type, setType] = useState("hi");
    return (
        <>
            <div className="ctr">
                <h1>Type Show App</h1>
                <input type="text" placeholder={"Type something..."} onChange={(e) => setType(e.target.value)} />
                <div>you types: {type}</div>
                <div>character: {type.length}</div>
                {type.length > 10 &&(<div style={{ color: 'red' }}>Text too short</div>)}
            </div>
        </>
    );
}

export default Typeshow;