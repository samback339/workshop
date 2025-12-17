<template>
  <div class="about-us">
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="hero-bg-decoration">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-3"></div>
      </div>
      <div class="container">
        <h1 class="fade-in">關於火星創意</h1>
        <p>專業的全端開發工作室</p>
      </div>
    </section>

    <!-- Introduction -->
    <section class="section intro">
      <div class="container">
        <h2 class="section-title">🚀 我們是誰</h2>
        <div class="intro-content">
          <p class="intro-text">
            火星創意是由資深前端與後端工程師組成的全端開發團隊。我們專注於提供高品質的網頁開發服務，從企業官網、電商平台到客製化系統開發，我們都能為您提供最專業的解決方案。
          </p>
          <p class="intro-text">
            作為一間靈活的工作室，我們擁有豐富的專案經驗與紮實的技術能力，能夠快速響應客戶需求，提供量身打造的開發服務。我們相信，優質的程式碼與良好的溝通，是專案成功的關鍵。
          </p>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="section team">
      <div class="container">
        <h2 class="section-title">👥 核心團隊</h2>
        <p class="section-subtitle">經驗豐富的全端工程師</p>

        <div class="team-grid">
          <div class="team-member">
            <div class="member-avatar">👨‍💻</div>
            <h3>Sam</h3>
            <p class="member-role">全端工程師</p>
            <div class="member-skills">
              <span class="skill-tag">後端開發</span>
              <span class="skill-tag">系統架構</span>
              <span class="skill-tag">資料庫設計</span>
              <span class="skill-tag">API開發</span>
            </div>
          </div>

          <div class="team-member">
            <div class="member-avatar">👩‍💻</div>
            <h3>Yuki</h3>
            <p class="member-role">全端工程師</p>
            <div class="member-skills">
              <span class="skill-tag">前端開發</span>
              <span class="skill-tag">UI/UX設計</span>
              <span class="skill-tag">響應式設計</span>
              <span class="skill-tag">效能優化</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section values">
      <div class="container">
        <h2 class="section-title">💡 我們的理念</h2>
        <div class="values-grid">
          <div class="value-card">
            <div class="value-icon">🎯</div>
            <h3>專注品質</h3>
            <p>堅持程式碼品質，確保每個專案都能穩定運行</p>
          </div>
          <div class="value-card">
            <div class="value-icon">🤝</div>
            <h3>誠信溝通</h3>
            <p>保持透明溝通，讓客戶清楚了解專案進度</p>
          </div>
          <div class="value-card">
            <div class="value-icon">⚡</div>
            <h3>快速交付</h3>
            <p>高效的開發流程，在時程內完成優質作品</p>
          </div>
          <div class="value-card">
            <div class="value-icon">🔧</div>
            <h3>持續支援</h3>
            <p>提供完善的售後服務與技術支援</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="section stats">
      <div class="container">
        <h2 class="section-title">📊 工作室數據</h2>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-number">5+</div>
            <div class="stat-label">年開發經驗</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">10+</div>
            <div class="stat-label">完成專案</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">20+</div>
            <div class="stat-label">技術棧</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">100%</div>
            <div class="stat-label">客戶滿意度</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutUs'
}
</script>

<style scoped>
.about-us {
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

/* Introduction */
.intro {
  background: white;
}

.intro-content {
  max-width: 900px;
  margin: 0 auto;
}

.intro-text {
  font-size: 1.2rem;
  line-height: 2;
  color: #666;
  margin-bottom: 25px;
  text-align: justify;
}

/* Team */
.team {
  background: var(--light-color);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  max-width: 900px;
  margin: 0 auto;
}

.team-member {
  background: white;
  padding: 40px;
  border-radius: 0;
  box-shadow: var(--shadow);
  text-align: center;
  transition: all 0.3s ease;
}

.team-member:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-hover);
}

.member-avatar {
  font-size: 6rem;
  margin-bottom: 20px;
}

.team-member h3 {
  font-size: 2rem;
  color: var(--dark-color);
  margin-bottom: 10px;
}

.member-role {
  font-size: 1.2rem;
  color: var(--primary-color);
  font-weight: 600;
  margin-bottom: 25px;
}

.member-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.skill-tag {
  padding: 8px 16px;
  background: var(--light-color);
  color: var(--dark-color);
  border-radius: 0;
  font-size: 0.9rem;
  font-weight: 600;
}

/* Values */
.values {
  background: white;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.value-card {
  background: var(--light-color);
  padding: 40px;
  border-radius: 0;
  box-shadow: var(--shadow);
  text-align: center;
  transition: all 0.3s ease;
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.value-icon {
  font-size: 4rem;
  margin-bottom: 20px;
}

.value-card h3 {
  font-size: 1.5rem;
  color: var(--dark-color);
  margin-bottom: 15px;
}

.value-card p {
  color: #666;
  line-height: 1.8;
}

/* Stats */
.stats {
  background: var(--light-color);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
}

.stat-card {
  text-align: center;
  padding: 40px;
  background: white;
  border-radius: 0;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: scale(1.05);
  box-shadow: var(--shadow-hover);
}

.stat-number {
  font-size: 3.5rem;
  font-weight: 700;
  background: var(--gradient-2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 10px;
}

.stat-label {
  font-size: 1.1rem;
  color: #666;
  font-weight: 600;
}

/* Responsive */
@media (max-width: 768px) {
  .page-hero h1 {
    font-size: 2.2rem;
  }

  .intro-text {
    font-size: 1.1rem;
  }

  .team-grid {
    grid-template-columns: 1fr;
  }

  .values-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
