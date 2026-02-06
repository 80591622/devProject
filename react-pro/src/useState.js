// useState - 基础状态管理Hook

import { useState } from 'react';

function App() {
  // useState Hook用于声明状态变量
  // 语法: const [状态变量, 更新函数] = useState(初始值)
  const [count, setCount] = useState(0); // 数字状态
  const [message, setMessage] = useState('Hello React'); // 字符串状态
  const [isVisible, setIsVisible] = useState(true); // 布尔状态
  const [items, setItems] = useState(['苹果', '香蕉']); // 数组状态
  const [user, setUser] = useState({ name: '张三', age: 25 }); // 对象状态

  // 更新数字状态 - 可以直接传入新值
  const increment = () => {
    setCount(count + 1);
  };

  // 更新字符串状态
  const updateMessage = () => {
    setMessage('Hello useState');
  };

  // 更新布尔状态
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  // 更新数组状态 - 需要创建新数组
  const addItem = () => {
    setItems([...items, `水果${items.length + 1}`]);
  };

  // 更新对象状态 - 需要创建新对象
  const updateUser = () => {
    setUser({ ...user, age: user.age + 1 });
  };

  return (
    <div className="App">
      <h2>useState Hook 演示</h2>

      {/* 数字状态演示 */}
      <div>
        <p>计数: {count}</p>
        <button onClick={increment}>+1</button>
      </div>

      <hr />

      {/* 字符串状态演示 */}
      <div>
        <p>消息: {message}</p>
        <button onClick={updateMessage}>更新消息</button>
      </div>

      <hr />

      {/* 布尔状态演示 */}
      <div>
        <button onClick={toggleVisibility}>{isVisible ? '隐藏' : '显示'} 内容</button>
        {isVisible && <p>这是可切换的内容</p>}
      </div>

      <hr />

      {/* 数组状态演示 */}
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={addItem}>添加水果</button>
      </div>

      <hr />

      {/* 对象状态演示 */}
      <div>
        <p>
          用户名: {user.name}, 年龄: {user.age}
        </p>
        <button onClick={updateUser}>增加年龄</button>
      </div>
    </div>
  );
}

export default App;
