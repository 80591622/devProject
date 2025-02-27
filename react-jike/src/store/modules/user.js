import { createSlice } from "@reduxjs/toolkit";
import { request } from '@/utils';
import { setToken as _setToken, getToken } from '@/utils';

const userStore = createSlice({
  name: 'user',
  initialState: {
    token: getToken() || ''
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload
      _setToken(action.payload)
    }
  }
})

const { setToken } = userStore.actions

const userReducer = userStore.reducer


// 登录获取token异步方法封装
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const res = await request.post('/authorizations', loginForm)
    dispatch(setToken(res.data.token))
  }
}

export { setToken, fetchLogin }
export default userReducer