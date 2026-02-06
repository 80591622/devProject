# React Router 演示项目

一个专注于演示React Router核心功能和最佳实践的学习项目，包含了从基础到高级的路由配置和使用示例。

## 项目概述

该项目旨在通过实际代码示例演示React Router的各种核心功能和API用法。项目包含了多个页面和路由配置，展示了不同场景下的路由实现方式。

## 涵盖的React Router特性

### 核心功能

- ✅ 基础路由配置
- ✅ 嵌套路由实现
- ✅ 路由参数传递
- ✅ 编程式导航
- ✅ 路由守卫（权限控制）

### 组件演示

- ✅ `BrowserRouter` - 浏览器路由容器
- ✅ `Routes` - 路由配置容器
- ✅ `Route` - 路由规则定义
- ✅ `Link` - 导航链接
- ✅ `NavLink` - 带激活状态的导航链接
- ✅ `Outlet` - 嵌套路由出口
- ✅ `useNavigate` - 编程式导航Hook
- ✅ `useParams` - 获取路由参数Hook
- ✅ `useLocation` - 获取当前位置Hook

## 项目结构

```
src/
├── page/                          # 页面组件
│   ├── About/                     # 关于页面
│   ├── Article/                   # 文章页面
│   ├── Board/                     # 看板页面
│   ├── Layout/                    # 布局组件
│   ├── Login/                     # 登录页面
│   └── NotFound/                  # 404页面
├── router/                        # 路由配置
│   └── index.js                   # 路由定义
├── App.js                         # 应用入口组件
├── index.js                       # 项目入口文件
└── App.css                        # 全局样式
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

1. 项目展示了完整的路由配置和使用示例
2. 包含了公共布局组件和多种页面类型
3. 演示了嵌套路由、路由参数、编程式导航等功能
4. 可以通过修改`src/router/index.js`来学习不同的路由配置方式

## 学习资源

- [React Router官方文档](https://reactrouter.com/)
- [React官方文档](https://reactjs.org/)

## 许可证

MIT

## 贡献

欢迎提交Issue和Pull Request！
