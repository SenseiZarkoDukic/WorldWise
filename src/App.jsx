import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <Routes>
        <Route path="Product" element={<Product />} />
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
