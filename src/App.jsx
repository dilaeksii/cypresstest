import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/Login.jsx";
import Success from "./components/Success.jsx";

function App() {
  return (
    <>
      <Login />
      <Success />
    </>
  );
}

export default App;
