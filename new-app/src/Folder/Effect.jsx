import { useState, useEffect } from "react";

function WelcomeApp() {
  const [message, setmessage] = useState("Welcome to the App!");

  useEffect(() => {
    console.log("App Loaded Successfully");
  },);

  return (
    <>
      <h1>UseEffect Practice</h1>
      <h2>{message}</h2>
    </>
  );
}

export default WelcomeApp;
