<img src="./static/logo.png" width="100">

# PPet

> 給你的桌面多一點趣味~😁

**支持 Live2d v3 啦~**

[![Current Release](https://img.shields.io/github/release/zenghongtu/PPet.svg?style=flat-square)](https://github.com/zenghongtu/PPet/releases)
![License](https://img.shields.io/github/license/zenghongtu/PPet.svg?style=flat-square)
[https://github.com/pixijs/pixijs/releases](https://github.com/pixijs/pixijs/releases)
[https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js](https://cubism.live2d.com/sdk-web/cubismcore/live2dcubismcore.min.js)

## 預覽

<img src="assets/preview1.png" width="400">

小工具：

<img src="assets/record1.gif" width="400">


設置（可以使用在線/本地 Model）：

<img src="assets/preview2.jpg" width="400">

托盤：

<img src="assets/preview3.jpg" width="200">


## 功能

- [x] 支持 Live2d v2/v3
- [x] 導入本地/在線 Model 
- [x] 調整渲染大小
- [x] @置頂
- [x] 忽略點擊
- [x] 開機啟動
- [x] 拖動位置
- [ ] ...

## 安裝

[這裡](https://github.com/zenghongtu/PPet/releases/latest)去下載最新版本，Mac使用.dmg， Window使用.exe，Linux使用.deb。

（可以使用 [GitHub Proxy 代理加速](https://ghproxy.com/) 下載）

## 使用

### 導入模型

兩種方式：

- 在設置 -> 模型列表中添加 `json` 文件（本地模型以`file://`開頭）。

- 本地模型將文件夾拖入窗口中，導入成功會更新到模型列表中

<img src="assets/record2.gif" width="300">




## 開發

```
$ pnpm i
$ pnpm start
```

## 歡迎參與貢獻

發現了錯誤? 向我發起一個 PR 吧! 參考 [Commit message 和 Change log 編寫指南 - 阮一峰的網絡日誌](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html) 提交 commit 即可。
## 其他

Model資源： [zenghongtu/live2d-model-assets](https://github.com/zenghongtu/live2d-model-assets)

[前往舊版](https://github.com/zenghongtu/PPet/blob/master/README.md)
