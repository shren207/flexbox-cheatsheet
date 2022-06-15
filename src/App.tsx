import Content from "./component/Content";
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [clickedProp, setClickedProp] = useState<string>("");

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="relative flex flex-grow">
          <Sidebar clickedProp={clickedProp} />
          <Routes>
            <Route
              path="/"
              element={<Content setClickedProp={setClickedProp} />}
            />
            <Route
              path="/:id"
              element={<Content setClickedProp={setClickedProp} />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
