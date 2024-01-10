// import logo from './logo.svg';
import { useState } from 'react'
import './App.css';

function Like () {
  const [like, setLike] = useState(0);

  return (
    <span onClick={ (e)=>{ e.stopPropagation(); setLike(like + 1); } }>👍 { like }</span>
  );
}

function Modal (props) {
  function editText() {
    let temp = [...props.title];
    temp[0] = '여자 코트 추천';
    props.setTitle(temp);
  }

  return (
    <div className="modal" style={ {background: props.color} }>
      <h4>{props.modal_title}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={ editText }>글수정</button>
    </div>
  );
}

function App() {
  let logo = 'ReactBlog';
  let [title, setTitle] = useState( ['남자 코트 추천', '강남 우동맛집', '파이썬 독학'] );
  let [modal, setModal] = useState(false);
  let [modal_title, setModal_title] = useState(0);
  let [input_v, setInput_v] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{ logo }</h4>
      </div>
      {
        title.map(function(a, i){
          return(
            <div className="list">
              <h4 onClick={ ()=>{ setModal(!modal); setModal_title(i) } }>{ a } <Like /></h4>
              <p>2월 17일 발행</p>
              <button onClick={ ()=> {
                let temp = [...title];
                temp.splice(i, 1);
                setTitle(temp)
                } }>삭제</button>
            </div>
          );
        })
      }

      <input onChange={ (e)=>{
        setInput_v(e.target.value);
      } } ></input>
      <button onClick={ ()=>{
        let temp = [...title];
        temp.unshift(input_v);
        setTitle(temp);
      } }>글발행</button>

      {/* <button onClick={ ()=>{
        let temp = [...title];
        temp.sort();
        setTitle(temp);
      }}> 정렬 </button> */}

      {
        modal ? <Modal title={title} modal_title={title[modal_title]} color={'skyblue'} setTitle = {setTitle}/> : null
      }

    </div>

  );
}

export default App;
