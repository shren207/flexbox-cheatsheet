import Content from "./component/Content";
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen">
        <Header />
        <div className="flex h-screen">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/:id" element={<Content />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
