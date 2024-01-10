import "./App.css";
import { lazy, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Main from "./routes/Main.js";
import data from "./data.js";

import Detail from "./routes/Detail.js";
import Cart from "./routes/Cart.js"
// const Detail = lazy( ()=> import('./routes/Detail.js') );
// const Cart = lazy( ()=> import('./routes/Cart.js') );

export default function App() {
  let navigate = useNavigate();
  let [shoes, setShoes] = useState(data);

  useEffect( ()=>{
    localStorage.setItem('watched', JSON.stringify([]))
  }, [])

  return (
    <div className="App">
      <Myheader navigate={navigate}/>

      <Routes>
        <Route path="/" element={ <Main shoes={shoes} setShoes={setShoes} navigate={navigate}/> }/>
        <Route path="/detail/:id" element={ <Detail shoes={shoes} /> }/>
        <Route path="/cart" element= { <Cart /> } />

        <Route path="*" element={ <div>not found</div> }/>

      </Routes>
    </div>
  );
}

function Myheader({navigate}) {
  return (
    <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand onClick={ () => { navigate("/"); } }>ShoeShop</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        {/* <Nav.Link onClick={ () => { props.navigate("/detail/0"); } }>Detail</Nav.Link> */}
        <Nav.Link onClick={ () => { navigate("/cart"); } }>Cart</Nav.Link>
      </Nav>

      <Nav className="ms-auto">안녕</Nav>
    </Container>
  </Navbar>
  );
}