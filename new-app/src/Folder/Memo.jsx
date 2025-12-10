import { useMemo, useState } from "react";

/* function Memo() {
  const [num, setNum] = useState(1);

  const result = useMemo(() => {
    console.log("Calculating...");
    return num * 10;
  }, [num]);

  return (
    <>
      <h1>Number: {num}</h1>
      <h1>Result: {result}</h1>

      <button onClick={() => setNum(num + 1)}>Increase</button>
    </>
  );
} */


function Memo() {
    const [num, setNum] = useState(0);

    const memo = useMemo(() => {
        console.log("Calculating...");
        return num * 1000;
    }, [num]);

    return (
        <>
            <h1>useMemo Practice</h1>
            <input
                type="number"
                value={num}
                onChange={(e) => setNum(Number(e.target.value))}
            />

            <h2>Result: {memo}</h2>
        </>
    );
}

export default Memo;