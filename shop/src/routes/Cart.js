import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function Cart() {

  let cart = useSelector( (state)=> { return state.cart });

  return (
    <>
    <div>
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
          {
            cart.map((_, i)=>{
              return (
                <tr key={i}>
                  <td>1</td>
                  <td>{cart[i].id}</td>
                  <td>{cart[i].name}</td>
                  <td>{cart[i].count}</td>
                </tr>
              );
            })
          }
        </tbody>
      </Table> 
    </div>
    </>
  );
}
