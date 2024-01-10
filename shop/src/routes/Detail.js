import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import "./Detail.css";

export default function Detail(props) {

  let { id } = useParams();
  let toShow = props.shoes.find( x => x.id == id );
  let [ tab, setTab ] = useState(0);
  let [ fade2, setFade2 ] = useState('start');

  useEffect( ()=>{
    setFade2('end');
    return ( ()=>{
      setFade2('start');
    });
  }, [fade2]);

  return (
  <>
    <div className={"container " + {fade2}}>
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

      <Nav variant="tabs"  defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={ ()=>setTab(0)}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={ ()=>setTab(1)}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={ ()=>setTab(2)}>버튼2</Nav.Link>
        </Nav.Item>
    </Nav>
    
    <TabContent tab={tab} shoes={props.shoes}/>

    </div>
  </>
  );
}

function TabContent({tab, shoes}) {
  let [ fade, setFade ] = useState("start");

  useEffect( ()=>{
    let a = setTimeout( ()=>{ setFade("start end") }, 100);

    return (()=>{
      clearTimeout(a);
      setFade("start");
    });

  }, [tab]);

  if( tab == 0) {
    return <div className={fade}>{shoes[0].title}</div>
  } else if ( tab == 1 ) {
    return <div className={fade}>내용1</div>
  } else if ( tab == 2 ) {
    return <div className={fade}>내용2</div>
  }
}