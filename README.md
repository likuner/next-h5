# next-app

一个服务端渲染模版工程，基于 Next 和 React。

## 本地运行

```bash
npm run dev
# or
pnpm dev
```

## 生产环境

- 确保 `package.json` 文件中设置了 `package.json `文件中存在 `build` 和 `start` 两个构建命令
- 执行 `next build` 命令将在 `dist` 文件夹中构建出用于生产环境的应用程序
- 构建之后，执行 `next start` 命令启动一个支持混合页面（hybrid pages）的 Node.js 服务程序
- 该服务程序将同时服务于静态生成的页面和服务器端渲染的页面

