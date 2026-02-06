// useReducer - 复杂状态管理Hook

import { useReducer, useRef } from 'react';

// 1. 定义初始状态
const initialState = {
  count: 0,
  loading: false,
  error: null,
  data: []
};

// 2. 定义reducer函数
// reducer接收当前状态和action，返回新状态
// action是一个对象，包含type和payload
function counterReducer(state, action) {
  // 根据action的type执行不同的逻辑
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      };

    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      };

    case 'RESET':
      return {
        ...state,
        count: 0
      };

    case 'SET_COUNT':
      return {
        ...state,
        count: action.payload
      };

    case 'FETCH_START':
      return {
        ...state,
        loading: true,
        error: null
      };

    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload
      };

    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    default:
      // 如果没有匹配的action type，返回当前状态
      return state;
  }
}

function App() {
  // 3. 使用useReducer Hook
  // 语法: const [state, dispatch] = useReducer(reducer, initialState)
  const [state, dispatch] = useReducer(counterReducer, initialState);

  // 4. 定义action创建函数
  const increment = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  const setCountToFive = () => {
    dispatch({ type: 'SET_COUNT', payload: 5 });
  };

  // 5. 模拟异步数据获取
  const fetchData = () => {
    // 开始请求
    dispatch({ type: 'FETCH_START' });

    // 模拟API请求延迟
    setTimeout(() => {
      try {
        // 模拟请求成功
        const mockData = ['数据1', '数据2', '数据3'];
        dispatch({ type: 'FETCH_SUCCESS', payload: mockData });
      } catch (error) {
        // 模拟请求失败
        dispatch({ type: 'FETCH_ERROR', payload: '请求失败' });
      }
    }, 2000);
  };

  return (
    <div className="App">
      <h2>useReducer Hook 演示</h2>

      {/* 基础计数器 */}
      <div>
        <h3>1. 基础计数器</h3>
        <p>计数: {state.count}</p>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
        <button onClick={reset}>重置</button>
        <button onClick={setCountToFive}>设置为5</button>
      </div>

      <hr />

      {/* 异步数据获取 */}
      <div>
        <h3>2. 异步数据处理</h3>

        <button
          onClick={fetchData}
          disabled={state.loading}
        >
          {state.loading ? '加载中...' : '获取数据'}
        </button>

        {state.loading && <p>数据加载中...</p>}
        {state.error && <p style={{ color: 'red' }}>错误: {state.error}</p>}

        {state.data.length > 0 && (
          <div>
            <h4>获取到的数据:</h4>
            <ul>
              {state.data.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <hr />

      <h3>useReducer的适用场景:</h3>
      <ul>
        <li>复杂的状态逻辑，涉及多个子值</li>
        <li>下一个状态依赖于之前的状态</li>
        <li>需要处理多个不同类型的action</li>
        <li>组件之间需要共享复杂状态</li>
        <li>需要记录状态转换历史</li>
      </ul>

      <h3>useReducer vs useState:</h3>
      <ul>
        <li>useState适合简单状态管理</li>
        <li>useReducer适合复杂状态管理</li>
        <li>useReducer提供更结构化的状态更新方式</li>
        <li>useReducer使状态逻辑更易于测试和维护</li>
      </ul>
    </div>
  );
}

export default App;
