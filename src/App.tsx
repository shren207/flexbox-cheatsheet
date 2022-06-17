import Content from "./component/Content";
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [clickedProp, setClickedProp] = useState<string>("");

  return (
    <BrowserRouter>
      <div className={"flex justify-center"}>
        <div className="min-h-screen flex flex-col max-w-[1500px] w-full">
          <Header />
          <div className="flex h-full">
            <Sidebar clickedProp={clickedProp} />
            <Routes>
              <Route
                path="/"
                element={<Content setClickedProp={setClickedProp} />}
              />
              <Route
                path="/:property"
                element={<Content setClickedProp={setClickedProp} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
