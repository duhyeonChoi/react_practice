import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detail(props) {

  let { id } = useParams();
  let toShow = props.shoes.find( x => x.id == id );
  let [ num, setNum ] = useState('');
  

  useEffect( ()=>{
        if (isNaN(num) == true) {
          alert("숫자만 입력");
        }
    return ()=>{
      <input onChange={ (e)=>{setNum(e.target.value)} }/>
    }
  }, [num])


  return (
  <>
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img
            src={"https://codingapple1.github.io/shop/shoes"+(parseInt(id)+1)+".jpg"}
            width="100%"
            />
          <input type="input" onChange={(e)=>{setNum(e.target.value)}}></input>
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
