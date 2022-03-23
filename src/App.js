import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./Homepage";
import Banner from "./Banner";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Banner />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
