function Style() {
  /* const mystyles = {
    color: "red",
    fontSize: "20px",
    backgroundColor: "lightyellow",
  }; */

  const x = 10;
  let y = "banana";
  /* if (x > 5) {
    y = y + "apple";
  }
  else{
    y = "grapes";
  } */

    y = x > 5 ? y + "apple" : "grapes";

  return (
    <>
     {/*  <h1 style={mystyles}>hello world</h1> */}
     <h1>{y}</h1>
    </>
  );
}

export default Style;