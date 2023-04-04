import "./App.css";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Home } from "./components/Home/Home";
import ItemList from "./components/ItemList/ItemList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <ItemList />
    </div>
  );
}

export default App;
