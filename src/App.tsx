import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Store from "./Pages/Store";
import Navbar from "./Component/Navbar";
import { ShoppingCartProvider } from "./Context/ShoppingCartContext";


function App() {
  return (

    <ShoppingCartProvider>
      <Navbar></Navbar>
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />

        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
