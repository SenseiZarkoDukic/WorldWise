import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import Pricing from "./Pages/Pricing";
import Homepage from "./Pages/Homepage";
import PageNotFound from "./Pages/PageNotFound";
import AppLayout from "./Pages/AppLayout";
import Login from "./Pages/Login";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="Product" element={<Product />} />
        <Route path="Pricing" element={<Pricing />} />
        <Route path="Login" element={<Login />} />
        <Route path="App" element={<AppLayout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>{" "}
    </BrowserRouter>
  );
}

export default App;
