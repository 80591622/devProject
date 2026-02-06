import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-code">404</h1>
        <h2 className="not-found-title">页面未找到</h2>
        <p className="not-found-message">很抱歉，您访问的页面不存在或已被移除。</p>
        <div className="not-found-actions">
          <Link
            to="/"
            className="btn btn-primary"
          >
            返回首页
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
