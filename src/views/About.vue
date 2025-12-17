<template>
  <div class="about">
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="hero-bg-decoration">
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-3"></div>
      </div>
      <div class="container">
        <h1 class="fade-in">關於我們</h1>
        <p>認識火星創意團隊</p>
      </div>
    </section>

    <!-- Team Introduction -->
    <section class="section team-intro">
      <div class="container">
        <h2 class="section-title">💼 團隊簡介</h2>
        <div class="intro-content">
          <div class="intro-card">
            <p class="intro-text">
              我們是由<strong>資深前端與後端工程師</strong>組成的全端開發團隊，
              擁有<strong>超過 5 年</strong>的業界經驗，成功參與<strong> 10+ 大型專案</strong>的開發與部署。
            </p>
            <p class="intro-text">
              團隊成員熟悉企業系統開發與雲端部署，能提供從前端設計到後端架構、
              從資料庫設計到雲端上線的<strong>完整解決方案</strong>。
            </p>
            <p class="intro-text">
              我們不只是寫程式，更專注於理解客戶需求，提供最適合的技術方案，
              確保每個專案都能順利交付並達到預期目標。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="section skills">
      <div class="container">
        <h2 class="section-title">💻 技能專長</h2>
        <p class="section-subtitle">我們掌握的技術棧</p>

        <div class="skills-grid">
          <!-- Frontend -->
          <div class="skill-category">
            <div class="category-header">
              <span class="category-icon">🎨</span>
              <h3>前端技術</h3>
            </div>
            <ul class="skill-list">
              <li v-for="skill in frontendSkills" :key="skill">
                <span class="skill-bullet">▸</span>
                {{ skill }}
              </li>
            </ul>
          </div>

          <!-- Backend -->
          <div class="skill-category">
            <div class="category-header">
              <span class="category-icon">⚙️</span>
              <h3>後端技術</h3>
            </div>
            <ul class="skill-list">
              <li v-for="skill in backendSkills" :key="skill">
                <span class="skill-bullet">▸</span>
                {{ skill }}
              </li>
            </ul>
          </div>

          <!-- Other -->
          <div class="skill-category">
            <div class="category-header">
              <span class="category-icon">🛠️</span>
              <h3>其他技術</h3>
            </div>
            <ul class="skill-list">
              <li v-for="skill in otherSkills" :key="skill">
                <span class="skill-bullet">▸</span>
                {{ skill }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Offered -->
    <section class="section services-offered">
      <div class="container">
        <h2 class="section-title">🛠️ 提供服務</h2>
        <div class="services-list">
          <div class="service-item" v-for="(service, index) in services" :key="index">
            <div class="service-number">{{ index + 1 }}</div>
            <div class="service-content">
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Experience -->
    <section class="section project-experience">
      <div class="container">
        <h2 class="section-title">📂 專案經驗</h2>
        <p class="section-subtitle">我們參與過的專案類型</p>

        <div class="projects-grid">
          <div class="project-card" v-for="(project, index) in projects" :key="index">
            <div class="project-icon">{{ project.icon }}</div>
            <h3>{{ project.name }}</h3>
            <p>{{ project.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="about-cta">
      <div class="container">
        <h2>想了解更多？</h2>
        <p>歡迎查看我們的專家介紹與作品案例</p>
        <div class="cta-buttons">
          <router-link to="/expert" class="btn btn-primary">專家介紹</router-link>
          <router-link to="/portfolio" class="btn btn-secondary">作品案例</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      frontendSkills: [
        'HTML',
        'CSS',
        'JavaScript、TypeScript',
        'React.js、Next.js',
        'Vue.js',
        'RWD 響應式設計'
      ],
      backendSkills: [
        'Java、Spring Boot',
        'PHP、Laravel',
        'C#、.NET Framework、.NET Core',
        'Python、Django'
      ],
      otherSkills: [
        '資料庫（MySQL、PostgreSQL）',
        '自動化流程（CI/CD）',
        '雲服務（AWS）',
        '容器化（Docker）',
        '其他（Nginx、RabbitMQ、ELK、Git、微服務架構）'
      ],
      services: [
        {
          title: '網站前後端整合設計與開發',
          description: '從 UI/UX 設計到前後端實作，打造完整的網站應用'
        },
        {
          title: '雲端主機架設與部署',
          description: 'AWS 雲端服務建置、自動化部署流程規劃'
        },
        {
          title: '網域註冊與 DNS 設定',
          description: '協助網域申請、DNS 配置與 SSL 憑證安裝'
        },
        {
          title: '既有專案功能修改與擴充',
          description: '優化現有系統、新增功能、技術升級與重構'
        },
        {
          title: '資料庫結構設計與性能優化',
          description: '資料庫架構設計、查詢優化、備份策略規劃'
        },
        {
          title: '程式語言家教與技術顧問服務',
          description: '一對一教學、技術諮詢、程式碼審查'
        }
      ],
      projects: [
        {
          icon: '💬',
          name: '即時聊天室系統',
          description: 'WebSocket 即時通訊、多人聊天室'
        },
        {
          icon: '🎓',
          name: '學生專題報告',
          description: '協助學生完成畢業專題與技術指導'
        },
        {
          icon: '🚀',
          name: '自動化部署平台',
          description: 'CI/CD 流程建置、容器化部署'
        },
        {
          icon: '📝',
          name: '個人部落格頁面優化',
          description: '效能優化、SEO 改善、使用者體驗提升'
        }
      ]
    }
  }
}
</script>

<style scoped>
.about {
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

/* Team Introduction */
.team-intro {
  background: white;
}

.intro-content {
  max-width: 900px;
  margin: 0 auto;
}

.intro-card {
  background: var(--light-color);
  padding: 50px;
  border-radius: 0;
  box-shadow: var(--shadow);
}

.intro-text {
  font-size: 1.2rem;
  line-height: 2;
  color: var(--text-color);
  margin-bottom: 25px;
}

.intro-text:last-child {
  margin-bottom: 0;
}

.intro-text strong {
  color: var(--primary-color);
  font-weight: 700;
}

/* Skills Section */
.skills {
  background: var(--light-color);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.skill-category {
  background: white;
  padding: 40px;
  border-radius: 0;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
}

.skill-category:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
  padding-bottom: 20px;
  border-bottom: 3px solid var(--light-color);
}

.category-icon {
  font-size: 2.5rem;
}

.category-header h3 {
  font-size: 1.5rem;
  color: var(--dark-color);
}

.skill-list {
  list-style: none;
}

.skill-list li {
  padding: 12px 0;
  font-size: 1.1rem;
  color: var(--text-color);
  border-bottom: 1px solid var(--light-color);
}

.skill-list li:last-child {
  border-bottom: none;
}

.skill-bullet {
  color: var(--primary-color);
  margin-right: 10px;
  font-weight: 700;
}

/* Services Offered */
.services-offered {
  background: white;
}

.services-list {
  max-width: 900px;
  margin: 0 auto;
}

.service-item {
  display: flex;
  gap: 25px;
  padding: 30px;
  background: var(--light-color);
  border-radius: 0;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.service-item:hover {
  transform: translateX(10px);
  box-shadow: var(--shadow);
}

.service-number {
  min-width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--gradient-2);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
}

.service-content h3 {
  font-size: 1.3rem;
  color: var(--dark-color);
  margin-bottom: 10px;
}

.service-content p {
  color: #666;
  line-height: 1.8;
}

/* Project Experience */
.project-experience {
  background: var(--light-color);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
}

.project-card {
  background: white;
  padding: 35px 25px;
  border-radius: 0;
  text-align: center;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-hover);
}

.project-icon {
  font-size: 3.5rem;
  margin-bottom: 15px;
}

.project-card h3 {
  font-size: 1.3rem;
  color: var(--dark-color);
  margin-bottom: 10px;
}

.project-card p {
  color: #666;
  font-size: 0.95rem;
}

/* About CTA */
.about-cta {
  background: var(--gradient-2);
  color: white;
  padding: 80px 20px;
  text-align: center;
}

.about-cta h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.about-cta p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

/* Responsive */
@media (max-width: 768px) {
  .page-hero h1 {
    font-size: 2.2rem;
  }

  .intro-card {
    padding: 30px 25px;
  }

  .intro-text {
    font-size: 1.1rem;
  }

  .skills-grid,
  .projects-grid,
  .cert-grid {
    grid-template-columns: 1fr;
  }

  .service-item {
    flex-direction: column;
    text-align: center;
  }

  .service-number {
    margin: 0 auto;
  }
}
</style>
