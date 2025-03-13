import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoneySplitRoutes from "./routes/moneySplitRoutes";
import MainRoutes from "./routes/mainRoutes";
import SignRoutes from "./routes/signRoutes";

const App: React.FC = () => {
  return (
    <Router>
      <div
        style={{
          width: "400px",
          height: "800px",
          backgroundColor: "white",
          borderRadius: "15px",
        }}
      >
        <MoneySplitRoutes />
        <MainRoutes />
        <SignRoutes />
      </div>
    </Router>
  );
};

export default App;
