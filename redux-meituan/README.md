# Redux 美团外卖演示项目

一个基于React和Redux的美团外卖应用演示项目，专注于展示Redux在实际项目中的应用和最佳实践。

## 项目概述

该项目模拟了美团外卖应用的核心功能，通过实际代码示例演示Redux在复杂应用状态管理中的使用。项目包含了完整的商品列表、购物车功能、商品分类和计数组件等。

## 技术栈

- **前端框架**: React
- **状态管理**: Redux + Redux Toolkit
- **UI组件**: 自定义组件
- **HTTP请求**: 模拟数据
- **样式预处理器**: Sass
- **构建工具**: Create React App
- **模拟后端**: JSON Server

## 功能特性

### 核心功能

- ✅ 商品分类展示
- ✅ 商品列表浏览
- ✅ 商品数量加减
- ✅ 购物车功能
- ✅ 商品总价计算

### Redux特性

- ✅ Redux Store配置
- ✅ Slice模式状态管理
- ✅ Action Creators
- ✅ Reducers
- ✅ 异步数据处理
- ✅ Selectors
- ✅ 组件与Redux连接

## 项目结构

```
src/
├── components/                    # 组件
│   ├── Cart/                     # 购物车组件
│   ├── Count/                    # 计数器组件
│   ├── FoodsCategory/            # 商品分类组件
│   │   └── FoodItem/             # 商品项组件
│   ├── Menu/                     # 菜单组件
│   └── NavBar/                   # 导航栏组件
├── store/                        # Redux状态管理
│   ├── modules/                  # 状态模块
│   │   └── takeaway.js           # 外卖模块
│   └── index.js                  # Store配置
├── App.js                        # 应用入口组件
└── index.js                      # 项目入口文件
```

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动模拟后端服务

```bash
npm run serve
```

模拟服务将在 `http://localhost:3001` 启动

### 启动前端开发服务器

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

## 数据结构

### 商品数据

```json
{
  "id": "1",
  "name": "红烧肉",
  "price": 28.0,
  "description": "经典红烧肉",
  "category_id": "1",
  "image": "food1.jpg"
}
```

### 购物车数据

```json
{
  "id": "1",
  "name": "红烧肉",
  "price": 28.0,
  "quantity": 2,
  "subtotal": 56.0
}
```

## Redux状态管理

项目使用Redux Toolkit进行状态管理，主要包含以下状态：

- 商品分类列表
- 商品列表
- 购物车商品
- 总价信息

## 许可证

MIT

## 贡献

欢迎提交Issue和Pull Request！
