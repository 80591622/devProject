import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App';
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import router from '@/router'
import './store'
import './theme.css'
import sum from '@/test'
import store from './store'

const total = sum(1, 2)
console.log(total, '===========')

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
)
