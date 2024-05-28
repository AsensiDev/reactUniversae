import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Header  from "./components/Header/Header.jsx";
import "./App.css";
import  Register  from "./components/Register/Register";
import  Comunity  from "./components/Comunity/Comunity";
import  Store  from "./components/Store/Store";
import  Home  from "./components/Home/Home";
import Cart from "./components/Cart/Cart.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Login from "./components/Login/Login.jsx";
import MisCursos from "./components/MisCursos/MisCursos.jsx";

export default function App() {

  return (
    <Router>
      <div className="cursos">
        <Header />
        <Routes>
          <Route path="/react-rick-and-morty/" element={<Home />} />
          <Route path="/react-rick-and-morty/register" element={<Register />} />
          <Route path="/react-rick-and-morty/login" element={<Login />} />
          <Route path="/react-rick-and-morty/comunity" element={<Comunity />} />
          <Route path="/react-rick-and-morty/store" element={<Store />} />
          <Route path="/react-rick-and-morty/miscursos" element={<MisCursos />} />
          <Route path="/react-rick-and-morty/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


