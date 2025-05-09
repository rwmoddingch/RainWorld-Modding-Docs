::: warning 警告

本文档非官方文档, 可能存在错误. 
如果发现错误请 [在此](https://github.com/lonelyang/RainWorld-Modding-Docs/issues) 报告. 

:::

# 什么是前置Mod与模组工具?

在 RainWorld 中, 模组开发依赖于引擎与外部工具的协同工作, 通过 `前置Mod` 和 `模组工具` 共同构建了高效、模块化的开发体系:

---

### 前置Mod

![Modding_gallery_icon](https://static.wikitide.net/rainworldwiki/thumb/4/49/Modding_gallery_icon.png/200px-Modding_gallery_icon.png)

前置Mod是新增内容的基础依赖模块, 它提供核心功能或接口, 供其他模组调用, 避免重复开发.

前置Mod将通用功能如 (新生物行为 自定义物品) 抽象为独立模组, 其他模组可直接引用, 减少代码冗余.

例如某模组需要 "自定义蛞蝓猫" 可依赖前置Mod [SlugBase](https://slimecubed.github.io/slugbase/) 提供的SlugCat框架, 而非重复编写底层代码.

前置Mod接口统一规范, 确保不同模组在引擎中稳定运行, 避免因版本或API差异导致冲突.
开发者可专注核心功能, 复杂逻辑由前置Mod处理, 提升开发效率.

---

### 模组工具

模组工具是辅助开发者快速 `创建` `调试` `发布` 模组的集成化工具.

可视化新建与修改游戏资源如 (地图布局 房间生物 房间链接).

_ _ _

### [🡪 前置Mod](prerequisite)
### [🡪 模组工具](utilities)
