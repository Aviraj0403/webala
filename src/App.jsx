// App.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Router from "./router"; // 👈 Import the new Router file

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Router/>  {/* 👈 All your route-based components */}
      <Footer />
    </BrowserRouter>
  );
};

export default App;
