const About = () => {
  return (
    <div className="about-container">
      <h2 className="page-title">关于本项目</h2>

      <div className="about-content">
        <div className="about-intro">
          <h3>项目概述</h3>
          <p>这是一个基于 React Router 的路由管理学习项目，旨在帮助开发者快速理解和掌握 React Router 的核心概念和使用方法。</p>
          <p>项目采用了最新的 React Router 6+ 版本，展示了现代 React 应用中路由管理的最佳实践。</p>
        </div>

        <div className="about-features">
          <h3>核心特性</h3>
          <ul>
            <li>使用 React Router Dom 7 进行路由管理</li>
            <li>实现了嵌套路由、动态路由参数</li>
            <li>演示了查询参数的使用</li>
            <li>包含路由导航和链接功能</li>
            <li>响应式设计，适配不同设备</li>
            <li>清晰的项目结构，易于学习</li>
          </ul>
        </div>

        <div className="about-usage">
          <h3>技术栈</h3>
          <div className="tech-stack">
            <div className="tech-item">React 18</div>
            <div className="tech-item">React Router Dom 7</div>
            <div className="tech-item">JavaScript (ES6+)</div>
            <div className="tech-item">CSS3</div>
            <div className="tech-item">JSON Server</div>
          </div>
        </div>

        <div className="about-resources">
          <h3>学习资源</h3>
          <ul>
            <li>
              <a
                href="https://reactrouter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Router 官方文档
              </a>
            </li>
            <li>
              <a
                href="https://react.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React 官方文档
              </a>
            </li>
            <li>
              <a
                href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript"
                target="_blank"
                rel="noopener noreferrer"
              >
                MDN JavaScript 文档
              </a>
            </li>
          </ul>
        </div>

        <div className="about-structure">
          <h3>项目结构</h3>
          <pre>
            {`src/
├── page/                 # 页面组件
│   ├── Layout/          # 布局组件
│   ├── Board/           # 看板页面
│   ├── Article/         # 文章详情页
│   ├── About/           # 关于页面
│   ├── Login/           # 登录页面
│   └── NotFound/        # 404页面
├── router/              # 路由配置
│   └── index.js         # 路由定义
├── App.js               # 应用入口组件
├── index.js             # 项目入口文件
└── index.css            # 全局样式
`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default About;
