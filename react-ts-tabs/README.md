# React TypeScript Tabs 演示项目

一个基于React + TypeScript + Vite的Tabs组件演示项目，展示了现代化前端技术栈在实际项目中的应用。

## 技术栈

- **前端框架**: React 18
- **编程语言**: TypeScript
- **构建工具**: Vite
- **HTTP请求**: Axios
- **路由管理**: React Router
- **状态管理**: React Hooks

## 功能特性

### 核心功能

- ✅ Tabs标签页切换
- ✅ 数据列表展示
- ✅ 详情页查看
- ✅ 异步数据加载
- ✅ 响应式设计

### 技术特性

- 📝 TypeScript类型安全
- 🚀 Vite快速构建
- 🔄 异步数据处理
- 🎨 现代化UI设计
- 📱 响应式布局

## 项目结构

```
src/
├── apis/                        # API接口定义
│   ├── detail.ts                # 详情API
│   ├── list.ts                  # 列表API
│   └── shared.ts                # 共享配置
├── pages/                       # 页面组件
│   ├── Detail/                  # 详情页面
│   └── Home/                    # 首页
│       ├── HomeList/            # 列表组件
│       └── useTabs.ts           # Tabs自定义Hook
├── router/                      # 路由配置
├── utils/                       # 工具函数
│   └── http.ts                  # HTTP请求封装
├── App.tsx                      # 应用入口组件
├── main.tsx                     # 项目入口文件
└── vite-env.d.ts                # Vite环境类型声明
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

应用将在 `http://localhost:5173` 启动

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 开发说明

### API接口

项目使用模拟API进行数据请求，接口定义在 `src/apis/` 目录下。

### Tabs组件

项目核心是Tabs组件的实现，使用了自定义Hook `useTabs` 来管理Tabs的状态和逻辑。

### 类型定义

所有TypeScript类型定义都直接在使用文件中定义，确保类型安全。

## 许可证

MIT

## 贡献

欢迎提交Issue和Pull Request！
