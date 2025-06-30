import React from "react";
import Home from "./pages/Home.jsx";
import AuthPage from "./pages/AuthPage.jsx"
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authpage" element={<AuthPage />} />
      </Routes>
    </div>
  );
};

export default App;
