// DemoSwitcher - React API演示切换器

import { useState } from 'react';

// 导入所有演示组件
import UseStateDemo from './useState';
import UseEffectDemo from './useEffect';
import UseRefDemo from './useRef';
import UseContextDemo from './useContext';
import UseReducerAdvancedDemo from './useReducerAdvanced';
import UseMemoDemo from './useMemo';
import UseCallbackDemo from './useCallback';
import ForwardRefDemo from './forwardRef';
import MemoBasicDemo from './memo-基础用法';
import MemoPropsDemo from './memo-props比较机制';
import UseImperativeHandleDemo from './useInperativeHandle';
import ClassCounterDemo from './class-实现counter';
import ClassLifecycleDemo from './class-生命周期函数';
import ClassCommunicationDemo from './class-组件通信';

// 演示组件映射
const demoComponents = {
  useState: UseStateDemo,
  useEffect: UseEffectDemo,
  useRef: UseRefDemo,
  useContext: UseContextDemo,
  useReducerAdvanced: UseReducerAdvancedDemo,
  useMemo: UseMemoDemo,
  useCallback: UseCallbackDemo,
  forwardRef: ForwardRefDemo,
  memoBasic: MemoBasicDemo,
  memoProps: MemoPropsDemo,
  useImperativeHandle: UseImperativeHandleDemo,
  classCounter: ClassCounterDemo,
  classLifecycle: ClassLifecycleDemo,
  classCommunication: ClassCommunicationDemo
};

// 演示组件标题映射
const demoTitles = {
  useState: 'useState - 基础状态管理',
  useEffect: 'useEffect - 副作用处理',
  useRef: 'useRef - DOM引用和持久化值',
  useContext: 'useContext - 组件间通信',
  useReducerAdvanced: 'useReducer - 复杂状态管理',
  useMemo: 'useMemo - 记忆化计算',
  useCallback: 'useCallback - 记忆化回调',
  forwardRef: 'forwardRef - 转发引用',
  memoBasic: 'memo - 组件记忆化基础',
  memoProps: 'memo - Props比较机制',
  useImperativeHandle: 'useImperativeHandle - 自定义实例值',
  classCounter: 'Class Component - Counter示例',
  classLifecycle: 'Class Component - 生命周期',
  classCommunication: 'Class Component - 组件通信'
};

function App() {
  // 当前选中的演示
  const [selectedDemo, setSelectedDemo] = useState('useState');

  // 获取当前演示组件
  const CurrentDemo = demoComponents[selectedDemo];

  return (
    <div
      className="App"
      style={{ padding: '20px' }}
    >
      <h1>React API 演示中心</h1>
      <p>选择一个演示来学习React的核心API和特性</p>

      {/* 演示切换器 */}
      <div
        style={{
          marginBottom: '20px',
          padding: '15px',
          backgroundColor: '#f0f0f0',
          borderRadius: '8px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px'
        }}
      >
        <label style={{ marginRight: '10px', fontWeight: 'bold' }}>选择演示:</label>

        <select
          value={selectedDemo}
          onChange={(e) => setSelectedDemo(e.target.value)}
          style={{
            padding: '8px',
            fontSize: '14px',
            borderRadius: '4px',
            border: '1px solid #ddd'
          }}
        >
          {Object.keys(demoTitles).map((key) => (
            <option
              key={key}
              value={key}
            >
              {demoTitles[key]}
            </option>
          ))}
        </select>
      </div>

      {/* 当前演示内容 */}
      <div
        style={{
          padding: '20px',
          border: '1px solid #ddd',
          borderRadius: '8px'
        }}
      >
        <h2>{demoTitles[selectedDemo]}</h2>
        <hr />
        <CurrentDemo />
      </div>

      {/* 说明 */}
      <div
        style={{
          marginTop: '20px',
          padding: '15px',
          backgroundColor: '#e8f4f8',
          borderRadius: '8px'
        }}
      >
        <h3>使用说明:</h3>
        <ul>
          <li>使用上方的下拉菜单选择不同的React API演示</li>
          <li>每个演示都包含了API的基本用法和示例</li>
          <li>查看控制台输出可以更好地理解API的工作原理</li>
          <li>修改代码可以实时查看效果</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
