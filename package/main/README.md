### 前言

目前配置比较简陋，多多客制化。

### 技术栈

- vue3、vue-router@5、pinia，组合式 api。
- typescirpt，基于 esbuild-loader
- 基于 sass 的样式系统。
- commintlint、lint-staged、eslint、stylelint

### 配置文件

env/ 目录中配置文件，配置文件被注入到打包过程的 NODE*ENV 中，详情参考 vue-cli 中环境变量配置。其中 APP*开头的会被注入到 definePlugin 中。

### 静态资源

vue 中静态资源使用 Src 跳过 webpack 处理。css 中./public 开头的总是不会被处理

### vscode 扩展

至少安转项目中推荐的扩展提高效率,另外 git history、git lens 推荐安装。

### CICD

支持项目自动打包和部署到指定静态服务器，目前支持 github page 和 gitee 部署。

### 项目启动

- `npm run start` 启动开发服务器
- `npm run build` 打包代码
- `npm run debug` 打包开发环境代码到 dist 目录
- `npm run lint` 格式化 eslint 和 stylelint
- `npm run eslint` 格式化 eslint
- `npm run stylelint` 格式化 stylelint

### 禁止的操作

- 禁止在文件顶部添加作者、修改者等信息。
- 禁止添加忽略注释以跳过 lint 检查。
- 禁止提交代码时跳过 lint 检查。
- 合并代码必须使用 merge 操作，按照 rebase 的方式合入。
