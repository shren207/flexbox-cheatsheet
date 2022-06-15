import Content from "./component/Content";
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isClicked, setClicked] = useState<string>("");

  return (
    <BrowserRouter>
      <div className="h-screen">
        <Header />
        <div className="flex h-screen">
          <Sidebar isClicked={isClicked} />
          <Routes>
            <Route path="/" element={<Content setClicked={setClicked} />} />
            <Route path="/:id" element={<Content setClicked={setClicked} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
