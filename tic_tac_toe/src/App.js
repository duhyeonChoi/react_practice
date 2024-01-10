// import logo from './logo.svg';
import { useState } from 'react'
import './App.css';

// const products = [
//   { title: 'Cabbage', isFruit: false, id: 1 },
//   { title: 'Garlic', isFruit: false, id: 2 },
//   { title: 'Apple', isFruit: true, id: 3 },
// ];

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton count={count} onClick = {handleClick}/>
      <MyButton count={count} onClick = {handleClick}/>
    </div>
  );

  function MyButton({count, onClick}) {
    return (
      <button
        onClick={onClick}
      >Clicked {count} times</button>
    );
  }

  // function handleClick() {
  //   alert('You clicked me!');
  // }


  // const listItems = products.map( product =>
  //   <li
  //     key = {product.id}
  //     style = {{
  //       color: product.isFruit ? 'magenta' : 'green'
  //     }}
  //   >
  //     {product.title}
  //   </li>
  // );

}
