import Layout from "@/pages/Layout";
import Login from "@/pages/Login";
import { AuthRoute } from "@/components/AuthRoute";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthRoute><Layout></Layout></AuthRoute>
  },
  {
    path: '/login',
    element: <Login></Login>
  },
])

export default router