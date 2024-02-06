import Contacts from "./pages/Contacts";
import Furniture from "./pages/Furniture";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="/contacts" element={<Contacts />}/>
        <Route path="/furniture" element={<Furniture />}/>
      </Routes>
    </div>
  );
}

export default App;
