import { Link } from 'react-router-dom';
import { useSearchParams, useParams } from 'react-router-dom';

const Article = () => {
  // 1. 使用 useParams 获取路由参数
  // 路由参数是在路由路径中定义的参数，如 /article/:id/:name
  const params = useParams();
  const id = params.id;
  const name = params.name;

  // 2. 使用 useSearchParams 获取查询参数
  // 查询参数是 URL 中 ? 后面的参数，如 /article/123/react?category=frontend&author=admin
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const author = searchParams.get('author');

  // 模拟根据ID获取文章数据
  const getArticleData = (articleId) => {
    // 实际项目中这里会调用API获取数据
    const articles = {
      123: {
        title: 'React Router 基础教程',
        content: 'React Router 是 React 官方推荐的路由管理库...',
        date: '2023-10-01'
      },
      456: {
        title: 'React Hooks 深入理解',
        content: 'Hooks 是 React 16.8 新增的特性...',
        date: '2023-10-05'
      },
      789: {
        title: 'Redux Toolkit 最佳实践',
        content: 'Redux Toolkit 简化了 Redux 的使用...',
        date: '2023-10-10'
      }
    };
    // 确保articleId是字符串类型，与对象键的类型一致
    const stringId = String(articleId);
    return (
      articles[stringId] || {
        title: '文章不存在',
        content: `未找到ID为 ${articleId} 的文章内容`,
        date: '未知'
      }
    );
  };

  const articleData = getArticleData(id);

  return (
    <div className="article-container">
      <h2 className="page-title">文章详情页</h2>

      <div className="article-content">
        <h3>{articleData.title}</h3>
        <div className="article-meta">
          <span>发布日期: {articleData.date}</span>
          {id && <span>文章ID: {id}</span>}
          {name && <span>文章名称: {name}</span>}
          {category && <span>分类: {category}</span>}
          {author && <span>作者: {author}</span>}
        </div>
        <div className="article-text">
          <p>{articleData.content}</p>
        </div>
      </div>

      <div className="article-examples">
        <h3>路由参数演示</h3>
        <div className="example-card">
          <h4>1. 路由参数 (useParams)</h4>
          <p>
            路由配置: <code>/article/:id/:name</code>
          </p>
          <p>
            访问URL: <code>/article/123/react-router</code>
          </p>
          <p>
            获取参数: id = {id}, name = {name}
          </p>
        </div>

        <div className="example-card">
          <h4>2. 查询参数 (useSearchParams)</h4>
          <p>
            访问URL: <code>/article/123/react-router?category=frontend&author=admin</code>
          </p>
          <p>
            获取参数: category = {category || '无'}, author = {author || '无'}
          </p>
        </div>
      </div>

      <div className="nav-buttons">
        <Link
          to="/"
          className="btn"
        >
          返回看板
        </Link>
        <Link
          to="/article/456/react-hooks"
          className="btn"
        >
          查看另一篇文章
        </Link>
        <Link
          to="/article/789/redux-toolkit?category=state&author=developer"
          className="btn"
        >
          查看带查询参数的文章
        </Link>
      </div>
    </div>
  );
};

export default Article;
