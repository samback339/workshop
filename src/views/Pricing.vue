<template>
  <div class="pricing">
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="hero-bg-decoration">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-3"></div>
      </div>
      <div class="container">
        <h1 class="fade-in">服務費用</h1>
        <p>靈活的計費方式，滿足不同需求</p>
      </div>
    </section>

    <!-- Pricing Plans -->
    <section class="section pricing-plans">
      <div class="container">
        <h2 class="section-title">💰 計費方案</h2>
        <p class="section-subtitle">選擇最適合您的合作方式</p>

        <div class="plans-grid">
          <!-- 專案制 -->
          <div class="plan-card">
            <div class="plan-header">
              <div class="plan-icon">📦</div>
              <h3>專案制</h3>
              <p class="plan-subtitle">適合完整專案開發</p>
            </div>
            <div class="plan-price">
              <div class="price-text">依專案評估</div>
            </div>
            <div class="plan-features">
              <h4>包含服務：</h4>
              <ul>
                <li>需求分析與規劃</li>
                <li>完整系統設計與開發</li>
                <li>測試與品質保證</li>
                <li>部署與上線支援</li>
                <li>技術文件撰寫</li>
                <li>售後維護諮詢</li>
              </ul>
            </div>
            <div class="plan-note">
              <p>💡 我們會根據專案規模、技術複雜度和時程需求提供詳細報價</p>
            </div>
          </div>

          <!-- 計時制 -->
          <div class="plan-card">
            <div class="plan-header">
              <div class="plan-icon">⏱️</div>
              <h3>計時制</h3>
              <p class="plan-subtitle">適合學習指導與技術協助</p>
            </div>
            <div class="plan-price">
              <div class="price-amount">
                <span class="currency">$</span>
                <span class="amount">500</span>
                <span class="separator"> - </span>
                <span class="amount">800</span>
              </div>
              <div class="price-period">/ 每小時</div>
            </div>
            <div class="plan-features">
              <h4>包含服務：</h4>
              <ul>
                <li>一對一技術指導</li>
                <li>專題協助與問題解決</li>
                <li>程式碼審查與優化建議</li>
                <li>技術選型諮詢</li>
                <li>實戰經驗分享</li>
                <li>學習路徑規劃</li>
              </ul>
            </div>
            <div class="plan-note">
              <p>💡 費用根據技術難度與專業程度調整</p>
            </div>
          </div>
        </div>

        <!-- 比較說明 -->
        <div class="comparison-section">
          <h3>如何選擇？</h3>
          <div class="comparison-grid">
            <div class="comparison-card">
              <h4>選擇專案制，如果您：</h4>
              <ul>
                <li>需要完整的系統開發</li>
                <li>有明確的專案需求</li>
                <li>希望專業團隊全程負責</li>
                <li>需要長期維護支援</li>
              </ul>
            </div>
            <div class="comparison-card">
              <h4>選擇計時制，如果您：</h4>
              <ul>
                <li>正在學習程式開發</li>
                <li>需要專題協助指導</li>
                <li>遇到技術問題需要解決</li>
                <li>想要提升技術能力</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Pricing'
}
</script>

<style scoped>
.pricing {
  margin-top: 70px;
}

/* Page Hero */
.page-hero {
  background: var(--gradient-1);
  color: white;
  padding: 100px 20px 80px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.hero-bg-decoration {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
}

.circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: float 6s ease-in-out infinite;
}

.circle-1 {
  width: 300px;
  height: 300px;
  top: -100px;
  right: -100px;
  animation-delay: 0s;
}

.circle-2 {
  width: 200px;
  height: 200px;
  bottom: -50px;
  left: -50px;
  animation-delay: 2s;
}

.circle-3 {
  width: 150px;
  height: 150px;
  top: 50%;
  left: 10%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

.page-hero .container {
  position: relative;
  z-index: 1;
}

.page-hero h1 {
  font-size: 3rem;
  margin-bottom: 15px;
}

.page-hero p {
  font-size: 1.3rem;
  opacity: 0.9;
}

/* Pricing Plans */
.pricing-plans {
  background: var(--light-color);
}

.plans-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
}

.plan-card {
  background: white;
  border-radius: 0;
  padding: 40px;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
  position: relative;
}

.plan-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-hover);
}



.plan-header {
  text-align: center;
  margin-bottom: 30px;
}

.plan-icon {
  font-size: 4rem;
  margin-bottom: 15px;
}

.plan-header h3 {
  font-size: 2rem;
  color: var(--dark-color);
  margin-bottom: 10px;
}

.plan-subtitle {
  color: #666;
  font-size: 1.1rem;
}

.plan-price {
  text-align: center;
  padding: 30px 0;
  border-top: 2px solid var(--light-color);
  border-bottom: 2px solid var(--light-color);
  margin-bottom: 30px;
}

.price-text {
  font-size: 2rem;
  font-weight: 700;
  background: var(--gradient-2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.price-amount {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 5px;
  margin-bottom: 10px;
}

.currency {
  font-size: 1.5rem;
  color: var(--primary-color);
  font-weight: 700;
}

.amount {
  font-size: 3rem;
  font-weight: 700;
  background: var(--gradient-2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.separator {
  font-size: 2rem;
  color: var(--primary-color);
  font-weight: 700;
}

.price-period {
  font-size: 1.1rem;
  color: #666;
}

.plan-features {
  margin-bottom: 25px;
}

.plan-features h4 {
  font-size: 1.2rem;
  color: var(--dark-color);
  margin-bottom: 20px;
}

.plan-features ul {
  list-style: none;
  padding: 0;
}

.plan-features li {
  padding: 12px 0;
  color: #666;
  position: relative;
  padding-left: 30px;
  line-height: 1.6;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.plan-features li:last-child {
  border-bottom: none;
}

.plan-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--secondary-color);
  font-weight: 700;
  font-size: 1.2rem;
}

.plan-note {
  background: var(--light-color);
  padding: 20px;
  border-radius: 0;
  margin-top: 20px;
}

.plan-note p {
  color: #666;
  line-height: 1.6;
  margin: 0;
}

/* Comparison Section */
.comparison-section {
  margin-top: 60px;
  padding-top: 60px;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
}

.comparison-section h3 {
  font-size: 2rem;
  text-align: center;
  color: var(--dark-color);
  margin-bottom: 40px;
}

.comparison-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.comparison-card {
  background: white;
  padding: 30px;
  border-radius: 0;
  box-shadow: var(--shadow);
}

.comparison-card h4 {
  font-size: 1.3rem;
  color: var(--dark-color);
  margin-bottom: 20px;
}

.comparison-card ul {
  list-style: none;
  padding: 0;
}

.comparison-card li {
  padding: 10px 0;
  color: #666;
  position: relative;
  padding-left: 25px;
}

.comparison-card li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--primary-color);
  font-weight: 700;
}

/* Responsive */
@media (max-width: 768px) {
  .page-hero h1 {
    font-size: 2.2rem;
  }

  .plans-grid {
    grid-template-columns: 1fr;
  }

  .comparison-grid {
    grid-template-columns: 1fr;
  }

  .plan-header h3 {
    font-size: 1.6rem;
  }

  .amount {
    font-size: 2.5rem;
  }
}
</style>
