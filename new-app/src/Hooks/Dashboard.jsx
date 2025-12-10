import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Dashboard() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <h2>Dashboard</h2>
      <h1>Current Theme: {theme}</h1>
    </>
  );
}

export default Dashboard;
