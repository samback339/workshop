<template>
  <div class="portfolio">
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="container">
        <h1 class="fade-in">作品案例</h1>
        <p>我們的專案成果展示</p>
      </div>
    </section>

    <!-- Portfolio Grid -->
    <section class="section projects">
      <div class="container">
        <h2 class="section-title">📂 專案經驗</h2>
        <p class="section-subtitle">多元化的開發經驗</p>

        <div class="projects-grid">
          <div class="project-card" v-for="(project, index) in projects" :key="index">
            <div class="project-image">
              <div class="project-icon">{{ project.icon }}</div>
            </div>
            <div class="project-content">
              <h3>{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-tags">
                <span class="tag" v-for="(tag, i) in project.tags" :key="i">{{ tag }}</span>
              </div>
              <div class="project-features">
                <h4>主要功能：</h4>
                <ul>
                  <li v-for="(feature, i) in project.features" :key="i">{{ feature }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies Section -->
    <section class="section technologies">
      <div class="container">
        <h2 class="section-title">🔧 使用技術</h2>
        <p class="section-subtitle">我們在專案中使用的技術棧</p>

        <div class="tech-showcase">
          <div class="tech-column">
            <h3>前端技術</h3>
            <div class="tech-items">
              <div class="tech-item">
                <span class="tech-icon">⚛️</span>
                <span>React.js / Next.js</span>
              </div>
              <div class="tech-item">
                <span class="tech-icon">💚</span>
                <span>Vue.js</span>
              </div>
              <div class="tech-item">
                <span class="tech-icon">🎨</span>
                <span>CSS / Tailwind</span>
              </div>
              <div class="tech-item">
                <span class="tech-icon">📱</span>
                <span>RWD 響應式設計</span>
              </div>
            </div>
          </div>

          <div class="tech-column">
            <h3>後端技術</h3>
            <div class="tech-items">
              <div class="tech-item">
                <span class="tech-icon">☕</span>
                <span>Java / Spring Boot</span>
              </div>
              <div class="tech-item">
                <span class="tech-icon">🐘</span>
                <span>PHP / Laravel</span>
              </div>
              <div class="tech-item">
                <span class="tech-icon">🐍</span>
                <span>Python / Django</span>
              </div>
              <div class="tech-item">
                <span class="tech-icon">💎</span>
                <span>C# / .NET Core</span>
              </div>
            </div>
          </div>

          <div class="tech-column">
            <h3>DevOps & 雲端</h3>
            <div class="tech-items">
              <div class="tech-item">
                <span class="tech-icon">🐳</span>
                <span>Docker</span>
              </div>
              <div class="tech-item">
                <span class="tech-icon">☁️</span>
                <span>AWS</span>
              </div>
              <div class="tech-item">
                <span class="tech-icon">🔄</span>
                <span>CI/CD</span>
              </div>
              <div class="tech-item">
                <span class="tech-icon">🗄️</span>
                <span>MySQL / PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="section stats">
      <div class="container">
        <h2 class="section-title">📊 成果統計</h2>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-number">5+</div>
            <div class="stat-label">年經驗</div>
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
            <div class="stat-number">5.0</div>
            <div class="stat-label">客戶評分</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="portfolio-cta">
      <div class="container">
        <h2>有專案需求嗎？</h2>
        <p>讓我們一起打造您的下一個成功專案</p>
        <router-link to="/expert" class="btn btn-primary">立即聯繫</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Portfolio',
  data() {
    return {
      projects: [
        {
          icon: '💬',
          title: '即時聊天室系統',
          description: '基於 WebSocket 的即時通訊系統，支援多人聊天與訊息推送',
          tags: ['WebSocket', 'Node.js', 'Vue.js', 'Redis'],
          features: [
            '即時訊息推送與接收',
            '多人群組聊天室',
            '線上用戶狀態顯示',
            '訊息歷史紀錄',
            '檔案分享功能'
          ]
        },
        {
          icon: '⚙️',
          title: '企業後台管理系統',
          description: '功能完整的企業級後台管理平台，包含權限管理與資料統計',
          tags: ['Spring Boot', 'React', 'MySQL', 'JWT'],
          features: [
            '用戶權限角色管理',
            '資料 CRUD 操作',
            '圖表統計分析',
            'RESTful API 設計',
            '響應式後台介面'
          ]
        },
        {
          icon: '🎓',
          title: '學生專題系統',
          description: '協助學生完成畢業專題，提供技術指導與實作支援',
          tags: ['Django', 'Python', 'Bootstrap', 'SQLite'],
          features: [
            '專題管理系統',
            '進度追蹤功能',
            '文件上傳與分享',
            '評分與評論系統',
            '學習資源整合'
          ]
        },
        {
          icon: '🚀',
          title: '自動化部署平台',
          description: 'CI/CD 流程建置，實現自動化測試與部署',
          tags: ['Docker', 'Jenkins', 'AWS', 'Nginx'],
          features: [
            'Git 整合自動部署',
            '容器化應用部署',
            '自動化測試流程',
            '監控與日誌系統',
            '回滾機制'
          ]
        },
        {
          icon: '🛒',
          title: '電商購物網站',
          description: '完整的電商平台，包含購物車、金流串接與訂單管理',
          tags: ['Laravel', 'Vue.js', 'MySQL', 'Payment API'],
          features: [
            '商品管理系統',
            '購物車與結帳流程',
            '第三方金流串接',
            '訂單管理與追蹤',
            '會員系統與優惠券'
          ]
        },
        {
          icon: '📊',
          title: '資料分析儀表板',
          description: '視覺化資料分析平台，提供即時數據統計與報表',
          tags: ['Python', 'Next.js', 'PostgreSQL', 'Chart.js'],
          features: [
            '即時數據視覺化',
            '多維度資料分析',
            '自定義報表生成',
            '資料匯出功能',
            '權限控制'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.portfolio {
  margin-top: 70px;
}

/* Page Hero */
.page-hero {
  background: var(--gradient-3);
  color: white;
  padding: 100px 20px 80px;
  text-align: center;
}

.page-hero h1 {
  font-size: 3rem;
  margin-bottom: 15px;
}

.page-hero p {
  font-size: 1.3rem;
  opacity: 0.9;
}

/* Projects Section */
.projects {
  background: var(--light-color);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.project-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-hover);
}

.project-image {
  background: var(--gradient-1);
  padding: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-icon {
  font-size: 5rem;
  filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.2));
}

.project-content {
  padding: 30px;
}

.project-content h3 {
  font-size: 1.5rem;
  color: var(--dark-color);
  margin-bottom: 15px;
}

.project-description {
  color: #666;
  line-height: 1.8;
  margin-bottom: 20px;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.tag {
  padding: 6px 15px;
  background: var(--light-color);
  color: var(--primary-color);
  border-radius: 15px;
  font-size: 0.85rem;
  font-weight: 600;
}

.project-features {
  border-top: 2px solid var(--light-color);
  padding-top: 20px;
}

.project-features h4 {
  font-size: 1.1rem;
  color: var(--dark-color);
  margin-bottom: 15px;
}

.project-features ul {
  list-style: none;
}

.project-features li {
  padding: 8px 0;
  color: #666;
  position: relative;
  padding-left: 25px;
}

.project-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--secondary-color);
  font-weight: 700;
  font-size: 1.1rem;
}

/* Technologies Section */
.technologies {
  background: white;
}

.tech-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.tech-column {
  background: var(--light-color);
  padding: 40px;
  border-radius: 20px;
  box-shadow: var(--shadow);
}

.tech-column h3 {
  font-size: 1.5rem;
  color: var(--dark-color);
  margin-bottom: 25px;
  text-align: center;
}

.tech-items {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: white;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.tech-item:hover {
  transform: translateX(5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.tech-icon {
  font-size: 1.8rem;
}

.tech-item span:last-child {
  font-weight: 600;
  color: var(--dark-color);
}

/* Stats Section */
.stats {
  background: white;
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
  background: var(--light-color);
  border-radius: 20px;
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
  font-size: 1.2rem;
  color: #666;
  font-weight: 600;
}

/* Portfolio CTA */
.portfolio-cta {
  background: var(--gradient-1);
  color: white;
  padding: 80px 20px;
  text-align: center;
}

.portfolio-cta h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.portfolio-cta p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  opacity: 0.9;
}

/* Responsive */
@media (max-width: 768px) {
  .page-hero h1 {
    font-size: 2.2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .tech-showcase {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
