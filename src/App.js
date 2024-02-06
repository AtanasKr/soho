import Contacts from "./pages/Contacts";
import Furniture from "./pages/Furniture";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="/contacts" element={<Contacts />}/>
        <Route path="/furniture" element={<Furniture />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </div>
  );
}

export default App;
