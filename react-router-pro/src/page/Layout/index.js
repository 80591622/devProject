// Layout.js - 主布局组件
import { Outlet, NavLink } from 'react-router-dom';
import '../../index.css';

const Layout = () => {
  return (
    <div className="layout-container">
      {/* 导航栏 */}
      <nav className="navbar">
        <div className="nav-title">
          <h1>React Router 演示</h1>
          <p className="nav-subtitle">学习 React Router 的核心特性</p>
        </div>
        <div className="nav-links">
          {/* NavLink 会自动添加 active 类到当前激活的链接 */}
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
            end
          >
            首页
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            关于
          </NavLink>
          <NavLink
            to="/article/123/React Router 入门"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            文章示例
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            登录
          </NavLink>
        </div>
      </nav>

      {/* 主内容区域 */}
      <main className="main-content">
        <div className="content-wrapper">
          {/* 当前页面的路由出口 */}
          <Outlet />
        </div>
      </main>

      {/* 页脚 */}
      <footer className="footer">
        <p>React Router 学习演示 © 2026</p>
      </footer>
    </div>
  );
};

export default Layout;
