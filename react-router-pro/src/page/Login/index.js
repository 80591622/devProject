import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.loginHeader}>
          <h2 className={styles.loginTitle}>React Router 导航功能演示</h2>
          <p className={styles.loginSubtitle}>学习 React Router 的导航方式</p>
        </div>

        {/* 导航功能演示区域 */}
        <div className={styles.navigationDemo}>
          <div className={styles.demoSection}>
            <h4 className={styles.demoSubtitle}>1. 声明式导航 (Link 组件)</h4>
            <p className={styles.demoDescription}>使用 Link 组件进行页面跳转</p>
            <Link
              to="/"
              className={styles.navLink}
            >
              跳转到首页看板
            </Link>
          </div>

          <div className={styles.demoSection}>
            <h4 className={styles.demoSubtitle}>2. 命令式导航 (useNavigate)</h4>
            <p className={styles.demoDescription}>使用编程方式进行页面跳转</p>
            <button
              onClick={() => navigate('/')}
              className={styles.navButton}
            >
              编程方式跳转到看板
            </button>
          </div>

          <div className={styles.demoSection}>
            <h4 className={styles.demoSubtitle}>3. 查询参数传递</h4>
            <p className={styles.demoDescription}>通过 URL 查询参数传递数据</p>
            <button
              onClick={() => navigate('/article/123/react-router?category=frontend&author=admin')}
              className={styles.navButton}
            >
              带查询参数跳转
            </button>
          </div>

          <div className={styles.demoSection}>
            <h4 className={styles.demoSubtitle}>4. 路由参数传递</h4>
            <p className={styles.demoDescription}>通过路由路径参数传递数据</p>
            <button
              onClick={() => navigate('/article/456/react-hooks')}
              className={styles.navButton}
            >
              带路由参数跳转
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
