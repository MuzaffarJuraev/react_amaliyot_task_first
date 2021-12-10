import "./App.css";
import Cards from "./components/Cards.js";
import Card from "./pages/Card";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Cards />}></Route>
          <Route path="/one/:id" element={<Card />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
