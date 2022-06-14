import Content from "./component/Content";
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";

function App() {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex h-screen">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;
