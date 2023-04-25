import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ItemListContainer } from "./components/ItemList/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Navbar />}>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:category" element={<ItemListContainer />} />
                    <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
                    <Route path="*" element={<h1>Error 404 NOT FOUND</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
