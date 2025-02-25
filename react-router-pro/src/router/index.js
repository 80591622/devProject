import Login from '../page/Login'
import Article from '../page/Article'
import Layout from '../page/Layout'
import About from '../page/About'
import Board from '../page/Board'
import NotFound from '../page/NotFound'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/about',
        element: <About></About>,
      },
      {
        index: true, // 设置默认二级路由
        // path: '/board',
        element: <Board></Board>,
      },
    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/article/:id/:name',
    element: <Article></Article>
  }, 
  {
    path: '*',
    element: <NotFound></NotFound>
  }
])

export default router
