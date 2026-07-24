# Lim Yu Heng Portfolio

这是网站的完整 React / Vinext 源码。请用 VS Code 打开这个资料夹的根目录，不要只打开某一个档案。

## 开始运行

1. 安装 [Node.js 22 LTS](https://nodejs.org/)。
2. 在 VS Code 开启终端机（Terminal）。
3. 在本资料夹运行：

```bash
npm install
npm run dev
```

4. 终端机会显示本机网址，通常是 `http://localhost:3000`。在浏览器开启它即可预览。

## 最常需要修改的位置

| 想修改什么 | 档案 / 资料夹 |
| --- | --- |
| 个人介绍、项目文字、连结、按钮与各区块内容 | `app/page.tsx` |
| 主题颜色、字体、版面、动画与互动效果 | `app/globals.css` |
| 个人头像、项目截图、证书与履历 PDF | `public/assets/` 与 `public/resume.pdf` |
| 每张图片应使用的正确档名 | `ASSET_GUIDE.md` |

## 放入你的资源

请严格按照 `ASSET_GUIDE.md` 的路径与档名放入资源。网站已经预留好所有位置；放入相同档名后，截图与头像会自动显示。

### 个人头像

放入：

```text
public/assets/profile/profile-photo.jpg
```

建议使用直式 4:5 照片，至少 1200 × 1500 px。

### 项目截图

项目图片的完整清单在 `ASSET_GUIDE.md`。例如 UniSmart 首页截图是：

```text
public/assets/projects/unismart/unismart-cover.png
```

### Resume PDF

放入：

```text
public/resume.pdf
```

之后在 `app/page.tsx` 搜寻 `Request resume`，将两个对应按钮的 `href` 改为：

```tsx
href="/resume.pdf"
```

如果你希望点击后直接下载，也可加上 `download` 属性。

## 主题颜色

在 `app/globals.css` 的最上方 `:root` 区块修改颜色变量即可。例如主要蓝色通常是 `--accent` 或相近名称。不要在不同组件中随意写死颜色，这样日后换主题会更轻松。

## 重要说明

这个版本是 React / Vinext 网站，不是最早的纯 `index.html` + CSS 练习版本。日常编辑时，你主要只需要动 `app/page.tsx`、`app/globals.css`，以及 `public/assets/` 内的资源。

代码内的注释维持 English。
