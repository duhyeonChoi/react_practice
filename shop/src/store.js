import { configureStore, createSlice } from "@reduxjs/toolkit";

// 생성1
let user = createSlice({
  name: "user",
  initialState: "kim",
})

// 생성2
let stock = createSlice({
  name: 'stock',
  initialState: [10, 11, 12]
})

let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ]
})

// 등록
export default configureStore({
  reducer: {
    user : user.reducer,
    stock : stock.reducer,
    cart : cart.reducer
  },
});
