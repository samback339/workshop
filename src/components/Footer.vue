<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>🚀 火星創意</h3>
          <p>專業的全端開發團隊</p>
          <p>為您打造完美的數位解決方案</p>
        </div>

        <div class="footer-section">
          <h4>快速連結</h4>
          <ul>
            <li><router-link to="/">首頁</router-link></li>
            <li><router-link to="/about">關於我們</router-link></li>
            <li><router-link to="/expert">專家介紹</router-link></li>
            <li><router-link to="/portfolio">作品案例</router-link></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>服務項目</h4>
          <ul>
            <li>網站前後端開發</li>
            <li>雲端部署與架設</li>
            <li>資料庫設計優化</li>
            <li>程式語言家教</li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2025 火星創意 Mars Creative. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background: linear-gradient(135deg, #2C3E50 0%, #34495e 100%);
  color: white;
  padding: 60px 20px 20px;
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.footer-section h4 {
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: var(--accent-color);
}

.footer-section p {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 8px;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section ul li a {
  color: rgba(255, 255, 255, 0.8);
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: var(--accent-color);
}

.contact-info {
  margin-bottom: 20px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
}

.contact-icon {
  font-size: 1.2rem;
}

.contact-item a {
  color: rgba(255, 255, 255, 0.9);
  transition: color 0.3s ease;
}

.contact-item a:hover {
  color: var(--accent-color);
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.9);
  transition: all 0.3s ease;
  padding: 8px 15px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0;
  width: fit-content;
}

.social-link:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateX(5px);
  color: var(--accent-color);
}

.service-time {
  margin-top: 15px;
}

.service-time p {
  font-size: 0.9rem;
}

.footer-bottom {
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .footer {
    padding: 40px 15px 15px;
  }
}
</style>
