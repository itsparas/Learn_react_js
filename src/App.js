import { useState } from "react";
import Component from "./Component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FormData from "./FormData";

import Form from "./Form";

function App() {
  // const [formData, setFormData] = useState({});

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Form />} />
          <Route exact path="/userdata" element={<Component />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
