import { createSlice } from "@reduxjs/toolkit";
import { setToken as _setToken, getToken, removeToken } from '@/utils';
import { loginApi, getProfileApi } from "@/apis/user";

const userStore = createSlice({
  name: 'user',
  initialState: {
    token: getToken() || '',
    userInfo: {}
  },
  reducers: {
    setToken(state, action) {
      state.token = action.payload
      _setToken(action.payload)
    },
    setUserInfo (state, action) {
      state.userInfo = action.payload
    },
    clearUserInfo (state) {
      state.token = ''
      state.userInfo = {}
      removeToken()
    }
  }
})

const { setToken,  setUserInfo, clearUserInfo } = userStore.actions

const userReducer = userStore.reducer


// 登录获取token异步方法封装
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    const res = await loginApi('/authorizations', loginForm)
    console.log(res, '==========>');
    
    dispatch(setToken(res.data.token))
  }
}

// 获取个人用户信息异步方法
const fetchUserInfo = () => {
  return async (dispatch) => {
    const res = await getProfileApi('/user/profile')
    dispatch(setUserInfo(res.data))
  }
}

export { fetchLogin, fetchUserInfo, clearUserInfo }
export default userReducer