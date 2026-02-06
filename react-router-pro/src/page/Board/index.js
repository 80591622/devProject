// Board.js - React Router 演示首页
import { Link } from 'react-router-dom';

const Board = () => {
  return (
    <div>
      <h2>React Router 核心概念</h2>
      <p>这是一个演示 React Router 核心功能的学习项目。</p>

      <div className="example-container">
        <h3>1. 基础路由</h3>
        <p>
          使用 <code>createBrowserRouter</code> 创建路由配置，<code>Route</code> 定义路由规则，<code>Outlet</code> 作为嵌套路由的出口。
        </p>
        <div className="code-block">
          <pre>
            {`const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true, // 默认路由
        element: <Board />
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  }
])`}
          </pre>
        </div>
      </div>

      <div className="example-container">
        <h3>2. 导航</h3>
        <p>
          使用 <code>Link</code> 和 <code>NavLink</code> 进行页面导航，<code>NavLink</code> 会自动添加 <code>active</code> 类到当前激活的链接。
        </p>
        <div className="card">
          <Link
            to="/about"
            className="btn"
          >
            跳转到关于页面
          </Link>
          <Link
            to="/article/1/React Router 入门"
            className="btn btn-secondary"
            style={{ marginLeft: '10px' }}
          >
            查看示例文章
          </Link>
        </div>
      </div>

      <div className="example-container">
        <h3>3. 路由参数</h3>
        <p>
          使用 <code>:paramName</code> 定义路由参数，通过 <code>useParams</code> Hook 获取参数值。
        </p>
        <div className="code-block">
          <pre>
            {`// 路由配置
{
  path: '/article/:id/:title',
  element: <Article />
}

// 在组件中获取参数
const { id, title } = useParams();`}
          </pre>
        </div>
      </div>

      <div className="example-container">
        <h3>4. 404 路由</h3>
        <p>
          使用 <code>*</code> 匹配所有未定义的路由，作为 404 页面。
        </p>
        <div className="card">
          <Link
            to="/non-existent-path"
            className="btn"
          >
            访问不存在的路径
          </Link>
        </div>
      </div>

      <div className="example-container">
        <h3>5. 编程式导航</h3>
        <p>
          使用 <code>useNavigate</code> Hook 进行编程式导航，可以实现页面跳转、前进、后退等操作。
        </p>
        <div className="code-block">
          <pre>
            {`// 在组件中
const navigate = useNavigate();

// 跳转到指定路径
const goToAbout = () => {
  navigate('/about');
};

// 后退一步
const goBack = () => {
  navigate(-1);
};`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Board;
