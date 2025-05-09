# RainWorld-Modding-Docs

一个非官方 RainWorld ModAPI 文档网页, 使用 Vitepress 构建.

 
> [!NOTE]
> 你可以通过以下方式为本文档做出贡献:  
> 🡢 打开一个 issue  
> 🡢 Forking 仓库并进行 PR  
> 
> 有关更多信息, 请参阅 [贡献部分](#贡献)  

## 进度

- [x] Home page
- [ ] Docs
	- [x] Start
	- [ ] interface
- [ ] Tool
	- [x] Start
	- [ ] Prerequisite
	- [ ] Resources
	- [ ] Utilities
- [ ] Guide
	- [x] Start
	- [ ] CustomSlugCat

## 结构

```
📂 docs
├─📂 .vitepress
│  └─📂 locales
│     ├─📄 zh.ts
├─📂 public           🡠 Images
├─📂 Docs             🡠 Docs
│  └─📄 start.md
├─📂 Tool             🡠 Tool
│  └─📄 start.md
├─📂 Guide            🡠 Guide
│  ├─📂 CustomSlugCat 🡠 CustomSlugCat
│  └─📄 start.md
└─📄 index.md         🡠 Home
```

## 设置

您需要 [node.js 和 npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

安装依赖项
```
npm install
```
在本地启动以进行实时预览
```
npm run docs:dev
```

## 贡献
你可以通过以下两种方式进行贡献 一是 forking 此存储库并创建 PR, 或者提交包含所需详细信息的 issue。

### 1. 改进或更新内容
你可以通过修正拼写错误, 纠正错误信息, 添加更多详细内容来协助完善文档.

### 2. 编写文档

你可以在文档中添加新的章节, 涵盖你认为可能对他人有帮助的资源.如果你想为此创建一个新页面，请在 docs/ 中创建一个新的 Markdown 文件，并在 docs/.vitepress/locales/zh.ts 将其链接到文档侧边栏.

## 注意

此网页/存储库与 Videocult 和 RainWorld 无关. 
**RainWorld 及其资产由 Videocult 拥有.**
