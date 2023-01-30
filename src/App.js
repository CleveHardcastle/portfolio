import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen relative flex flex-col flex-1">
      <Header />
      <div className="flex-1 overflow-y-auto bg-gray-700 ">
        <div className="flex flex-col flex-nowrap">
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/work" element={<Work />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Router>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
