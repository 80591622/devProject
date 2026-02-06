# React 特性演示项目

一个专注于演示React核心特性和最佳实践的学习项目，包含了从基础到高级的各种React概念实现。

## 项目概述

该项目旨在通过实际代码示例演示React的各种核心特性和API用法。项目包含了多个独立的演示组件，每个组件专注于展示特定的React功能或概念。

## 涵盖的React特性

### 类组件相关

- ✅ 类组件基础实现（Counter示例）
- ✅ 类组件生命周期函数
- ✅ 类组件通信机制

### React Hooks

- ✅ `useState` - 状态管理
- ✅ `useEffect` - 副作用处理
- ✅ `useMemo` - 记忆化计算
- ✅ `useCallback` - 记忆化回调函数
- ✅ `useReducer` - 复杂状态管理
- ✅ `useRef` - DOM引用和持久化值
- ✅ `useImperativeHandle` - 自定义暴露给父组件的实例值
- ✅ `forwardRef` - 转发Ref给子组件
- ✅ `memo` - 组件记忆化

### 状态管理

- ✅ Zustand基础使用
- ✅ Zustand切片模式
- ✅ Zustand异步数据处理

## 项目结构

```
src/
├── App.js                          # 应用入口组件
├── index.js                        # 项目入口文件
├── class-实现counter.js           # 类组件计数器示例
├── class-生命周期函数.js          # 类组件生命周期演示
├── class-组件通信.js              # 类组件通信示例
├── forwardRef.js                   # forwardRef API演示
├── memo-基础用法.js               # memo基础用法
├── memo-props比较机制.js          # memo props比较机制
├── useCallback.js                  # useCallback Hook演示
├── useInperativeHandle.js          # useImperativeHandle Hook演示
├── useMemo.js                      # useMemo Hook演示
├── useReducer.js                   # useReducer Hook演示
├── zustand-基础使用.js             # Zustand基础用法
├── zustand-切片模式.js             # Zustand切片模式
└── zustand-异步支持.js             # Zustand异步数据处理
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm start
```

应用将在 `http://localhost:3000` 启动

### 构建生产版本

```bash
npm run build
```

### 运行测试

```bash
npm test
```

## 使用说明

1. 项目包含多个独立的React特性演示文件
2. 可以在`App.js`中导入并使用这些演示组件
3. 每个文件都包含了特定React特性的完整实现和示例
4. 可以通过修改`App.js`来切换不同的演示内容

## 学习资源

- [React官方文档](https://reactjs.org/)
- [Zustand官方文档](https://github.com/pmndrs/zustand)

## 许可证

MIT

## 贡献

欢迎提交Issue和Pull Request！
