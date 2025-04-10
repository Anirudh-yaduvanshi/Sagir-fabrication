import { Outlet } from "react-router";
import "./App.css";
import Cursor from "./Components/Cursor";

function App() {
  return (
    <>
      <Outlet />
      <Cursor/>
    </>
  );
}

export default App;
