import React from "react";
import Navbar from "../components/Navbar.jsx";
import Herosection from "../components/Herosection.jsx";
import SearchComponent from "../components/Search.jsx";
import Categories from "../components/Categories.jsx"
import Features from "../components/Features.jsx";
const App = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <SearchComponent />
      <Categories />
      <Features />
    </div>
  );
};

export default App;
