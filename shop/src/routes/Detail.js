import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detail(props) {

  let { id } = useParams();
  let toShow = props.shoes.find( x => x.id == id );
  let [ count, setCount ] = useState(0);
  let [ alert, setAlert ] = useState(true);

  useEffect( ()=>{
    // 랜더링이 다 완료 되고 나서 이 안에 있는 것들이 실행됨
    // 데이터 가져올 때, 긴 연산이 필요할 때
    let a = setTimeout( ()=>{ setAlert(false) }, 2000 )    
    
    return ()=>{
      clearTimeout(a)
    }
  }, [])

  // useEffect( ()=>{} ) // 랜더링 할 때마다 실행
  // useEffect( ()=>{}, [] ) // 1회만 실행
  // useEffect( ()=>{
  //   return ()=>{
  //     ~~
  //   }
  // }) // return 이전의 코드가 실행 되기 전에 return 안 코드가 실행됨
  // useEffect(()=>{ 
  //   return ()=>{
  //     실행할코드
  //   }
  // }, []) // 컴포넌트가 사라질 때 1회 실행됨
  // useEffect(()=>{ 
  //   실행할코드
  // }, [state1]) // state1이 변경 될 때만 실행됨


  return (
  <>
    {/* <button onClick={ ()=>{setCount(count+1)} }>{count}카운트</button> */}
    <div className="container">
      {
        alert ? <div className="alert alert-warnig">2초 이내 구매시 할인</div> : null
      }
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
