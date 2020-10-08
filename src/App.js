import React from "react";
import { Footer } from "./Components/Layouts/Footer";
import { Nav } from "./Components/Layouts/Nav";
import { Home } from "./Pages/Home";

function App() {
  return (
    <>
      <Nav></Nav>
      <Home />
      <Footer />
    </>
  );
}

export default App;
