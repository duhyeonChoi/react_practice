import "./App.css";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Main from "./routes/Main.js";
import Detail from "./routes/Detail.js";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";



export default function App() {
  let navigate = useNavigate();

  return (
    <div className="App">
      <Myheader navigate={navigate}/>

      <Routes>
        <Route path="/" element={ <Main /> }/>
        
        <Route path="/detail" element={ <Detail /> }/>

        {/* <Route path="/about" element={<h4>회사정보</h4>}>
          <Route path="/member" element={ <div>멤버</div> } />
        </Route> */}

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
        <Nav.Link onClick={ () => { props.navigate("/detail"); } }>Detail</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  );
}