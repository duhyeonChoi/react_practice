import Container from "react-bootstrap/Container";
import bgpic from "../img/bg.png";
import Row from "react-bootstrap/Row";
import data from "../data.js";
import Col from "react-bootstrap/Col";
import { useState } from "react";

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

  return (
    <>


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
