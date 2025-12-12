# 火星創意 Mars Creative

專業的全端開發團隊，提供網頁開發、雲端部署、資料庫設計與程式教學服務。

## 技術棧

- Vue 3
- Vue Router
- Vite
- HTML/CSS/JavaScript

## 開發指令

```bash
# 安裝依賴
npm install

# 啟動開發伺服器
npm run dev

# 建立生產版本
npm run build

# 預覽生產版本
npm run preview
```

## GitHub Pages 部署

### 方法一：使用 GitHub Actions（推薦）

1. 將代碼推送到 GitHub repository
2. 到 GitHub repository 的 Settings > Pages
3. 在 "Build and deployment" 下選擇 "GitHub Actions"
4. 每次推送到 main 分支時會自動部署

### 方法二：手動部署

```bash
# 建立並部署
npm run deploy
```

## 部署步驟

1. **初始化 Git repository（如果還沒有）**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **在 GitHub 上創建 repository**
   - 名稱：workshop
   - 可以是 public 或 private

3. **推送代碼到 GitHub**
   ```bash
   git remote add origin https://github.com/你的使用者名稱/workshop.git
   git branch -M main
   git push -u origin main
   ```

4. **設定 GitHub Pages**
   - 到 GitHub repository 的 Settings > Pages
   - Source 選擇 "GitHub Actions"
   - 等待自動部署完成

5. **訪問網站**
   - 部署完成後，網站將可在以下網址訪問：
   - `https://你的使用者名稱.github.io/workshop/`

## 專案結構

```
workshop/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 配置
├── public/                     # 靜態資源
├── src/
│   ├── assets/                 # 樣式和資源
│   │   └── style.css
│   ├── components/             # Vue 組件
│   │   ├── Navbar.vue
│   │   └── Footer.vue
│   ├── views/                  # 頁面組件
│   │   ├── Home.vue
│   │   ├── About.vue
│   │   ├── Expert.vue
│   │   └── Portfolio.vue
│   ├── router/                 # 路由配置
│   │   └── index.js
│   ├── App.vue                 # 根組件
│   └── main.js                 # 入口文件
├── index.html                  # HTML 模板
├── vite.config.js              # Vite 配置
└── package.json                # 專案配置

```

## 聯絡方式

- 📧 Email: samtash1034@gmail.com
- 📱 手機: 0917-102-697
- 💬 LINE ID: tssh_sam

## License

© 2025 火星創意 Mars Creative. All rights reserved.
