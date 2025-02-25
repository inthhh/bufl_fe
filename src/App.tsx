import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import First from "./Main/first";

function App() {
  return (
    <Router>
      <div style={{ width: "400px", height: "800px", backgroundColor: "white" }}>
        <Routes>
          <Route path="/" element={<First />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
