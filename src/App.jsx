import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./Pages/ProtectedRoute";
import { lazy } from "react";

import Product from "./Pages/Product";
import Pricing from "./Pages/Pricing";
import Homepage from "./Pages/Homepage";
import PageNotFound from "./Pages/PageNotFound";
import AppLayout from "./Pages/AppLayout";
import Login from "./Pages/Login";

// const Homepage = lazy(() => import("./Pages/Homepage"));

// dist/index.html                   0.48 kB │ gzip:   0.32 kB
// dist/assets/index-84cc8aaf.css   31.32 kB │ gzip:   5.22 kB
// dist/assets/index-b45fb1a4.js   527.74 kB │ gzip: 149.63 kB

import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          {" "}
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="product" element={<Product />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="login" element={<Login />} />

            <Route
              path="app"
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="cities" />} />
              <Route path="cities" element={<CityList />} />
              <Route path="cities/:id" element={<City />} />
              <Route path="countries" element={<CountryList />} />
              <Route path="form" element={<Form />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>{" "}
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
