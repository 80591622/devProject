import { Link, useNavigate } from 'react-router-dom'
import styles from './Login.module.css';


const Login = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.loginContainer}>
      <div>登录页</div>
      {/* 声明式导航 */}
      <Link to="/article" className={styles.link}>声明式导航跳转到文章页</Link>
      {/* 命令式导航 */}
      <div>
        <button onClick={() => { navigate('/article') }} className={styles.button}>编程方式导航跳转文章页</button>
      </div>

      <div>
        <button onClick={() => {navigate('/article?id=1000&name=jack')}} className={styles.button}>query 传参</button>
      </div>

      <div>
        <button onClick={() => {navigate('/article/1001&name')}} className={styles.button}>params 传参</button>
      </div>
    </div>
  );
};

export default Login
