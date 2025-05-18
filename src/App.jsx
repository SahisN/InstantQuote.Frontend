import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-blue-500 flex items-center justify-center min-h-screen min-w-full">
      <h1 className="text-white text-md font-bold">Hello World</h1>
    </div>
  );
}

export default App;
