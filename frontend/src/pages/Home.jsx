import React from "react";
import Navbar from "../components/Navbar.jsx";
import Herosection from "../components/Herosection.jsx";
import SearchComponent from "../components/Search.jsx";
import Categories from "../components/Categories.jsx"
import Features from "../components/Features.jsx";
import Howitworks from "../components/Howitworks.jsx";
import Statistics from "../components/Statistics.jsx";
import Calltoaction from "../components/Calltoaction.jsx";
import Footer from "../components/Footer.jsx";
const App = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <SearchComponent />
      <Categories />
      <Features />
      <Howitworks />
      <Statistics />
      <Calltoaction />
      <Footer />
    </div>
  );
};

export default App;
