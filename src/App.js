import Content from "./components/Content";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Content />
      <div className="more-btn">
        <button className="more-btn">Explore More</button>
      </div>
    </div>
  );
}

export default App;
