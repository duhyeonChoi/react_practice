import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import bgpic from "../img/bg.png";
import Row from "react-bootstrap/Row";
import data from "../data.js";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Card(props) {
  return (
    <>
      <Col sm>
        {/* <img src='https://codingapple1.github.io/shop/shoes1.jpg' width="80%" /> */}
        <img
          src={
            process.env.PUBLIC_URL +
            "https://codingapple1.github.io/shop/shoes" +
            (props.id + 1) +
            ".jpg"
          }
          width="80%"
        />
        <h4>{props.shoes[props.id].title}</h4>
        <p>{props.shoes[props.id].price}</p>
      </Col>
    </>
  );
}

export default function Main() {
  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            ShoeShop
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bgpic + ")" }}
      ></div>

      <Container>
        <Row>
          {shoes.map(function (_, i) {
            return <Card shoes={shoes} id={i} />;
          })}
        </Row>
      </Container>
    </>
  );
}
