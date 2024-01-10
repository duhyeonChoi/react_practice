import { useParams } from "react-router-dom";
import styled from "styled-components";

let Box = styled.div`
  padding : 20px;
  color : grey
`;
let YellowBtn = styled.button`
background : yellow;
// background : ${ props => props.bg == 'blue' ? 'white' : 'black' };
  color : black;
  padding : 10px;
`;


export default function Detail(props) {

  let { id } = useParams();
  let toShow = props.shoes.find(function(x){
    return x.id == id;
  });

  return (
  <>
    <YellowBtn>버튼</YellowBtn>
    {/* <YellowBtn bg='orange'>버튼</YellowBtn> */}
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={"https://codingapple1.github.io/shop/shoes"+(parseInt(id)+1)+".jpg"}
            width="100%"
            /> 
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{toShow.title}</h4>
            <p>{toShow.content}</p>
            <p>{toShow.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  </>
  );
}
