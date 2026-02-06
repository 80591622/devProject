// useRef - DOM引用和持久化值Hook

import { useState, useRef, useEffect } from 'react';

function App() {
  // 1. 使用useRef获取DOM元素引用
  const inputRef = useRef(null);
  const divRef = useRef(null);

  // 2. 使用useRef存储持久化值
  const countRef = useRef(0);
  const renderCount = useRef(0);
  const [count, setCount] = useState(0);

  // 3. 点击按钮聚焦输入框
  const focusInput = () => {
    inputRef.current.focus();
    inputRef.current.style.borderColor = 'blue';
  };

  // 4. 修改DOM元素样式
  const changeDivColor = () => {
    divRef.current.style.backgroundColor = 'lightblue';
    divRef.current.style.padding = '20px';
  };

  // 5. 使用ref存储组件渲染次数
  useEffect(() => {
    renderCount.current += 1;
    console.log('组件渲染次数:', renderCount.current);
  });

  // 6. 使用ref存储上一次的状态值
  const [name, setName] = useState('');
  const previousNameRef = useRef('');

  useEffect(() => {
    previousNameRef.current = name;
  }, [name]);

  return (
    <div className="App">
      <h2>useRef Hook 演示</h2>

      {/* 1. DOM引用演示 */}
      <div>
        <h3>1. DOM引用</h3>
        <input
          ref={inputRef}
          type="text"
          placeholder="点击按钮聚焦我"
        />
        <button onClick={focusInput}>聚焦输入框</button>

        <div
          ref={divRef}
          style={{ marginTop: '20px' }}
        >
          点击按钮修改我的样式
        </div>
        <button onClick={changeDivColor}>修改div样式</button>
      </div>

      <hr />

      {/* 2. 持久化值演示 */}
      <div>
        <h3>2. 持久化值</h3>
        <p>状态计数: {count}</p>
        <button onClick={() => setCount(count + 1)}>增加状态计数</button>

        <button
          onClick={() => {
            countRef.current += 1;
            console.log('Ref计数:', countRef.current);
          }}
        >
          增加Ref计数(控制台查看)
        </button>

        <p>组件渲染次数: {renderCount.current}</p>
      </div>

      <hr />

      {/* 3. 存储上一次状态值 */}
      <div>
        <h3>3. 存储上一次状态值</h3>
        <input
          type="text"
          placeholder="输入你的名字"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>当前名字: {name}</p>
        <p>上一次名字: {previousNameRef.current}</p>
      </div>

      <hr />

      <h3>useRef的特性:</h3>
      <ul>
        <li>1. 可以获取DOM元素的直接引用</li>
        <li>2. 可以存储组件生命周期内持久化的值</li>
        <li>3. 修改ref.current不会触发组件重新渲染</li>
        <li>4. 每次渲染返回同一个ref对象</li>
      </ul>
    </div>
  );
}

export default App;
