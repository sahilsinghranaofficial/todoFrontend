import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import App from "./App.jsx";
import LoginPage from "./Pages/Login.jsx";
import SignupPage from "./Pages/Signup.jsx";

import "./index.css";
import PrivateRoute from "./Components/PrivateRoute.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute><App /></PrivateRoute>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* <App /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
