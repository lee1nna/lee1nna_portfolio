import { useEffect, useRef } from "react";
import "./App.css";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-[#d2b4b5] w-full h-screen">
      <Header />
      <Wrapper>body</Wrapper>
    </div>
  );
}

export default App;
