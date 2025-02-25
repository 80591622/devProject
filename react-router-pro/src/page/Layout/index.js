import { Outlet, Link } from "react-router-dom"

const Layout = () => {
  return (
    <div>
      <Link to="/">面板</Link>
      <Link to="/about">关于</Link>
      一级路由layout页面
      <Outlet />
    </div>
  )
}

export default Layout