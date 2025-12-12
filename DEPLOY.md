# GitHub Pages 部署指南

## 快速部署步驟

### 1. 確認 Git 狀態

```bash
git status
```

### 2. 提交所有變更

```bash
git add .
git commit -m "Setup GitHub Pages deployment"
```

### 3. 推送到 GitHub

如果是第一次推送：

```bash
# 在 GitHub 創建一個名為 workshop 的 repository
# 然後執行：
git remote add origin https://github.com/你的使用者名稱/workshop.git
git push -u origin master
```

如果已經有 remote：

```bash
git push origin master
```

### 4. 啟用 GitHub Pages

1. 到 GitHub repository: `https://github.com/你的使用者名稱/workshop`
2. 點擊 **Settings** 標籤
3. 在左側選單點擊 **Pages**
4. 在 "Build and deployment" 部分：
   - Source: 選擇 **GitHub Actions**
5. 返回 repository 首頁，點擊 **Actions** 標籤
6. 等待工作流程執行完成（綠色勾勾）

### 5. 訪問網站

部署完成後，您的網站將可在以下網址訪問：

```
https://你的使用者名稱.github.io/workshop/
```

## 自動部署

設定完成後，每次推送代碼到 master 或 main 分支，GitHub Actions 會自動：
1. 建立專案 (`npm run build`)
2. 部署到 GitHub Pages

## 本地測試生產版本

在推送前，您可以本地測試建立的版本：

```bash
# 建立生產版本
npm run build

# 預覽生產版本
npm run preview
```

## 故障排除

### 如果部署失敗

1. 檢查 Actions 標籤的錯誤訊息
2. 確認 Settings > Pages > Source 設定為 "GitHub Actions"
3. 確認 Settings > Actions > General > Workflow permissions 設定為 "Read and write permissions"

### 如果網頁顯示空白

1. 確認 `vite.config.js` 中的 `base: '/workshop/'` 設定正確
2. 重新 build 和推送：
   ```bash
   npm run build
   git add .
   git commit -m "Fix base path"
   git push
   ```

### 手動部署（備用方案）

如果 GitHub Actions 無法使用，可以使用 gh-pages 手動部署：

```bash
# 安裝 gh-pages
npm install -D gh-pages

# 手動部署
npm run deploy
```

## 更新網站內容

每次修改內容後：

```bash
git add .
git commit -m "Update content"
git push
```

GitHub Actions 會自動重新部署。

## 注意事項

- Repository 可以是 public 或 private
- 第一次部署可能需要等待 1-2 分鐘
- 確保 .gitignore 已經正確配置（避免提交 node_modules 和 dist）
