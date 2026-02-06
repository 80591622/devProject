import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const foodsStore = createSlice({
  name: 'takeaway',
  initialState: {
    foodsList: [],
    activeIndex: 0,
    cartList: []
  },
  reducers: {
    setFoodsList(state, action) {
      state.foodsList = action.payload;
    },
    changeActiveIndex(state, action) {
      state.activeIndex = action.payload;
    },
    addCartList(state, action) {
      const item = state.cartList.find((item) => item.id === action.payload.id);
      if (item) {
        item.count++;
      } else {
        // 为新对象添加count属性
        const newItem = { ...action.payload, count: 1 };
        state.cartList.push(newItem);
      }
    },
    increCount(state, action) {
      const item = state.cartList.find((item) => item.id === action.payload.id);
      item.count++;
    },
    decreCount(state, action) {
      const item = state.cartList.find((item) => item.id === action.payload.id);
      if (!item.count) return;
      item.count--;
    },
    clearCart(state) {
      state.cartList = [];
    }
  }
});

const { setFoodsList, changeActiveIndex, addCartList, increCount, decreCount, clearCart } = foodsStore.actions;
const fetchFoodsList = () => {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:3004/takeaway');
    console.log(res);
    dispatch(setFoodsList(res.data));
  };
};

export { fetchFoodsList, changeActiveIndex, addCartList, increCount, decreCount, clearCart, setFoodsList };

const reducer = foodsStore.reducer;

export default reducer;
