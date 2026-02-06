// useEffect - 副作用处理Hook

import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');
  const [width, setWidth] = useState(window.innerWidth);

  // 1. 基础用法: 组件挂载后执行一次
  useEffect(() => {
    console.log('组件挂载完成');
  }, []); // 空依赖数组表示只在挂载时执行

  // 2. 依赖项变化时执行
  useEffect(() => {
    setMessage(`计数已更新为: ${count}`);
    console.log('count变化了', count);
  }, [count]); // 当count变化时执行

  // 3. 清理副作用
  useEffect(() => {
    // 添加事件监听器
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    // 返回清理函数，在组件卸载或依赖项变化前执行
    return () => {
      console.log('清理窗口大小监听');
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 空依赖数组表示只在挂载时添加监听器，卸载时清理

  // 4. 多个useEffect可以共存
  useEffect(() => {
    // 可以有多个useEffect，按顺序执行
    console.log('这是另一个useEffect');
  }); // 没有依赖数组，每次渲染都执行

  return (
    <div className="App">
      <h2>useEffect Hook 演示</h2>

      {/* 基础计数器 */}
      <div>
        <p>计数: {count}</p>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <p>{message}</p>
      </div>

      <hr />

      {/* 窗口大小监听 */}
      <div>
        <p>窗口宽度: {width}px</p>
        <p>调整浏览器窗口大小查看变化</p>
      </div>

      <hr />

      <h3>控制台输出说明:</h3>
      <ul>
        <li>组件挂载时: "组件挂载完成"</li>
        <li>点击+1按钮: "count变化了 X"</li>
        <li>调整窗口大小: 无直接控制台输出，但页面会更新</li>
        <li>组件卸载时: "清理窗口大小监听" (在浏览器控制台查看)</li>
      </ul>
    </div>
  );
}

export default App;
