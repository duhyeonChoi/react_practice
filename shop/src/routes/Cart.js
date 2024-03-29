import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeName, increase, addCount } from "../store";

export default function Cart() {
  let state = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();

  return (
    <>
      <div>
        {state.user.name} {state.user.age}
        <button onClick={ ()=>{ dispatch(increase(10)) }}>버튼</button>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>상품명</th>
              <th>수량</th>
              <th>변경하기</th>
            </tr>
          </thead>
          <tbody>
            {state.cart.map((_, i) => {
              return (
                <tr key={i}>
                  <td>1</td>
                  <td>{state.cart[i].id}</td>
                  <td>{state.cart[i].name}</td>
                  <td>{state.cart[i].count}</td>
                  <td>
                    <button onClick={ ()=>{
                      dispatch(addCount(state.cart[i].id))
                    }}>+</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
}
