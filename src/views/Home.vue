<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content fade-in">
          <h1 class="hero-title">
            歡迎來到 <span class="gradient-text">火星創意</span>
          </h1>
          <p class="hero-subtitle">
            專業的全端開發團隊，為您打造完美的數位解決方案
          </p>
          <p class="hero-description">
            從前端到後端、從設計到部署，我們提供一站式網頁開發服務
          </p>
        </div>
        <div class="hero-image">
          <div class="floating-icons">
            <span class="icon">💻</span>
            <span class="icon">🚀</span>
            <span class="icon">⚡</span>
            <span class="icon">🎨</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="section services">
      <div class="container">
        <h2 class="section-title">我們的服務</h2>
        <p class="section-subtitle">全方位的網頁開發解決方案</p>

        <div class="services-grid">
          <div class="service-card" v-for="(service, index) in services" :key="index">
            <div class="service-icon">{{ service.icon }}</div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="section features">
      <div class="container">
        <h2 class="section-title">為什麼選擇我們？</h2>
        <p class="section-subtitle">專業、高效、值得信賴</p>

        <div class="features-grid">
          <div class="feature-card" v-for="(feature, index) in features" :key="index">
            <div class="feature-number">{{ index + 1 }}</div>
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      services: [
        {
          icon: '🌐',
          title: '網站開發',
          description: '前後端整合設計與開發，打造高效能的網站應用'
        },
        {
          icon: '☁️',
          title: '雲端部署',
          description: '雲端主機架設、網域設定與自動化部署流程'
        },
        {
          icon: '🗄️',
          title: '資料庫設計',
          description: '資料庫結構設計與性能優化，確保資料安全'
        },
        {
          icon: '🔧',
          title: '專案維護',
          description: '既有專案功能修改、擴充與技術升級服務'
        },
        {
          icon: '📊',
          title: 'SEO 優化',
          description: '搜尋引擎優化，提升網站能見度與流量'
        },
        {
          icon: '👨‍🏫',
          title: '程式家教',
          description: '一對一程式語言教學與技術顧問服務'
        },
        {
          icon: '💼',
          title: '商業形象網站',
          description: '專業企業官網設計，展現品牌價值與形象'
        },
        {
          icon: '📄',
          title: '一頁式網站',
          description: '快速建立單頁式網站，適合活動頁面與產品展示'
        },
        {
          icon: '🛒',
          title: '購物車系統',
          description: '完整電商功能開發，金流串接與訂單管理'
        },
        {
          icon: '💳',
          title: '金流串接',
          description: '第三方金流整合，支援多種支付方式'
        },
        {
          icon: '📱',
          title: 'RWD響應式網頁',
          description: '跨裝置完美顯示，提供最佳使用體驗'
        },
        {
          icon: '🌐',
          title: '網域設定',
          description: '網域申請、DNS設定與SSL憑證配置'
        }
      ],
      features: [
        {
          title: '豐富經驗',
          description: '超過 5 年業界經驗，參與 10+ 大型專案開發'
        },
        {
          title: '全端能力',
          description: '從前端 UI/UX 到後端架構，提供完整解決方案'
        },
        {
          title: '品質保證',
          description: '嚴格的程式碼審查與測試流程，確保專案品質'
        },
        {
          title: '彈性服務',
          description: '計時制或專案制收費，彈性配合您的需求'
        }
      ]
    }
  }
}
</script>

<style scoped>
.home {
  margin-top: 70px;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 120px 20px;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  animation: float 6s ease-in-out infinite;
}

.hero .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.hero-content {
  z-index: 1;
}

.hero-title {
  font-size: 3.5rem;
  margin-bottom: 20px;
  line-height: 1.2;
}

.gradient-text {
  background: linear-gradient(135deg, #FFE66D 0%, #FF6B6B 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 15px;
  opacity: 0.95;
}

.hero-description {
  font-size: 1.1rem;
  margin-bottom: 30px;
  opacity: 0.9;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.hero-image {
  position: relative;
  height: 400px;
}

.floating-icons {
  position: relative;
  width: 100%;
  height: 100%;
}

.floating-icons .icon {
  position: absolute;
  font-size: 4rem;
  animation: float 3s ease-in-out infinite;
}

.floating-icons .icon:nth-child(1) {
  top: 10%;
  left: 20%;
  animation-delay: 0s;
}

.floating-icons .icon:nth-child(2) {
  top: 40%;
  right: 10%;
  animation-delay: 0.5s;
}

.floating-icons .icon:nth-child(3) {
  bottom: 30%;
  left: 10%;
  animation-delay: 1s;
}

.floating-icons .icon:nth-child(4) {
  bottom: 10%;
  right: 20%;
  animation-delay: 1.5s;
}

/* Services Section */
.services {
  background: white;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.service-card {
  padding: 40px 30px;
  background: white;
  border-radius: 0;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
  text-align: center;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-hover);
}

.service-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--dark-color);
}

.service-card p {
  color: #666;
  line-height: 1.8;
}

/* Features Section */
.features {
  background: var(--light-color);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.feature-card {
  padding: 30px;
  background: white;
  border-radius: 0;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.feature-number {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--gradient-2);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.feature-card h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: var(--dark-color);
}

.feature-card p {
  color: #666;
  line-height: 1.8;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero .container {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .hero-image {
    height: 300px;
  }

  .services-grid,
  .features-grid {
    grid-template-columns: 1fr;
  }

  .cta h2 {
    font-size: 2rem;
  }
}
</style>
