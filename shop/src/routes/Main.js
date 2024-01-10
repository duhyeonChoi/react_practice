import Container from "react-bootstrap/Container";
import bgpic from "../img/bg.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from 'axios';

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
          onClick={ ()=>{props.navigate( "/detail/"+props.id)}}
        />
        <h4>{props.shoes[props.id].title}</h4>
        <p>{props.shoes[props.id].price}</p>
      </Col>
    </>
  );
}

export default function Main(props) {

  return (
    <>
      <div
        className="main-bg"
        style={{ backgroundImage: "url(" + bgpic + ")" }}
      ></div>

      <Container>
        <Row>
        {
          props.shoes.map(function (_, i) {
            return <Card shoes={props.shoes} id={i} navigate={props.navigate} />;
          })
        }
        </Row>
      </Container>

      <button onClick={()=>{
        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then( (res)=>{
          let temp = [...props.shoes, ...res.data];
          props.setShoes(temp);
        })
        .catch( ()=>{
          console.log("실패")
        });

      }}>더보기</button>
    </>
  );
}
