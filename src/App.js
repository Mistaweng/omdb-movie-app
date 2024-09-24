import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import OmdbMovie from "./pages/Home";
import './App.css'

const App = () => {
  return (
    <Router>
      <OmdbMovie />
    </Router>
  );
};

export default App;
