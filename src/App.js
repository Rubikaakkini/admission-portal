import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Success from "./pages/Success";
import About from "./pages/About";

function App() {

  return (

    <BrowserRouter>

      <div className="navbar">

        <Link to="/">Home</Link>

        <Link to="/register">Register</Link>

        <Link to="/about">About</Link>

      </div>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />

        <Route path="/success" element={<Success />} />

        <Route path="/about" element={<About />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;