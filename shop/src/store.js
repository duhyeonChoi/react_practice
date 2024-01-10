import { configureStore, createSlice } from "@reduxjs/toolkit";

// 생성1
let user = createSlice({
  name: "user",
  initialState: { name: 'kim', age: 20},

  // state를 수정하는 함수
  reducers : {
    changeName (state) {
      state.name = 'park' // state는 기존 state를 의미
    },
    increase (state, action) {
      // 함수에서 매개변수 사용할 때는 payload를 붙여야 함
      state.age += action.payload
    },
  }
})

// state를 수정하는 함수를 export
export let { changeName, increase } = user.actions

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
  ],
  reducers : {
    addCount(state, action) {
      let i = state.findIndex((a)=>{ return a.id == action.payload });
      state[i].count += 1
    },
    addItem(state, action) {
      state.push(action.payload)
    }
  }
})

export let { addCount, addItem } = cart.actions

// 등록
export default configureStore({
  reducer: {
    user : user.reducer,
    stock : stock.reducer,
    cart : cart.reducer
  },
});
