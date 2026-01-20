# 数据分析与绘图平台（基础骨架）

本仓库提供前后端分离的数据分析与绘图平台基础代码，包含 FastAPI 后端与 React + Tailwind CSS 前端骨架。

## 目录结构

- `backend/`: FastAPI 服务，包含上传、分析、插件管理等基础接口。
- `frontend/`: React SPA，包含上传、模块选择、图表预览与插件管理页面。

## 快速开始

### 后端

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### 前端

```bash
cd frontend
npm install
npm run dev
```

## 说明

- 前端 `services/api.js` 使用假数据填充模块与插件列表，可根据 `/analysis` 与 `/plugins` 接口进行改造。
- 后端插件机制在 `backend/app/plugins` 中实现，可按需扩展。
