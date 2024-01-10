import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Main from "./routes/Main.js";
import Detail from "./routes/Detail.js";
import Cart from "./routes/Cart.js"
import data from "./data.js";
import { useState } from "react";


export default function App() {
  let navigate = useNavigate();
  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Myheader navigate={navigate}/>

      <Routes>
        <Route path="/" element={ <Main shoes={shoes} setShoes={setShoes}/> }/>
        <Route path="/detail/:id" element={ <Detail shoes={shoes} /> }/>
        <Route path="/cart" element= { <Cart /> } />

        <Route path="*" element={ <div>not found</div> }/>

      </Routes>
    </div>
  );
}

function Myheader(props) {
  return (
    <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand onClick={ () => { props.navigate("/"); } }>ShoeShop</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link onClick={ () => { props.navigate("/detail/0"); } }>Detail</Nav.Link>
        <Nav.Link onClick={ () => { props.navigate("/cart"); } }>Cart</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}