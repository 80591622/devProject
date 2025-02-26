import { createBrowserRouter } from 'react-router-dom'

import Layout from '@/page/Layout'
import New from '@/page/New'
import Year from '@/page/Year'
import Month from '@/page/Month'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: 'month',
        element: <Month></Month>
      },
      {
        path: 'year',
        element: <Year></Year>
      }
    ]
  },
  {
    path: '/new',
    element: <New></New>
  }
])

export default router
