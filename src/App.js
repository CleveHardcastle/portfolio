import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen relative flex flex-col flex-1">
        <Header />
        <div className="flex-1 overflow-y-auto bg-gray-700 ">
          <div className="flex flex-col flex-nowrap">
            <Routes>
              <Route path="/portfolio" element={<Home />} />
              <Route path="/work/" element={<Work />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
