# Lim Yu Heng Portfolio

这是已经适配 `My_Resume` 仓库的 GitHub Pages 版本。

网站地址：

```text
https://yuheng97-0930.github.io/My_Resume/
```

## 本机运行

请先安装 Node.js 22 LTS，然后在项目根目录运行：

```bash
npm install
npm run dev
```

终端会显示本机预览网址。

## 主要修改位置

| 内容 | 文件 |
| --- | --- |
| 网站文字、项目资料、链接和互动逻辑 | `app/page.tsx` |
| 颜色、布局、响应式样式和动画 | `app/globals.css` |
| 图片、PDF 和 Logo | `public/` |
| GitHub Pages 仓库路径 | `vite.config.ts` |
| 自动部署流程 | `.github/workflows/deploy.yml` |

代码注释使用 English。

Business Card 与 Moodboard 已放在 `public/assets/brand/`。Business Card
支持鼠标或触控 360° 旋转、点击快速翻面与键盘控制；Moodboard 可以在两页之间切换。

## 部署到现有 My_Resume 仓库

这个 ZIP 是干净的 GitHub Pages 版本，不包含旧项目的 `.git` 历史。

1. 先备份电脑上的旧 `My_Resume` 资料夹。
2. 保留旧资料夹里面的 `.git` 资料夹。
3. 删除旧资料夹的其他项目文件。
4. 将本 ZIP 内的全部文件复制进旧资料夹根目录。
5. 在旧资料夹打开终端并运行：

```bash
git add -A
git commit -m "Convert portfolio for GitHub Pages"
git push
```

6. 在 GitHub 仓库进入：

```text
Settings → Pages → Build and deployment → Source → GitHub Actions
```

7. 进入 `Actions` 页面，等待 `Deploy portfolio to GitHub Pages` 显示绿色。

## 资源路径

所有资源路径已经适配 `/My_Resume/`。资源的准确文件名列在
`ASSET_GUIDE.md`。

如果未来把仓库改名为 `yuheng97-0930.github.io`，需要把
`vite.config.ts` 中的：

```ts
base: "/My_Resume/",
```

改为：

```ts
base: "/",
```

## Resume

网站中的两个 Resume 按钮已经连接到：

```text
public/Resume.pdf
```

## 更新网站

每次修改完成后运行：

```bash
git add -A
git commit -m "Update portfolio"
git push
```

GitHub Actions 会自动重新构建并发布网站。
