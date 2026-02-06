// useContext - 组件间通信Hook

import { useState, createContext, useContext } from 'react';

// 1. 创建Context
// createContext用于创建一个上下文对象
// 可以提供一个默认值
const ThemeContext = createContext('light');
const UserContext = createContext(null);

// 2. 创建消费Context的子组件
// 使用useContext Hook来访问上下文值
const ThemedButton = () => {
  // 直接从上下文中获取主题值
  const theme = useContext(ThemeContext);

  // 根据主题设置样式
  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: theme === 'dark' ? '#333' : '#fff',
    color: theme === 'dark' ? '#fff' : '#333',
    border: `2px solid ${theme === 'dark' ? '#fff' : '#333'}`,
    borderRadius: '5px'
  };

  return <button style={buttonStyle}>主题按钮</button>;
};

const UserProfile = () => {
  // 直接从上下文中获取用户信息
  const user = useContext(UserContext);

  if (!user) {
    return <p>未登录</p>;
  }

  return (
    <div>
      <h4>用户信息</h4>
      <p>姓名: {user.name}</p>
      <p>年龄: {user.age}</p>
      <p>邮箱: {user.email}</p>
    </div>
  );
};

const ThemeText = () => {
  const theme = useContext(ThemeContext);
  return <p>当前主题: {theme}</p>;
};

// 3. 主应用组件
function App() {
  // 主题状态
  const [theme, setTheme] = useState('light');

  // 用户信息状态
  const [user, setUser] = useState({
    name: '张三',
    age: 25,
    email: 'zhangsan@example.com'
  });

  // 切换主题
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div
      className="App"
      style={{
        padding: '20px',
        backgroundColor: theme === 'dark' ? '#222' : '#fff',
        color: theme === 'dark' ? '#fff' : '#333',
        minHeight: '100vh'
      }}
    >
      <h2>useContext Hook 演示</h2>

      {/* 4. 提供Context值 */}
      {/* 使用Context.Provider包裹需要访问上下文的组件 */}
      {/* 可以提供多个上下文 */}
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={user}>
          {/* 组件嵌套结构 */}
          <div>
            <ThemeText />
            <ThemedButton />
            <UserProfile />

            <button
              onClick={toggleTheme}
              style={{
                marginTop: '20px',
                padding: '10px'
              }}
            >
              切换主题
            </button>
          </div>
        </UserContext.Provider>
      </ThemeContext.Provider>

      <hr />

      <h3>useContext的优点:</h3>
      <ul>
        <li>避免了props层层传递的问题</li>
        <li>组件可以直接访问需要的数据</li>
        <li>可以在任何深度的组件中共享数据</li>
        <li>支持多个上下文同时使用</li>
      </ul>
    </div>
  );
}

export default App;
